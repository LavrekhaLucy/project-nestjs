import { MigrationInterface, QueryRunner } from "typeorm";

export class AddRelations1763112994491 implements MigrationInterface {
  name = 'AddRelations1763112994491'

  public async up(queryRunner: QueryRunner): Promise<void> {
    // Спочатку додаємо колонку, якщо її немає
    await queryRunner.query(`ALTER TABLE "users" ADD COLUMN IF NOT EXISTS "image" text`);
    // Потім робимо її NOT NULL
    await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "image" SET NOT NULL`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Робимо колонку nullable
    await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "image" DROP NOT NULL`);
    // Можна залишити колонку або видалити її
    // await queryRunner.query(`ALTER TABLE "users" DROP COLUMN IF EXISTS "image"`);
  }
}
