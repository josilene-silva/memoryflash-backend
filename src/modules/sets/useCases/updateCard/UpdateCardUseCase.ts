import { UpdateCardDTO } from "@modules/sets/dtos";
import { ICardsRepository, ISetsRepository } from "@modules/sets/repositories";
import { AppError } from "@shared/errors/AppError";

import { inject, injectable } from "tsyringe";

@injectable()
export class UpdateCardUseCase {
  constructor(
    @inject("CardsRepository")
    private cardsRepository: ICardsRepository,
    @inject("SetsRepository")
    private setsRepository: ISetsRepository
  ) {}

  async execute({ id, front, back, setId }: UpdateCardDTO): Promise<void> {
    const cardExists = await this.cardsRepository.findById(id);
    if (!cardExists) throw new AppError("Cartão não encontrado", 404);

    const setExists = await this.setsRepository.findById(id);
    if (!setExists) throw new AppError("Conjunto não encontrado", 404);

    await this.cardsRepository.update({ id, front, back, setId });
  }
}
