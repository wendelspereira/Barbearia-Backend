import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddPropertyIsNulable1653571694270 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      "features",
      "id",
      new TableColumn({
        name: "id",
        type: "uuid",
        isPrimary: true,
        isNullable: false,
      })
    );

    await queryRunner.changeColumn(
      "users",
      "id",
      new TableColumn({
        name: "id",
        type: "uuid",
        isPrimary: true,
        isNullable: false,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      "features",
      "id",
      new TableColumn({
        name: "id",
        type: "uuid",
        isPrimary: true,
      })
    );
    await queryRunner.changeColumn(
      "users",
      "id",
      new TableColumn({
        name: "id",
        type: "uuid",
        isPrimary: true,
      })
    );
  }
}
