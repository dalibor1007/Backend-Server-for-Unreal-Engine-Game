/*
  Warnings:

  - A unique constraint covering the columns `[reference_player_research]` on the table `tbl_planet_research_levels` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `reference_player_research` to the `tbl_planet_research_levels` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tbl_planet_research_levels" ADD COLUMN     "reference_player_research" BIGINT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "tbl_planet_research_levels_reference_player_research_key" ON "tbl_planet_research_levels"("reference_player_research");

-- AddForeignKey
ALTER TABLE "tbl_planet_research_levels" ADD CONSTRAINT "tbl_planet_research_levels_reference_player_research_fkey" FOREIGN KEY ("reference_player_research") REFERENCES "tbl_planet_research_types"("reference") ON DELETE RESTRICT ON UPDATE CASCADE;
