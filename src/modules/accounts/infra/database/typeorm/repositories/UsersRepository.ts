import { CreateUserDTO } from "@modules/accounts/dtos";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { getRepository, Repository } from "typeorm";
import { Users } from "../entities/Users";

class UsersRepository implements IUsersRepository {
  private repository: Repository<Users>;

  constructor() {
    this.repository = getRepository(Users);
  }

  async create({ name, email, password }: CreateUserDTO): Promise<Users> {
    const user = this.repository.create({
      name,
      password,
      email,
    });

    const userCreated = await this.repository.save(user);

    return userCreated;
  }

  async findByEmail(email: string): Promise<Users | undefined> {
    const user = await this.repository.findOne({ email });
    return user;
  }

  async findById(id: string): Promise<Users | undefined> {
    const user = await this.repository.findOne({ id });
    return user;
  }
}

export { UsersRepository };
