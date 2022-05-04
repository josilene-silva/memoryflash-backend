import { User } from "@modules/accounts/infra/database/typeorm/entities/User";
import { IBaseEntity } from "@shared/dtos";

export type SetsDTO = IBaseEntity & {
  id: string;
  name: string;
  description: string;
  categoryId: number;
  users: User[];
};
