/*
  Warnings:

  - A unique constraint covering the columns `[reference]` on the table `tbl_miscs` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `affiliation_change` to the `tbl_user_configurations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `damage_multiplier` to the `tbl_user_configurations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `equiped_ship_id` to the `tbl_user_configurations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `equiped_skin_id` to the `tbl_user_configurations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `experience` to the `tbl_user_configurations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jump_delay` to the `tbl_user_configurations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `money_multiplier` to the `tbl_user_configurations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reputation_change` to the `tbl_user_configurations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `resistance_multiplier` to the `tbl_user_configurations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `respawn_delay` to the `tbl_user_configurations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tbl_user_configurations" ADD COLUMN     "affiliation_change" INTEGER NOT NULL,
ADD COLUMN     "damage_multiplier" INTEGER NOT NULL,
ADD COLUMN     "equiped_ship_id" INTEGER NOT NULL,
ADD COLUMN     "equiped_skin_id" INTEGER NOT NULL,
ADD COLUMN     "experience" INTEGER NOT NULL,
ADD COLUMN     "jump_delay" INTEGER NOT NULL,
ADD COLUMN     "money_multiplier" INTEGER NOT NULL,
ADD COLUMN     "reputation_change" INTEGER NOT NULL,
ADD COLUMN     "resistance_multiplier" INTEGER NOT NULL,
ADD COLUMN     "respawn_delay" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "user_has_guns" (
    "gun_reference" BIGINT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_has_guns_pkey" PRIMARY KEY ("gun_reference","user_id")
);

-- CreateTable
CREATE TABLE "user_has_miscs" (
    "misc_reference" BIGINT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_has_miscs_pkey" PRIMARY KEY ("misc_reference","user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tbl_miscs_reference_key" ON "tbl_miscs"("reference");

-- AddForeignKey
ALTER TABLE "user_has_guns" ADD CONSTRAINT "user_has_guns_gun_reference_fkey" FOREIGN KEY ("gun_reference") REFERENCES "tbl_guns"("reference") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_has_guns" ADD CONSTRAINT "user_has_guns_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "tbl_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_has_miscs" ADD CONSTRAINT "user_has_miscs_misc_reference_fkey" FOREIGN KEY ("misc_reference") REFERENCES "tbl_miscs"("reference") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_has_miscs" ADD CONSTRAINT "user_has_miscs_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "tbl_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
