/*
  Warnings:

  - You are about to drop the `tbl_robots` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user_has_guilds` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[id_user]` on the table `tbl_guilds` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "GuildType" AS ENUM ('STATIC', 'BOTS');

-- AlterEnum
ALTER TYPE "Roles" ADD VALUE 'BOTS';

-- DropForeignKey
ALTER TABLE "user_has_guilds" DROP CONSTRAINT "user_has_guilds_guild_reference_fkey";

-- DropForeignKey
ALTER TABLE "user_has_guilds" DROP CONSTRAINT "user_has_guilds_id_user_fkey";

-- AlterTable
ALTER TABLE "tbl_guilds" ADD COLUMN     "type" "GuildType" NOT NULL DEFAULT 'STATIC',
ALTER COLUMN "id_user" DROP NOT NULL;

-- AlterTable
ALTER TABLE "tbl_users" ADD COLUMN     "guild_reference" BIGINT,
ADD COLUMN     "guild_reference_affiliated" BIGINT;

-- DropTable
DROP TABLE "tbl_robots";

-- DropTable
DROP TABLE "user_has_guilds";

-- CreateIndex
CREATE UNIQUE INDEX "tbl_guilds_id_user_key" ON "tbl_guilds"("id_user");

-- AddForeignKey
ALTER TABLE "tbl_users" ADD CONSTRAINT "tbl_users_guild_reference_affiliated_fkey" FOREIGN KEY ("guild_reference_affiliated") REFERENCES "tbl_guilds"("reference") ON DELETE RESTRICT ON UPDATE CASCADE;
