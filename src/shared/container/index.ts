import { container } from "tsyringe";

import "./providers";

import { UsersRepository } from "@modules/accounts/infra/database/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "@modules/accounts/repositories";

import {
  ICategoriesRepository,
  ICardsRepository,
  ISetsRepository,
  IUsersToSetsRepository,
} from "@modules/sets/repositories";
import { CategoriesRepository } from "@modules/sets/infra/database/typeorm/repositories/CategoriesRepository";
import { CardsRepository } from "@modules/sets/infra/database/typeorm/repositories/CardsRepository";
import { SetsRepository } from "@modules/sets/infra/database/typeorm/repositories/SetsRepository";
import { UsersToSetsRepository } from "@modules/sets/infra/database/typeorm/repositories/UsersToSetsRepository";

import { PracticesRepository } from "@modules/practices/infra/database/typeorm/repositories/PracticesRepository";
import { IPracticesRepository } from "@modules/practices/repositories/IPracticesRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<ISetsRepository>("SetsRepository", SetsRepository);

container.registerSingleton<ICardsRepository>(
  "CardsRepository",
  CardsRepository
);

container.registerSingleton<IPracticesRepository>(
  "PracticesRepository",
  PracticesRepository
);

container.registerSingleton<IUsersToSetsRepository>(
  "UsersToSetsRepository",
  UsersToSetsRepository
);
