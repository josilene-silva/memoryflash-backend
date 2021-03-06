import { Practice } from "@modules/practices/infra/database/typeorm/entities/Practice";
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
import { Card } from "./Card";
import { Category } from "./Category";
import { UserToSet } from "./UserToSet";

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

  @OneToMany(() => UserToSet, (userToSet) => userToSet.set)
  userToSet: UserToSet[];

  constructor() {
    super();
    const uuidProvider: IUUIDProvider = new UUIDProvider();
    this.id = uuidProvider.generate();
  }
}

export { Set };
