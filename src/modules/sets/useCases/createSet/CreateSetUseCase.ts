import { IUsersRepository } from "@modules/accounts/repositories";
import { Set } from "@modules/sets/infra/database/typeorm/entities/Set";
import { ISetsRepository } from "@modules/sets/repositories";
import { ICacheProvider } from "@shared/container/providers/CacheProvider/ICacheProvider";

import { AppError } from "@shared/errors/AppError";

import { inject, injectable } from "tsyringe";

interface IRequest {
  name: string;
  description: string;
  categoryId: number;
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
    private usersRepository: IUsersRepository
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
      users: [user],
    });

    await this.cacheProvider.del(`sets:${userId}`);

    return set;
  }
}
