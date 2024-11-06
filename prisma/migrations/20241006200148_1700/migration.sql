/*
  Warnings:

  - You are about to drop the column `time_bossted` on the `tbl_player_research_types` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "tbl_player_research_types" DROP COLUMN "time_bossted",
ADD COLUMN     "time_boosted" DECIMAL(18,8) NOT NULL DEFAULT 0.00;
