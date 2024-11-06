/*
  Warnings:

  - You are about to drop the column `updated_at` on the `point_has_points` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "point_has_points" DROP COLUMN "updated_at";

-- CreateTable
CREATE TABLE "tbl_achievements" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "detail" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "rule_type" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tbl_achievements_pkey" PRIMARY KEY ("id")
);
