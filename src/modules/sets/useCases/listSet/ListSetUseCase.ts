import { inject, injectable } from "tsyringe";
import { ISetsRepository } from "@modules/sets/repositories";
import { Set } from "@modules/sets/infra/database/typeorm/entities/Set";
import { ICacheProvider } from "@shared/container/providers/CacheProvider/ICacheProvider";
import { Card } from "@modules/sets/infra/database/typeorm/entities/Card";

@injectable()
export class ListSetUseCase {
  constructor(
    @inject("SetsRepository")
    private setsRepository: ISetsRepository,
    @inject("CacheProvider")
    private cacheProvider: ICacheProvider
  ) {}

  async execute(id: string): Promise<Set> {
    let set: null | Set = null;

    const setCache = await this.cacheProvider.get(`set:${id}`);

    if (!setCache) {
      set = await this.setsRepository.listOne(id);
      await this.cacheProvider.set(`set:${id}`, JSON.stringify(set));
    } else {
      set = JSON.parse(setCache);
    }
    set.cards = this.sortDifficultyLevel(set.cards);

    return set;
  }

  private sortDifficultyLevel(cards: Card[]) {
    const orderedCards = cards.sort((a, b) => {
      if (a.difficultyLevel < b.difficultyLevel) {
        return 1;
      }
      if (a.difficultyLevel > b.difficultyLevel) {
        return -1;
      }

      return 0;
    });

    return orderedCards;
  }
}
