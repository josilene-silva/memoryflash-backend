import { BaseEntity } from "@shared/infra/database/typeorm/entities/BaseEntity";
import { UUIDProvider } from "@shared/providers/UUIDProvider/implementations/UUIDProvider";
import { IUUIDProvider } from "@shared/providers/UUIDProvider/models/IUUIDProvider";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("cards")
class Cards extends BaseEntity {
  @PrimaryColumn("uuid")
  id: string;

  @Column()
  front: string;

  @Column()
  back: string;

  @Column({ name: "set_id" })
  setId: string;

  constructor() {
    super();
    const uuidProvider: IUUIDProvider = new UUIDProvider();
    this.id = uuidProvider.generate();
  }
}

export { Cards };
