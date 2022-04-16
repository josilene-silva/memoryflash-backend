import { CreateUserDTO } from "@modules/accounts/dtos";
import { User } from "@modules/accounts/infra/database/typeorm/entities/User";
import { IUsersRepository } from "@modules/accounts/repositories";
import { AppError } from "@shared/errors/AppError";

import { hash } from "bcrypt";
import { injectable, inject } from "tsyringe";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ email, name, password }: CreateUserDTO): Promise<User> {
    const userAlreadyExits = await this.usersRepository.findByEmail(email);

    if (userAlreadyExits) {
      throw new AppError("Usuário já cadastrado");
    }

    const passwordHash = await hash(password, 10);

    const user = await this.usersRepository.create({
      name,
      email,
      password: passwordHash,
    });

    return user;
  }
}

export { CreateUserUseCase };
