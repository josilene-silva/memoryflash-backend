import { Users } from "@modules/accounts/infra/database/typeorm/entities/Users";
import { BaseEntity } from "@shared/infra/database/typeorm/entities/BaseEntity";
import { UUIDProvider } from "@shared/providers/UUIDProvider/implementations/UUIDProvider";
import { IUUIDProvider } from "@shared/providers/UUIDProvider/models/IUUIDProvider";
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
  categoryId: number;

  @OneToOne(() => Users)
  @JoinColumn({ name: "user_id" })
  user: Users;

  @OneToOne(() => Categories)
  @JoinColumn({ name: "category_id" })
  category: Categories;

  @OneToMany(() => Cards, (card) => card.id)
  cards: Cards[];

  constructor() {
    super();
    const uuidProvider: IUUIDProvider = new UUIDProvider();
    this.id = uuidProvider.generate();
  }
}

export { Sets };
