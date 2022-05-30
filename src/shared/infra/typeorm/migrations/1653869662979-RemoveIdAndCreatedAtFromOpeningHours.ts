import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class RemoveIdAndCreatedAtFromOpeningHours1653869662979
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumns("openinghours", ["id", "created_at"]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
