import { CreateUserDTO } from "../dtos";
import { User } from "../infra/database/typeorm/entities/User";

interface IUsersRepository {
  create(data: CreateUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User | undefined>;
  findById(id: string): Promise<User | undefined>;
}

export { IUsersRepository };
