import { UpdateCardDifficultyLevelDTO } from "@modules/practices/dtos/UpdateCardDifficultyLevelDTO";
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

  async updateByIdIn(data: UpdateCardDifficultyLevelDTO[]): Promise<void> {
    const promises = data.map((update) => {
      const card = this.repository.create({
        id: update.id,
        difficultyLevel: update.difficultyLevel,
      });
      return this.repository.save(card);
    });

    await Promise.all(promises);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
