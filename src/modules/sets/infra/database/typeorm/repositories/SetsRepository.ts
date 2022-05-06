import { CreateSetDTO, UpdateSetDTO } from "@modules/sets/dtos";
import { ISetsRepository } from "@modules/sets/repositories";
import { getRepository, Repository } from "typeorm";
import { Set } from "../entities/Set";

export class SetsRepository implements ISetsRepository {
  private repository: Repository<Set>;

  constructor() {
    this.repository = getRepository(Set);
  }

  async create({ name, description, categoryId }: CreateSetDTO): Promise<Set> {
    const set = this.repository.create({
      name,
      description,
      categoryId,
    });

    const setCreated = await this.repository.save(set);

    return setCreated;
  }

  async findById(id: string): Promise<Set> {
    const set = await this.repository.findOne({
      where: { id },
      relations: ["cards"],
    });
    return set;
  }

  async update({
    id,
    name,
    description,
    categoryId,
  }: UpdateSetDTO): Promise<void> {
    const set = this.repository.create({
      id,
      name,
      description,
      categoryId,
    });

    await this.repository.save(set);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  async list(userId: string): Promise<Set[]> {
    const sets = await this.repository
      .createQueryBuilder("sets")
      .leftJoinAndSelect("sets.userToSet", "userToSet")
      .leftJoinAndSelect("sets.category", "category")
      .leftJoinAndSelect("sets.cards", "cards")
      .leftJoinAndSelect("sets.practices", "practices")
      .where("userToSet.userId = :userId", { userId })
      .getMany();

    return sets;
  }

  async listOne(id: string): Promise<Set | undefined> {
    const sets = await this.repository.findOne({
      where: {
        id,
      },
      relations: ["category", "cards", "practices"],
    });
    return sets;
  }
}
