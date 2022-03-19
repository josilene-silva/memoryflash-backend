import { container } from "tsyringe";

import { UsersRepository } from "@modules/accounts/infra/database/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "@modules/accounts/repositories";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);
