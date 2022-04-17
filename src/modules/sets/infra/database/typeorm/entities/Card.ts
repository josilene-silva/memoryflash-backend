import { BaseEntity } from "@shared/infra/database/typeorm/entities/BaseEntity";
import { UUIDProvider } from "@shared/providers/UUIDProvider/implementations/UUIDProvider";
import { IUUIDProvider } from "@shared/providers/UUIDProvider/models/IUUIDProvider";
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { Set } from "./Set";

@Entity("cards")
class Card extends BaseEntity {
  @PrimaryColumn("uuid")
  id: string;

  @Column()
  front: string;

  @Column()
  back: string;

  @Column({ name: "set_id" })
  setId: string;

  @Column({ name: "difficulty_level" })
  difficultyLevel: number;

  @OneToOne(() => Set)
  @JoinColumn({ name: "set_id" })
  set: Set;

  constructor() {
    super();
    const uuidProvider: IUUIDProvider = new UUIDProvider();
    this.id = uuidProvider.generate();
  }
}

export { Card };
