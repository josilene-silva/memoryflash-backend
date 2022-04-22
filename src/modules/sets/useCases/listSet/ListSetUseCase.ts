import { inject, injectable } from "tsyringe";
import { ISetsRepository } from "@modules/sets/repositories";
import { Set } from "@modules/sets/infra/database/typeorm/entities/Set";
import { ICacheProvider } from "@shared/container/providers/CacheProvider/ICacheProvider";

@injectable()
export class ListSetUseCase {
  constructor(
    @inject("SetsRepository")
    private setsRepository: ISetsRepository,
    @inject("CacheProvider")
    private cacheProvider: ICacheProvider
  ) {}

  async execute(id: string): Promise<Set> {
    let set = null;

    const setCache = await this.cacheProvider.get(`set:${id}`);

    if (!setCache) {
      console.log("Pega do banco");
      set = await this.setsRepository.listOne(id);
      await this.cacheProvider.set(`set:${id}`, JSON.stringify(set));
    } else {
      console.log("Pega do cache");
      set = JSON.parse(setCache);
    }
    // await this.cacheProvider.del(`set:${id}`);

    return set;
  }
}
