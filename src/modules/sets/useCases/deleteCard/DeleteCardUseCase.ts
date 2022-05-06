import { ICardsRepository } from "@modules/sets/repositories";
import { ICacheProvider } from "@shared/container/providers/CacheProvider/ICacheProvider";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
export class DeleteCardUseCase {
  constructor(
    @inject("CardsRepository")
    private cardsRepository: ICardsRepository,
    @inject("CacheProvider")
    private cacheProvider: ICacheProvider
  ) {}

  async execute(id: string, userId?: string): Promise<void> {
    const cardExists = await this.cardsRepository.findById(id);

    if (!cardExists) throw new AppError("Cartão não encontrado", 404);

    await this.cardsRepository.delete(id);

    await this.cacheProvider.del(`set:${cardExists.setId}`);
    await this.cacheProvider.del(`sets:${userId}`);
  }
}
