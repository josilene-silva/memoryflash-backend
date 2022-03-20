import { container } from "tsyringe";

import { UsersRepository } from "@modules/accounts/infra/database/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "@modules/accounts/repositories";

import { CategoriesRepository } from "@modules/sets/infra/database/typeorm/repositories/CategoriesRepository";
import { ICategoriesRepository } from "@modules/sets/repositories";
import { ISetsRepository } from "@modules/sets/repositories/ISetsRepository";
import { SetsRepository } from "@modules/sets/infra/database/typeorm/repositories/SetsRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<ISetsRepository>("SetsRepository", SetsRepository);
