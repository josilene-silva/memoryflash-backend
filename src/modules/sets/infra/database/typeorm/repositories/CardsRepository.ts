import { CreateCardDTO } from "@modules/sets/dtos";
import { ICardsRepository } from "@modules/sets/repositories";
import { getRepository, Repository } from "typeorm";
import { Cards } from "../entities/Cards";

export class CardsRepository implements ICardsRepository {
  private repository: Repository<Cards>;

  constructor() {
    this.repository = getRepository(Cards);
  }

  async create({ front, back, setId }: CreateCardDTO): Promise<Cards> {
    const card = this.repository.create({
      front,
      back,
      setId,
    });

    const cardCreated = await this.repository.save(card);

    return cardCreated;
  }
}
