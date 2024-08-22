import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableFarm1724276828653 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS farms (
                id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                name VARCHAR NOT NULL,
                city VARCHAR NOT NULL,
                state VARCHAR NOT NULL,
                area_total_hectares DECIMAL(10, 2) NOT NULL,
                area_agriculture_hectares DECIMAL(10, 2) NOT NULL,
                area_vegetation_hectares DECIMAL(10, 2) NOT NULL,
                producer_id UUID,
            CONSTRAINT fk_producer
                FOREIGN KEY (producer_id) REFERENCES producers(id)
                ON DELETE CASCADE
            );
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE farms`)
    }

}
