import { CreateUserDTO } from "@modules/accounts/dtos";
import { Users } from "@modules/accounts/infra/database/typeorm/entities/Users";
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

  async execute({ email, name, password }: CreateUserDTO): Promise<Users> {
    const userAlreadyExits = await this.usersRepository.findByEmail(email);

    if (userAlreadyExits) {
      throw new AppError("User already exists");
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
