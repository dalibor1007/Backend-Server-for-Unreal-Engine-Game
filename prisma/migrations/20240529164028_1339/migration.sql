/*
  Warnings:

  - Made the column `id_point` on table `tbl_maps` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "tbl_maps" ALTER COLUMN "id_point" SET NOT NULL;
