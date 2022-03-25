import { User } from "@modules/accounts/infra/database/typeorm/entities/User";
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

@Entity("sets")
class Set extends BaseEntity {
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

  @OneToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;

  @OneToOne(() => Category)
  @JoinColumn({ name: "category_id" })
  category: Category;

  @OneToMany(() => Card, (card) => card.set)
  cards: Card[];

  constructor() {
    super();
    const uuidProvider: IUUIDProvider = new UUIDProvider();
    this.id = uuidProvider.generate();
  }
}

export { Set };
