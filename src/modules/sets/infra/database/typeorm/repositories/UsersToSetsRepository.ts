import { CreateUserToSetDTO } from "@modules/sets/dtos";
import { IUsersToSetsRepository } from "@modules/sets/repositories";
import { getRepository, Repository } from "typeorm";
import { UserToSet } from "../entities/UserToSet";

export class UsersToSetsRepository implements IUsersToSetsRepository {
  private repository: Repository<UserToSet>;

  constructor() {
    this.repository = getRepository(UserToSet);
  }

  async create({ setId, userId }: CreateUserToSetDTO): Promise<UserToSet> {
    const userToSet = this.repository.create({
      setId,
      userId,
    });

    const userToSetCreated = await this.repository.save(userToSet);

    return userToSetCreated;
  }

  async findById(id: string): Promise<UserToSet> {
    const userToSet = await this.repository.findOne({ userId: id });
    return userToSet;
  }
}
