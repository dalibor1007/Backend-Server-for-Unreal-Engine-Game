/*
  Warnings:

  - The primary key for the `point_has_points` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "point_has_points" DROP CONSTRAINT "point_has_points_point_reference_fkey";

-- DropForeignKey
ALTER TABLE "point_has_points" DROP CONSTRAINT "point_has_points_related_point_reference_fkey";

-- DropForeignKey
ALTER TABLE "tbl_achievement_symbols" DROP CONSTRAINT "tbl_achievement_symbols_achievement_reference_fkey";

-- DropForeignKey
ALTER TABLE "tbl_points" DROP CONSTRAINT "tbl_points_galaxy_index_fkey";

-- DropForeignKey
ALTER TABLE "tbl_ship_skins" DROP CONSTRAINT "tbl_ship_skins_reference_ship_fkey";

-- AlterTable
ALTER TABLE "point_has_points" DROP CONSTRAINT "point_has_points_pkey",
ALTER COLUMN "point_reference" SET DATA TYPE BIGINT,
ALTER COLUMN "related_point_reference" SET DATA TYPE BIGINT,
ADD CONSTRAINT "point_has_points_pkey" PRIMARY KEY ("point_reference", "related_point_reference");

-- AlterTable
ALTER TABLE "tbl_achievement_symbols" ALTER COLUMN "achievement_reference" SET DATA TYPE BIGINT,
ALTER COLUMN "reference" SET DATA TYPE BIGINT,
ALTER COLUMN "order" SET DATA TYPE BIGINT,
ALTER COLUMN "premium" SET DATA TYPE BIGINT,
ALTER COLUMN "quantity" SET DATA TYPE BIGINT;

-- AlterTable
ALTER TABLE "tbl_achievements" ALTER COLUMN "reference" SET DATA TYPE BIGINT;

-- AlterTable
ALTER TABLE "tbl_galaxies" ALTER COLUMN "index" SET DATA TYPE BIGINT;

-- AlterTable
ALTER TABLE "tbl_guns" ALTER COLUMN "reference" SET DATA TYPE BIGINT,
ALTER COLUMN "accuracy" SET DATA TYPE BIGINT,
ALTER COLUMN "speed" SET DATA TYPE BIGINT,
ALTER COLUMN "damage" SET DATA TYPE BIGINT,
ALTER COLUMN "type" SET DATA TYPE BIGINT,
ALTER COLUMN "repair_per_hp" SET DATA TYPE BIGINT,
ALTER COLUMN "level_required" SET DATA TYPE BIGINT,
ALTER COLUMN "total_hp" SET DATA TYPE BIGINT,
ALTER COLUMN "money_type" SET DATA TYPE BIGINT;

-- AlterTable
ALTER TABLE "tbl_maps" ALTER COLUMN "xpos" SET DATA TYPE BIGINT,
ALTER COLUMN "ypos" SET DATA TYPE BIGINT,
ALTER COLUMN "galaxy" SET DATA TYPE BIGINT,
ALTER COLUMN "access_level_area" SET DATA TYPE BIGINT,
ALTER COLUMN "guild_area" SET DATA TYPE BIGINT;

-- AlterTable
ALTER TABLE "tbl_points" ALTER COLUMN "reference" SET DATA TYPE BIGINT,
ALTER COLUMN "access_level_area" SET DATA TYPE BIGINT,
ALTER COLUMN "ai_guild_area" SET DATA TYPE BIGINT,
ALTER COLUMN "xpos" SET DATA TYPE BIGINT,
ALTER COLUMN "ypos" SET DATA TYPE BIGINT,
ALTER COLUMN "galaxy_index" SET DATA TYPE BIGINT;

-- AlterTable
ALTER TABLE "tbl_ship_skins" ALTER COLUMN "reference" SET DATA TYPE BIGINT,
ALTER COLUMN "money_type" SET DATA TYPE BIGINT,
ALTER COLUMN "reference_ship" SET DATA TYPE BIGINT;

-- AlterTable
ALTER TABLE "tbl_ships" ALTER COLUMN "wings_size" SET DATA TYPE BIGINT,
ALTER COLUMN "speed" SET DATA TYPE BIGINT,
ALTER COLUMN "evasion" SET DATA TYPE BIGINT,
ALTER COLUMN "cargo_space" SET DATA TYPE BIGINT,
ALTER COLUMN "shield" SET DATA TYPE BIGINT,
ALTER COLUMN "gun_slots" SET DATA TYPE BIGINT,
ALTER COLUMN "missile_slots" SET DATA TYPE BIGINT,
ALTER COLUMN "misc_slots" SET DATA TYPE BIGINT,
ALTER COLUMN "radar_range" SET DATA TYPE BIGINT,
ALTER COLUMN "level_required" SET DATA TYPE BIGINT,
ALTER COLUMN "total_hp" SET DATA TYPE BIGINT,
ALTER COLUMN "money_type" SET DATA TYPE BIGINT,
ALTER COLUMN "reference" SET DATA TYPE BIGINT;

-- AddForeignKey
ALTER TABLE "tbl_points" ADD CONSTRAINT "tbl_points_galaxy_index_fkey" FOREIGN KEY ("galaxy_index") REFERENCES "tbl_galaxies"("index") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "point_has_points" ADD CONSTRAINT "point_has_points_point_reference_fkey" FOREIGN KEY ("point_reference") REFERENCES "tbl_points"("reference") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "point_has_points" ADD CONSTRAINT "point_has_points_related_point_reference_fkey" FOREIGN KEY ("related_point_reference") REFERENCES "tbl_points"("reference") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_ship_skins" ADD CONSTRAINT "tbl_ship_skins_reference_ship_fkey" FOREIGN KEY ("reference_ship") REFERENCES "tbl_ships"("reference") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_achievement_symbols" ADD CONSTRAINT "tbl_achievement_symbols_achievement_reference_fkey" FOREIGN KEY ("achievement_reference") REFERENCES "tbl_achievements"("reference") ON DELETE RESTRICT ON UPDATE CASCADE;
