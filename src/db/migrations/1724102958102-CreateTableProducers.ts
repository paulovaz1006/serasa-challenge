import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableProducers1724102958102 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(``)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
