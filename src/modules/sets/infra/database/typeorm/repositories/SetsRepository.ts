import { CreateSetsDTO } from "@modules/sets/dtos";
import { ISetsRepository } from "@modules/sets/repositories";
import { getRepository, Repository } from "typeorm";
import { Sets } from "../entities/Sets";

export class SetsRepository implements ISetsRepository {
  private repository: Repository<Sets>;

  constructor() {
    this.repository = getRepository(Sets);
  }

  async create({
    name,
    description,
    userId,
    categoryId,
  }: CreateSetsDTO): Promise<Sets> {
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
