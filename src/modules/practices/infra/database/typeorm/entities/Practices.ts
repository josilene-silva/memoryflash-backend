import { Sets } from "@modules/sets/infra/database/typeorm/entities/Sets";
import { BaseEntity } from "@shared/infra/database/typeorm/entities/BaseEntity";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

@Entity("practices")
class Practices extends BaseEntity {
  @PrimaryColumn("uuid")
  id: string;

  @OneToMany(() => Sets, (set) => set.id)
  sets: Sets[];

  @Column({ name: "amount_easy" })
  amountEasy: string;

  @Column({ name: "amount_medium" })
  amountMedium: string;

  @Column({ name: "amount_hard" })
  amountHard: string;

  duration: Date;
}

export { Practices };
