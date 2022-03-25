import { CreateCardDTO } from "@modules/sets/dtos";
import { Card } from "@modules/sets/infra/database/typeorm/entities/Card";
import { ICardsRepository } from "@modules/sets/repositories";

import { inject, injectable } from "tsyringe";

@injectable()
export class CreateCardUseCase {
  constructor(
    @inject("CardsRepository")
    private cardsRepository: ICardsRepository
  ) {}

  async execute({ front, back, setId }: CreateCardDTO): Promise<Card> {
    const card = await this.cardsRepository.create({ front, back, setId });

    return card;
  }
}
