import { CreateSetsDTO, UpdateSetDTO } from "@modules/sets/dtos";
import { ISetsRepository } from "@modules/sets/repositories";
import { getRepository, Repository } from "typeorm";
import { Set } from "../entities/Set";

export class SetsRepository implements ISetsRepository {
  private repository: Repository<Set>;

  constructor() {
    this.repository = getRepository(Set);
  }

  async create({
    name,
    description,
    userId,
    categoryId,
  }: CreateSetsDTO): Promise<Set> {
    const set = this.repository.create({
      name,
      description,
      userId,
      categoryId,
    });

    const setCreated = await this.repository.save(set);

    return setCreated;
  }

  async findById(id: string): Promise<Set> {
    const set = await this.repository.findOne({ id });
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
}
