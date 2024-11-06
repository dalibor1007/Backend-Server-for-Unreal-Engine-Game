/*
  Warnings:

  - Changed the type of `reference` on the `tbl_ships` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "tbl_ships" DROP COLUMN "reference",
ADD COLUMN     "reference" INTEGER NOT NULL;
