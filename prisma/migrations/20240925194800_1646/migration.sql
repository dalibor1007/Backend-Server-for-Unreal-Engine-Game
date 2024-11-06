/*
  Warnings:

  - A unique constraint covering the columns `[reference]` on the table `tbl_achievements` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "tbl_achievements" ADD COLUMN     "reference" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "tbl_achievements_reference_key" ON "tbl_achievements"("reference");
