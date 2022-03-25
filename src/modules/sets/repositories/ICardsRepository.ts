import { CreateCardDTO } from "../dtos";
import { Card } from "../infra/database/typeorm/entities/Card";

export interface ICardsRepository {
  create({ front, back, setId }: CreateCardDTO): Promise<Card>;
}
