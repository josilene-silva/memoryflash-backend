import { CreatePracticeDTO } from "../dtos/CreatePracticeDTO";
import { Practice } from "../infra/database/typeorm/entities/Practice";

export interface IPracticesRepository {
  create(data: CreatePracticeDTO): Promise<Practice>;
  list(id: string): Promise<Practice>;
}
