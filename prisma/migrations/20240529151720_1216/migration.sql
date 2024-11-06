/*
  Warnings:

  - A unique constraint covering the columns `[reference]` on the table `tbl_points` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "tbl_points_reference_key" ON "tbl_points"("reference");
