import { Set } from "@modules/sets/infra/database/typeorm/entities/Set";
import { BaseEntity } from "@shared/infra/database/typeorm/entities/BaseEntity";
import { UUIDProvider } from "@shared/providers/UUIDProvider/implementations/UUIDProvider";
import { IUUIDProvider } from "@shared/providers/UUIDProvider/models/IUUIDProvider";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("practices")
class Practice extends BaseEntity {
  @PrimaryColumn("uuid")
  id: string;

  @Column({ name: "set_id" })
  setId: string;

  @Column({ name: "amount_easy" })
  amountEasy: number;

  @Column({ name: "amount_medium" })
  amountMedium: number;

  @Column({ name: "amount_hard" })
  amountHard: number;

  @Column({ name: "start_time" })
  startTime: Date;

  @Column({ name: "end_time" })
  endTime: Date;

  constructor() {
    super();
    const uuidProvider: IUUIDProvider = new UUIDProvider();
    this.id = uuidProvider.generate();
  }
}

export { Practice };
