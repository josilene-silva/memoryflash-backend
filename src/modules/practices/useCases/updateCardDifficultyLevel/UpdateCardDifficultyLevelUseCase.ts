import { UpdateCardDifficultyLevelDTO } from "@modules/practices/dtos/UpdateCardDifficultyLevelDTO";
import { ICardsRepository } from "@modules/sets/repositories";
import { inject, injectable } from "tsyringe";

@injectable()
export class UpdateCardDifficultyLevelUseCase {
  constructor(
    @inject("CardsRepository")
    private cardsRepository: ICardsRepository
  ) {}

  async execute(data: UpdateCardDifficultyLevelDTO[]): Promise<void> {
    const cards = await this.cardsRepository.updateByIdIn(data);
    console.log(cards);
  }
}
