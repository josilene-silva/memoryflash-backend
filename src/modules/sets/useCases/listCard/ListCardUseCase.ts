import { Card } from "@modules/sets/infra/database/typeorm/entities/Card";
import { ICardsRepository } from "@modules/sets/repositories";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
export class ListCardUseCase {
  constructor(
    @inject("CardsRepository")
    private cardsRepository: ICardsRepository
  ) {}

  async execute(id: string): Promise<Card> {
    const card = await this.cardsRepository.findById(id);
    if (!card) throw new AppError("Card don't exists");
    return card;
  }
}
