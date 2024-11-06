/*
  Warnings:

  - A unique constraint covering the columns `[reference]` on the table `tbl_guns` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[reference]` on the table `tbl_ship_skins` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[reference]` on the table `tbl_ships` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "tbl_ship_skins_reference_ship_key";

-- CreateIndex
CREATE UNIQUE INDEX "tbl_guns_reference_key" ON "tbl_guns"("reference");

-- CreateIndex
CREATE UNIQUE INDEX "tbl_ship_skins_reference_key" ON "tbl_ship_skins"("reference");

-- CreateIndex
CREATE UNIQUE INDEX "tbl_ships_reference_key" ON "tbl_ships"("reference");
