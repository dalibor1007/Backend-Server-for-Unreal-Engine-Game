/*
  Warnings:

  - Added the required column `point_reference` to the `tbl_guilds` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tbl_guilds" ADD COLUMN     "point_reference" BIGINT NOT NULL;

-- AlterTable
ALTER TABLE "tbl_user_configurations" ALTER COLUMN "damage_multiplier" SET DEFAULT 0.00,
ALTER COLUMN "damage_multiplier" SET DATA TYPE DECIMAL(18,8),
ALTER COLUMN "money_multiplier" SET DEFAULT 0.00,
ALTER COLUMN "money_multiplier" SET DATA TYPE DECIMAL(18,8),
ALTER COLUMN "resistance_multiplier" SET DEFAULT 0.00,
ALTER COLUMN "resistance_multiplier" SET DATA TYPE DECIMAL(18,8);

-- CreateTable
CREATE TABLE "tbl_robots" (
    "id" SERIAL NOT NULL,
    "jump_delay" INTEGER NOT NULL,
    "respawn_delay" INTEGER NOT NULL,
    "reputation_change" INTEGER NOT NULL,
    "affiliation_change" INTEGER NOT NULL,
    "money_multiplier" DECIMAL(18,8) NOT NULL DEFAULT 0.00,
    "damage_multiplier" DECIMAL(18,8) NOT NULL DEFAULT 0.00,
    "resistance_multiplier" DECIMAL(18,8) NOT NULL DEFAULT 0.00,
    "experience" INTEGER NOT NULL,
    "ai_name" INTEGER NOT NULL,
    "equiped_ship_id" INTEGER NOT NULL,
    "equiped_skin_id" INTEGER NOT NULL,
    "equiped_guns" INTEGER[],
    "equiped_miscs" INTEGER[],
    "loot_boxes" INTEGER[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tbl_robots_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tbl_guilds" ADD CONSTRAINT "tbl_guilds_point_reference_fkey" FOREIGN KEY ("point_reference") REFERENCES "tbl_points"("reference") ON DELETE RESTRICT ON UPDATE CASCADE;
