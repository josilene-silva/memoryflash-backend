import { UpdateCardDTO } from "@modules/sets/dtos";
import { ICardsRepository, ISetsRepository } from "@modules/sets/repositories";
import { ICacheProvider } from "@shared/container/providers/CacheProvider/ICacheProvider";
import { AppError } from "@shared/errors/AppError";

import { inject, injectable } from "tsyringe";

interface IRequest extends UpdateCardDTO {
  userId: string;
}

@injectable()
export class UpdateCardUseCase {
  constructor(
    @inject("CardsRepository")
    private cardsRepository: ICardsRepository,
    @inject("SetsRepository")
    private setsRepository: ISetsRepository,
    @inject("CacheProvider")
    private cacheProvider: ICacheProvider
  ) {}

  async execute({ id, front, back, setId, userId }: IRequest): Promise<void> {
    const cardExists = await this.cardsRepository.findById(id);
    if (!cardExists) throw new AppError("Cartão não encontrado", 404);

    const setExists = await this.setsRepository.findById(id);
    if (!setExists) throw new AppError("Conjunto não encontrado", 404);

    await this.cardsRepository.update({ id, front, back, setId });

    await this.cacheProvider.del(`set:${setId}`);
    await this.cacheProvider.del(`sets:${userId}`);
  }
}
