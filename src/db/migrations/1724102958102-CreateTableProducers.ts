import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableProducers1724102958102 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS producers (
                id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                name VARCHAR NOT NULL,
                cpf BIGINT,
                cnpj BIGINT
            );    
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE producers`)
    }

}
