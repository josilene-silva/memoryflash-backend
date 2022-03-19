import { CreateUserDTO } from "../dtos";
import { Users } from "../infra/database/typeorm/entities/Users";

interface IUsersRepository {
  create(data: CreateUserDTO): Promise<Users>;
  findByEmail(email: string): Promise<Users | undefined>;
  findById(id: string): Promise<Users | undefined>;
}

export { IUsersRepository };
