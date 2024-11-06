/*
  Warnings:

  - The primary key for the `user_has_guns` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `user_id` on the `user_has_guns` table. All the data in the column will be lost.
  - The primary key for the `user_has_miscs` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `user_id` on the `user_has_miscs` table. All the data in the column will be lost.
  - Added the required column `id_user` to the `user_has_guns` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_user` to the `user_has_miscs` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "user_has_guns" DROP CONSTRAINT "user_has_guns_user_id_fkey";

-- DropForeignKey
ALTER TABLE "user_has_miscs" DROP CONSTRAINT "user_has_miscs_user_id_fkey";

-- AlterTable
ALTER TABLE "user_has_guns" DROP CONSTRAINT "user_has_guns_pkey",
DROP COLUMN "user_id",
ADD COLUMN     "id_user" INTEGER NOT NULL,
ADD CONSTRAINT "user_has_guns_pkey" PRIMARY KEY ("gun_reference", "id_user");

-- AlterTable
ALTER TABLE "user_has_miscs" DROP CONSTRAINT "user_has_miscs_pkey",
DROP COLUMN "user_id",
ADD COLUMN     "id_user" INTEGER NOT NULL,
ADD CONSTRAINT "user_has_miscs_pkey" PRIMARY KEY ("misc_reference", "id_user");

-- CreateTable
CREATE TABLE "tbl_guilds" (
    "id" SERIAL NOT NULL,
    "id_user" INTEGER NOT NULL,
    "reference" BIGINT NOT NULL,
    "name" TEXT NOT NULL,
    "damage_multiplier" DECIMAL(18,8) NOT NULL DEFAULT 0.00,
    "resistance_multiplier" INTEGER NOT NULL,
    "asteroid_is_enemy" BOOLEAN NOT NULL,
    "hunting_time" INTEGER NOT NULL,
    "reputation" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tbl_guilds_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_has_guilds" (
    "guild_reference" BIGINT NOT NULL,
    "id_user" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_has_guilds_pkey" PRIMARY KEY ("guild_reference","id_user")
);

-- CreateIndex
CREATE UNIQUE INDEX "tbl_guilds_reference_key" ON "tbl_guilds"("reference");

-- AddForeignKey
ALTER TABLE "user_has_guns" ADD CONSTRAINT "user_has_guns_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "tbl_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_has_miscs" ADD CONSTRAINT "user_has_miscs_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "tbl_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_guilds" ADD CONSTRAINT "tbl_guilds_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "tbl_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_has_guilds" ADD CONSTRAINT "user_has_guilds_guild_reference_fkey" FOREIGN KEY ("guild_reference") REFERENCES "tbl_guilds"("reference") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_has_guilds" ADD CONSTRAINT "user_has_guilds_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "tbl_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
