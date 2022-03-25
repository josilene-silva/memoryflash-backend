import { CreateCardDTO, UpdateCardDTO } from "@modules/sets/dtos";
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

  async update({ id, front, back, setId }: UpdateCardDTO): Promise<void> {
    const card = this.repository.create({
      id,
      front,
      back,
      setId,
    });

    await this.repository.save(card);
  }

  async findById(id: string): Promise<Card> {
    const card = await this.repository.findOne({ id });
    return card;
  }
}
