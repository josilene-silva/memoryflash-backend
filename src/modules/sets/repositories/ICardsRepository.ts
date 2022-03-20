import { CreateCardDTO } from "../dtos";
import { Cards } from "../infra/database/typeorm/entities/Cards";

export interface ICardsRepository {
  create({ front, back, setId }: CreateCardDTO): Promise<Cards>;
}
