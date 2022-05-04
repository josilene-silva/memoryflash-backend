import { User } from "@modules/accounts/infra/database/typeorm/entities/User";
import { BaseEntity } from "@shared/infra/database/typeorm/entities/BaseEntity";

import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

import { Set } from "./Set";

@Entity("users_sets")
class UserToSet extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "user_id" })
  userId: string;

  @Column({ name: "set_id" })
  setId: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;

  @ManyToOne(() => Set)
  @JoinColumn({ name: "set_id" })
  set: Set;
}

export { UserToSet };
