import { CreateCardDTO } from "@modules/sets/dtos";
import { Card } from "@modules/sets/infra/database/typeorm/entities/Card";
import { ICardsRepository, ISetsRepository } from "@modules/sets/repositories";
import { ICacheProvider } from "@shared/container/providers/CacheProvider/ICacheProvider";
import { AppError } from "@shared/errors/AppError";

import { inject, injectable } from "tsyringe";

@injectable()
export class CreateCardUseCase {
  constructor(
    @inject("CardsRepository")
    private cardsRepository: ICardsRepository,
    @inject("SetsRepository")
    private setsRepository: ISetsRepository,
    @inject("CacheProvider")
    private cacheProvider: ICacheProvider
  ) {}

  async execute({ front, back, setId, userId }: CreateCardDTO): Promise<Card> {
    const setExists = await this.setsRepository.findById(setId);
    if (!setExists) throw new AppError("Conjunto não encotrado", 404);

    const card = await this.cardsRepository.create({ front, back, setId });

    await this.cacheProvider.del(`set:${setId}`);
    await this.cacheProvider.del(`sets:${userId}`);

    return card;
  }
}
