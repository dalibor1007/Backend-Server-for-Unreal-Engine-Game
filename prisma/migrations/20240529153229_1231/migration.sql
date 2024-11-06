/*
  Warnings:

  - You are about to drop the column `accessLevelArea` on the `tbl_maps` table. All the data in the column will be lost.
  - You are about to drop the column `ai_guild_area` on the `tbl_maps` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "tbl_maps" DROP COLUMN "accessLevelArea",
DROP COLUMN "ai_guild_area",
ADD COLUMN     "access_level_area" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "guild_area" INTEGER NOT NULL DEFAULT 0;
