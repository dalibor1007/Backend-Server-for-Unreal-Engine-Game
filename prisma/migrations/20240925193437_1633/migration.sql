/*
  Warnings:

  - The primary key for the `point_has_points` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `point_id` on the `point_has_points` table. All the data in the column will be lost.
  - You are about to drop the column `related_point_id` on the `point_has_points` table. All the data in the column will be lost.
  - Added the required column `point_reference` to the `point_has_points` table without a default value. This is not possible if the table is not empty.
  - Added the required column `related_point_reference` to the `point_has_points` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "point_has_points" DROP CONSTRAINT "point_has_points_point_id_fkey";

-- DropForeignKey
ALTER TABLE "point_has_points" DROP CONSTRAINT "point_has_points_related_point_id_fkey";

-- AlterTable
ALTER TABLE "point_has_points" DROP CONSTRAINT "point_has_points_pkey",
DROP COLUMN "point_id",
DROP COLUMN "related_point_id",
ADD COLUMN     "point_reference" INTEGER NOT NULL,
ADD COLUMN     "related_point_reference" INTEGER NOT NULL,
ADD CONSTRAINT "point_has_points_pkey" PRIMARY KEY ("point_reference", "related_point_reference");

-- AddForeignKey
ALTER TABLE "point_has_points" ADD CONSTRAINT "point_has_points_point_reference_fkey" FOREIGN KEY ("point_reference") REFERENCES "tbl_points"("reference") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "point_has_points" ADD CONSTRAINT "point_has_points_related_point_reference_fkey" FOREIGN KEY ("related_point_reference") REFERENCES "tbl_points"("reference") ON DELETE RESTRICT ON UPDATE CASCADE;
