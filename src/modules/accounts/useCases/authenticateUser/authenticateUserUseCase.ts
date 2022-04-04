import { UserDTO } from "@modules/accounts/dtos";
import { IUsersRepository } from "@modules/accounts/repositories";
import { AppError } from "@shared/errors/AppError";
import { authConfig } from "@shared/config/auth";

import { inject, injectable } from "tsyringe";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

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
    private usersRepository: IUsersRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email.trim());

    if (!user) {
      throw new AppError("Email ou password incorrect");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("Email ou password incorrect");
    }

    const token = sign({ sub: user.id }, authConfig.secretToken, {
      expiresIn: authConfig.expiresInToken,
    });

    return { user, token };
  }
}
