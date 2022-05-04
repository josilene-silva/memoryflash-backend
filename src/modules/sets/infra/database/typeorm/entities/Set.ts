import { User } from "@modules/accounts/infra/database/typeorm/entities/User";
import { Practice } from "@modules/practices/infra/database/typeorm/entities/Practice";
import { BaseEntity } from "@shared/infra/database/typeorm/entities/BaseEntity";
import { UUIDProvider } from "@shared/providers/UUIDProvider/implementations/UUIDProvider";
import { IUUIDProvider } from "@shared/providers/UUIDProvider/models/IUUIDProvider";
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryColumn,
} from "typeorm";
import { Card } from "./Card";
import { Category } from "./Category";

@Entity("sets")
class Set extends BaseEntity {
  @PrimaryColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ name: "category_id" })
  categoryId: number;

  @OneToOne(() => Category)
  @JoinColumn({ name: "category_id" })
  category: Category;

  @OneToMany(() => Card, (card) => card.set)
  cards: Card[];

  @OneToMany(() => Practice, (practice) => practice.set)
  practices: Practice[];

  @ManyToMany(() => User)
  @JoinTable({
    name: "users_sets",
    joinColumns: [{ name: "set_id" }],
    inverseJoinColumns: [{ name: "user_id" }],
  })
  users: User[];

  constructor() {
    super();
    const uuidProvider: IUUIDProvider = new UUIDProvider();
    this.id = uuidProvider.generate();
  }
}

export { Set };
