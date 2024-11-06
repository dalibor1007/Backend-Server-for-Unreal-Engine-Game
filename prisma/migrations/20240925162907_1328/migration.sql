/*
  Warnings:

  - Added the required column `access_level_area` to the `tbl_points` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ai_guild_area` to the `tbl_points` table without a default value. This is not possible if the table is not empty.
  - Added the required column `xpos` to the `tbl_points` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ypos` to the `tbl_points` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tbl_points" ADD COLUMN     "access_level_area" INTEGER NOT NULL,
ADD COLUMN     "ai_guild_area" INTEGER NOT NULL,
ADD COLUMN     "reference_point" INTEGER,
ADD COLUMN     "xpos" INTEGER NOT NULL,
ADD COLUMN     "ypos" INTEGER NOT NULL;
