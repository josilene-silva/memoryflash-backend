import { CreateSetsDTO } from "@modules/sets/dtos";
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
}
