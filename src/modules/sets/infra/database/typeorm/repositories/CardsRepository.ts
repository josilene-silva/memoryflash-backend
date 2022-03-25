import { CreateCardDTO } from "@modules/sets/dtos";
import { ICardsRepository } from "@modules/sets/repositories";
import { getRepository, Repository } from "typeorm";
import { Card } from "../entities/Card";

export class CardsRepository implements ICardsRepository {
  private repository: Repository<Card>;

  constructor() {
    this.repository = getRepository(Card);
  }

  async create({ front, back, setId }: CreateCardDTO): Promise<Card> {
    const card = this.repository.create({
      front,
      back,
      setId,
    });

    const cardCreated = await this.repository.save(card);

    return cardCreated;
  }
}
