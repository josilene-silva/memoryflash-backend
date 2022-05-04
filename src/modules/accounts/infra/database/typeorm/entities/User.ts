import { UUIDProvider } from "@shared/providers/UUIDProvider/implementations/UUIDProvider";
import { IUUIDProvider } from "@shared/providers/UUIDProvider/models/IUUIDProvider";
import { BaseEntity } from "@shared/infra/database/typeorm/entities/BaseEntity";
import { UserToSet } from "@modules/sets/infra/database/typeorm/entities/UserToSet";

import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

@Entity("users")
class User extends BaseEntity {
  @PrimaryColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => UserToSet, (userToSet) => userToSet.user)
  userToSet: UserToSet[];

  constructor() {
    super();
    const uuidProvider: IUUIDProvider = new UUIDProvider();
    this.id = uuidProvider.generate();
  }
}

export { User };
