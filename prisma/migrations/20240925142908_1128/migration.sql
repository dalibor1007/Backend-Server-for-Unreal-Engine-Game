/*
  Warnings:

  - You are about to drop the column `id_ship` on the `tbl_ship_skins` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[reference]` on the table `tbl_ship_skins` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "tbl_ship_skins" DROP CONSTRAINT "tbl_ship_skins_id_ship_fkey";

-- AlterTable
ALTER TABLE "tbl_ship_skins" DROP COLUMN "id_ship";

-- CreateIndex
CREATE UNIQUE INDEX "tbl_ship_skins_reference_key" ON "tbl_ship_skins"("reference");

-- AddForeignKey
ALTER TABLE "tbl_ship_skins" ADD CONSTRAINT "tbl_ship_skins_reference_fkey" FOREIGN KEY ("reference") REFERENCES "tbl_ships"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
