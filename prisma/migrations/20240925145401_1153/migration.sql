/*
  Warnings:

  - A unique constraint covering the columns `[reference_ship]` on the table `tbl_ship_skins` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `reference_ship` to the `tbl_ship_skins` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "tbl_ship_skins" DROP CONSTRAINT "tbl_ship_skins_reference_fkey";

-- DropIndex
DROP INDEX "tbl_ship_skins_reference_key";

-- AlterTable
ALTER TABLE "tbl_ship_skins" ADD COLUMN     "reference_ship" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "tbl_ship_skins_reference_ship_key" ON "tbl_ship_skins"("reference_ship");

-- AddForeignKey
ALTER TABLE "tbl_ship_skins" ADD CONSTRAINT "tbl_ship_skins_reference_ship_fkey" FOREIGN KEY ("reference_ship") REFERENCES "tbl_ships"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
