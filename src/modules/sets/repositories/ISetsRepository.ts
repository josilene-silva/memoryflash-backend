import { CreateSetsDTO, UpdateSetDTO } from "@modules/sets/dtos";
import { Set } from "../infra/database/typeorm/entities/Set";

export interface ISetsRepository {
  create(data: CreateSetsDTO): Promise<Set>;
  findById(id: string): Promise<Set | undefined>;
  update(data: UpdateSetDTO): Promise<void>;
}
