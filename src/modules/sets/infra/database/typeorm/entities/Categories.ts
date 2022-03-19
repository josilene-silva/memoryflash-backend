import { BaseEntity } from "@shared/infra/database/typeorm/entities/BaseEntity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("categories")
class Categories extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;
}

export { Categories };
