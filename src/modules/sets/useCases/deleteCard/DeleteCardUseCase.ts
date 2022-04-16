import { ICardsRepository } from "@modules/sets/repositories";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
export class DeleteCardUseCase {
  constructor(
    @inject("CardsRepository")
    private cardsRepository: ICardsRepository
  ) {}

  async execute(id: string): Promise<void> {
    const cardExists = await this.cardsRepository.findById(id);

    if (!cardExists) throw new AppError("Cartão não encontrado", 404);

    await this.cardsRepository.delete(id);
  }
}
