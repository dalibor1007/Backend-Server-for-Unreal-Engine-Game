/*
  Warnings:

  - You are about to drop the column `reference` on the `tbl_planet_research_levels` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "tbl_planet_research_levels_reference_key";

-- AlterTable
ALTER TABLE "tbl_planet_research_levels" DROP COLUMN "reference";
