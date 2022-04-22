import { CreateCardDTO } from "@modules/sets/dtos";
import { Card } from "@modules/sets/infra/database/typeorm/entities/Card";
import { ICardsRepository } from "@modules/sets/repositories";
import { ICacheProvider } from "@shared/container/providers/CacheProvider/ICacheProvider";

import { inject, injectable } from "tsyringe";

@injectable()
export class CreateCardUseCase {
  constructor(
    @inject("CardsRepository")
    private cardsRepository: ICardsRepository,
    @inject("CacheProvider")
    private cacheProvider: ICacheProvider
  ) {}

  async execute({ front, back, setId, userId }: CreateCardDTO): Promise<Card> {
    const card = await this.cardsRepository.create({ front, back, setId });

    await this.cacheProvider.del(`set:${setId}`);
    await this.cacheProvider.del(`sets:${userId}`);

    return card;
  }
}
