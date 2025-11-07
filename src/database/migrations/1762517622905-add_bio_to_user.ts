import { MigrationInterface, QueryRunner } from "typeorm";

export class AddBioToUser1762517622905 implements MigrationInterface {
    name = 'AddBioToUser1762517622905'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "bio" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "bio"`);
    }

}
