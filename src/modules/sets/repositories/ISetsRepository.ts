import { CreateSetsDTO } from "@modules/sets/dtos";
import { Set } from "../infra/database/typeorm/entities/Set";

export interface ISetsRepository {
  create({
    name,
    description,
    userId,
    categoryId,
  }: CreateSetsDTO): Promise<Set>;
}
