import { UserDTO } from "@modules/accounts/dtos";
import { IUsersRepository } from "@modules/accounts/repositories";
import { ICacheProvider } from "@shared/container/providers/CacheProvider/ICacheProvider";
import { AppError } from "@shared/errors/AppError";
import { authConfig } from "@shared/config/auth";

import { inject, injectable } from "tsyringe";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { User } from "@modules/accounts/infra/database/typeorm/entities/User";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: UserDTO;
  token: string;
}
@injectable()
export class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
    @inject("CacheProvider")
    private cacheProvider: ICacheProvider
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    let user = null as User;

    const userCache = await this.cacheProvider.get(`user:${email.trim()}`);

    if (!userCache) {
      user = await this.usersRepository.findByEmail(email.trim());
      await this.cacheProvider.set(
        `user:${email.trim()}`,
        JSON.stringify(user)
      );
    } else {
      user = JSON.parse(userCache);
    }

    if (!user) {
      throw new AppError("Email ou senha incorretos");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("Email ou senha incorretos");
    }

    const token = sign({ sub: user.id }, authConfig.secretToken, {
      expiresIn: authConfig.expiresInToken,
    });

    return { user, token };
  }
}
