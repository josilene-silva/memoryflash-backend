import { Users } from "@modules/accounts/infra/database/typeorm/entities/Users";
import { BaseEntity } from "@shared/infra/database/typeorm/entities/BaseEntity";
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryColumn,
} from "typeorm";
import { Cards } from "./Cards";
import { Categories } from "./Categories";

@Entity("sets")
class Sets extends BaseEntity {
  @PrimaryColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ name: "user_id" })
  userId: string;

  @Column({ name: "category_id" })
  categoryId: string;

  @OneToOne(() => Users)
  @JoinColumn({ name: "user_id" })
  user: Users;

  @OneToOne(() => Categories)
  @JoinColumn({ name: "category_id" })
  category: Categories;

  @OneToMany(() => Cards, (card) => card.id)
  cards: Cards[];
}

export { Sets };
