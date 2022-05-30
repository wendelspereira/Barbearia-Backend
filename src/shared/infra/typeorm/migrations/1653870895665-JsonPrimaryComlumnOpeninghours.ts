import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class JsonPrimaryComlumnOpeninghours1653870895665 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn(
            "openinghours",
            "openingHoursJSON",
            new TableColumn({
              name: "openingHoursJSON",
              type: "varchar",
              isPrimary: true,
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
