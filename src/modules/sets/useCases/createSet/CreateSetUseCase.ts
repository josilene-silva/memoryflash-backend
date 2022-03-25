import { CreateSetsDTO } from "@modules/sets/dtos";
import { Set } from "@modules/sets/infra/database/typeorm/entities/Set";
import { ISetsRepository } from "@modules/sets/repositories";

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
  }: CreateSetsDTO): Promise<Set> {
    const set = await this.setsRepository.create({
      name,
      description,
      userId,
      categoryId,
    });

    return set;
  }
}
