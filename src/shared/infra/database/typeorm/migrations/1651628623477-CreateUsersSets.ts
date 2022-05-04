import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsersSets1651628623477 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users_sets",
        columns: [
          {
            name: "id",
            type: "integer",
            generationStrategy: "increment",
            isPrimary: true,
            isNullable: false,
            isGenerated: true,
          },
          {
            name: "user_id",
            type: "uuid",
          },
          {
            name: "set_id",
            type: "uuid",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "FKUsersSetsUser",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["user_id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            name: "FKUsersSetsSet",
            referencedTableName: "sets",
            referencedColumnNames: ["id"],
            columnNames: ["set_id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users_sets");
  }
}
