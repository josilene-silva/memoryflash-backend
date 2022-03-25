import { Set } from "@modules/sets/infra/database/typeorm/entities/Set";
import { BaseEntity } from "@shared/infra/database/typeorm/entities/BaseEntity";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

@Entity("practices")
class Practice extends BaseEntity {
  @PrimaryColumn("uuid")
  id: string;

  @OneToMany(() => Set, (set) => set.id)
  sets: Set[];

  @Column({ name: "amount_easy" })
  amountEasy: string;

  @Column({ name: "amount_medium" })
  amountMedium: string;

  @Column({ name: "amount_hard" })
  amountHard: string;

  duration: Date;
}

export { Practice };
