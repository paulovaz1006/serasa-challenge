import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableCulture1724276892276 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS cultures (
                id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                name VARCHAR NOT NULL,
                farm_id UUID,
                CONSTRAINT fk_farm
                    FOREIGN KEY (farm_id) REFERENCES farms(id)
                    ON DELETE CASCADE
            );
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE cultures`)
    }

}
