import { CreateDateColumn, UpdateDateColumn } from "typeorm";

class BaseEntity {
  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  public merge(props: Partial<this>): this {
    return Object.assign(this, props);
  }
}

export { BaseEntity };
