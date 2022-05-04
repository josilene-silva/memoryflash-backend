import { CreateUserToSetDTO } from "../dtos/UsersToSets/CreateUserToSetDTO";
import { UserToSet } from "../infra/database/typeorm/entities/UserToSet";

export interface IUsersToSetsRepository {
  create(data: CreateUserToSetDTO): Promise<UserToSet>;
  findById(id: string): Promise<UserToSet | undefined>;
}
