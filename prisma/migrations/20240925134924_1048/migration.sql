/*
  Warnings:

  - The `size` column on the `tbl_ships` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `repair_per_hp` column on the `tbl_ships` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `cost_price` column on the `tbl_ships` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `wings_size` on the `tbl_ships` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `speed` on the `tbl_ships` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `evasion` on the `tbl_ships` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `cargo_space` on the `tbl_ships` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `shield` on the `tbl_ships` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `gun_slots` on the `tbl_ships` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `missile_slots` on the `tbl_ships` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `misc_slots` on the `tbl_ships` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `radar_range` on the `tbl_ships` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `level_required` on the `tbl_ships` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `total_hp` on the `tbl_ships` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `money_type` on the `tbl_ships` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "tbl_ships" DROP COLUMN "size",
ADD COLUMN     "size" DECIMAL(18,8) NOT NULL DEFAULT 0.00,
DROP COLUMN "wings_size",
ADD COLUMN     "wings_size" INTEGER NOT NULL,
DROP COLUMN "speed",
ADD COLUMN     "speed" INTEGER NOT NULL,
DROP COLUMN "evasion",
ADD COLUMN     "evasion" INTEGER NOT NULL,
DROP COLUMN "cargo_space",
ADD COLUMN     "cargo_space" INTEGER NOT NULL,
DROP COLUMN "shield",
ADD COLUMN     "shield" INTEGER NOT NULL,
DROP COLUMN "gun_slots",
ADD COLUMN     "gun_slots" INTEGER NOT NULL,
DROP COLUMN "missile_slots",
ADD COLUMN     "missile_slots" INTEGER NOT NULL,
DROP COLUMN "misc_slots",
ADD COLUMN     "misc_slots" INTEGER NOT NULL,
DROP COLUMN "radar_range",
ADD COLUMN     "radar_range" INTEGER NOT NULL,
DROP COLUMN "repair_per_hp",
ADD COLUMN     "repair_per_hp" DECIMAL(18,8) NOT NULL DEFAULT 0.00,
DROP COLUMN "level_required",
ADD COLUMN     "level_required" INTEGER NOT NULL,
DROP COLUMN "total_hp",
ADD COLUMN     "total_hp" INTEGER NOT NULL,
DROP COLUMN "cost_price",
ADD COLUMN     "cost_price" DECIMAL(18,8) NOT NULL DEFAULT 0.00,
DROP COLUMN "money_type",
ADD COLUMN     "money_type" INTEGER NOT NULL;
