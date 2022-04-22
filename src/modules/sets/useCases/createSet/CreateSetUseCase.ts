import { CreateSetDTO } from "@modules/sets/dtos";
import { Set } from "@modules/sets/infra/database/typeorm/entities/Set";
import { ISetsRepository } from "@modules/sets/repositories";
import { ICacheProvider } from "@shared/container/providers/CacheProvider/ICacheProvider";

import { inject, injectable } from "tsyringe";

@injectable()
export class CreateSetUseCase {
  constructor(
    @inject("SetsRepository")
    private setsRepository: ISetsRepository,
    @inject("CacheProvider")
    private cacheProvider: ICacheProvider
  ) {}

  async execute({
    name,
    description,
    userId,
    categoryId,
  }: CreateSetDTO): Promise<Set> {
    const set = await this.setsRepository.create({
      name,
      description,
      userId,
      categoryId,
    });

    await this.cacheProvider.del(`sets:${userId}`);

    return set;
  }
}
