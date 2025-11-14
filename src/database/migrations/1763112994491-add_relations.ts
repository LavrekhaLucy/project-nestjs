import { MigrationInterface, QueryRunner } from "typeorm";

export class AddRelations1763112994491 implements MigrationInterface {
    name = 'AddRelations1763112994491'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "image" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "image" DROP NOT NULL`);
    }

}
