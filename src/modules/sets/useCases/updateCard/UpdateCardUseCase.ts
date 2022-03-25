import { UpdateCardDTO } from "@modules/sets/dtos";
import { ICardsRepository } from "@modules/sets/repositories";
import { AppError } from "@shared/errors/AppError";

import { inject, injectable } from "tsyringe";

@injectable()
export class UpdateCardUseCase {
  constructor(
    @inject("CardsRepository")
    private cardsRepository: ICardsRepository
  ) {}

  async execute({ id, front, back, setId }: UpdateCardDTO): Promise<void> {
    const cardExists = this.cardsRepository.findById(id);
    if (!cardExists) throw new AppError("Category don't exists", 404);

    await this.cardsRepository.update({ id, front, back, setId });
  }
}
