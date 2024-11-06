/*
  Warnings:

  - Added the required column `increase` to the `tbl_player_researches` table without a default value. This is not possible if the table is not empty.
  - Added the required column `level` to the `tbl_player_researches` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "StatusPlayerResearchs" AS ENUM ('IN_PROGESS', 'CONCLUDED', 'CANCELED');

-- AlterTable
ALTER TABLE "tbl_player_researches" ADD COLUMN     "increase" INTEGER NOT NULL,
ADD COLUMN     "level" INTEGER NOT NULL,
ADD COLUMN     "status" "StatusPlayerResearchs" NOT NULL DEFAULT 'IN_PROGESS',
ADD COLUMN     "with_boots" BOOLEAN NOT NULL DEFAULT false;
