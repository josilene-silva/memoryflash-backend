import { BaseEntity } from "@shared/infra/database/typeorm/entities/BaseEntity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("categories")
class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}

export { Category };
