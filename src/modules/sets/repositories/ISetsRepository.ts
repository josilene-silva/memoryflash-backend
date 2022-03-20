import { CreateSetsDTO } from "@modules/sets/dtos";
import { Sets } from "../infra/database/typeorm/entities/Sets";

export interface ISetsRepository {
  create({
    name,
    description,
    userId,
    categoryId,
  }: CreateSetsDTO): Promise<Sets>;
}
