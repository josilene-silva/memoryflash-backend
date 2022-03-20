import { CreateCardDTO } from "@modules/sets/dtos";
import { Cards } from "@modules/sets/infra/database/typeorm/entities/Cards";
import { ICardsRepository } from "@modules/sets/repositories/ICardsRepository";

import { inject, injectable } from "tsyringe";

@injectable()
export class CreateCardUseCase {
  constructor(
    @inject("CardsRepository")
    private cardsRepository: ICardsRepository
  ) {}

  async execute({ front, back, setId }: CreateCardDTO): Promise<Cards> {
    const card = await this.cardsRepository.create({ front, back, setId });

    return card;
  }
}
