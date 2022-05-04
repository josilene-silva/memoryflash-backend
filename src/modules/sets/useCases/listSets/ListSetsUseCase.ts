import { inject, injectable } from "tsyringe";
import { ISetsRepository } from "@modules/sets/repositories";
import { Set } from "@modules/sets/infra/database/typeorm/entities/Set";
import { ICacheProvider } from "@shared/container/providers/CacheProvider/ICacheProvider";

@injectable()
export class ListSetsUseCase {
  constructor(
    @inject("SetsRepository")
    private setsRepository: ISetsRepository,
    @inject("CacheProvider")
    private cacheProvider: ICacheProvider
  ) {}

  async execute(userId?: string): Promise<Set[]> {
    let sets = [];

    const setsCache = await this.cacheProvider.get(`sets:${userId}`);

    if (!setsCache) {
      sets = await this.setsRepository.list(userId);
      await this.cacheProvider.set(`sets:${userId}`, JSON.stringify(sets));
    } else {
      sets = JSON.parse(setsCache);
    }

    return sets;
  }
}
