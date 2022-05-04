import { User } from "@modules/accounts/infra/database/typeorm/entities/User";
import { Set } from "@modules/sets/infra/database/typeorm/entities/Set";

import { IBaseEntity } from "@shared/dtos";

export type UserToSetDTO = IBaseEntity & {
  id: string;
  userId: string;
  setId: string;
  set: Set;
  user: User;
};
