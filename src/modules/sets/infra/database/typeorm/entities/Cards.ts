import { BaseEntity } from "@shared/infra/database/typeorm/entities/BaseEntity";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("cards")
class Cards extends BaseEntity {
  @PrimaryColumn("uuid")
  id: string;

  @Column()
  front: string;

  @Column()
  back: string;
}

export { Cards };
