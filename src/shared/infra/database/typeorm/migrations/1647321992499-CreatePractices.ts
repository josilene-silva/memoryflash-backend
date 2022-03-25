import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePractices1647321992499 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "practices",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "set_id",
            type: "uuid",
          },
          {
            name: "amount_easy",
            type: "integer",
          },
          {
            name: "amount_medium",
            type: "integer",
          },
          {
            name: "amount_hard",
            type: "integer",
          },
          {
            name: "duration",
            type: "time",
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
            name: "FKSetPractices",
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
    await queryRunner.dropTable("practices");
  }
}
