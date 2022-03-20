import { CreateSetsDTO } from "@modules/sets/dtos";
import { Sets } from "@modules/sets/infra/database/typeorm/entities/Sets";
import { ISetsRepository } from "@modules/sets/repositories/ISetsRepository";

import { inject, injectable } from "tsyringe";

@injectable()
export class CreateSetUseCase {
  constructor(
    @inject("SetsRepository")
    private setsRepository: ISetsRepository
  ) {}

  async execute({
    name,
    description,
    userId,
    categoryId,
  }: CreateSetsDTO): Promise<Sets> {
    const set = await this.setsRepository.create({
      name,
      description,
      userId,
      categoryId,
    });

    return set;
  }
}
