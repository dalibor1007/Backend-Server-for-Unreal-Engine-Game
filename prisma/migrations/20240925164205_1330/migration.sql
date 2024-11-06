/*
  Warnings:

  - A unique constraint covering the columns `[index]` on the table `tbl_galaxies` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `galaxy_index` to the `tbl_points` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tbl_points" ADD COLUMN     "galaxy_index" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "tbl_galaxies_index_key" ON "tbl_galaxies"("index");

-- AddForeignKey
ALTER TABLE "tbl_points" ADD CONSTRAINT "tbl_points_galaxy_index_fkey" FOREIGN KEY ("galaxy_index") REFERENCES "tbl_galaxies"("index") ON DELETE RESTRICT ON UPDATE CASCADE;
