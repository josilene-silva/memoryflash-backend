import { IUsersRepository } from "@modules/accounts/repositories";
import { CreateSetDTO } from "@modules/sets/dtos";
import { Set } from "@modules/sets/infra/database/typeorm/entities/Set";
import {
  ISetsRepository,
  IUsersToSetsRepository,
} from "@modules/sets/repositories";
import { ICacheProvider } from "@shared/container/providers/CacheProvider/ICacheProvider";

import { AppError } from "@shared/errors/AppError";

import { inject, injectable } from "tsyringe";

interface IRequest extends CreateSetDTO {
  userId: string;
}

@injectable()
export class CreateSetUseCase {
  constructor(
    @inject("SetsRepository")
    private setsRepository: ISetsRepository,
    @inject("CacheProvider")
    private cacheProvider: ICacheProvider,
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
    @inject("UsersToSetsRepository")
    private usersToSetsRepository: IUsersToSetsRepository
  ) {}

  async execute({
    name,
    description,
    userId,
    categoryId,
  }: IRequest): Promise<Set> {
    const user = await this.usersRepository.findById(userId);

    if (!user) {
      throw new AppError("Usuário não encontrado", 404);
    }

    const set = await this.setsRepository.create({
      name,
      description,
      categoryId,
    });

    await this.usersToSetsRepository.create({
      userId,
      setId: set.id,
    });

    await this.cacheProvider.del(`sets:${userId}`);

    return set;
  }
}
