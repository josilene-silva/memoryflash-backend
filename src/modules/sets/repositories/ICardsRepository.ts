import { CreateCardDTO, UpdateCardDTO } from "../dtos";
import { Card } from "../infra/database/typeorm/entities/Card";

export interface ICardsRepository {
  create({ front, back, setId }: CreateCardDTO): Promise<Card>;
  findById(id: string): Promise<Card | undefined>;
  update({ id, front, back, setId }: UpdateCardDTO): Promise<void>;
}
