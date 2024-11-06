/*
  Warnings:

  - Added the required column `ship` to the `tbl_achievement_symbols` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tbl_achievement_symbols" ADD COLUMN     "ship" BIGINT NOT NULL;
