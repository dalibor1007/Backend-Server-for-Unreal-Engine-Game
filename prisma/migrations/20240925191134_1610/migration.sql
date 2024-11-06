/*
  Warnings:

  - You are about to drop the column `reference_point` on the `tbl_points` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "tbl_points" DROP COLUMN "reference_point";

-- CreateTable
CREATE TABLE "point_has_points" (
    "point_id" INTEGER NOT NULL,
    "related_point_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "point_has_points_pkey" PRIMARY KEY ("point_id","related_point_id")
);

-- AddForeignKey
ALTER TABLE "point_has_points" ADD CONSTRAINT "point_has_points_point_id_fkey" FOREIGN KEY ("point_id") REFERENCES "tbl_points"("reference") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "point_has_points" ADD CONSTRAINT "point_has_points_related_point_id_fkey" FOREIGN KEY ("related_point_id") REFERENCES "tbl_points"("reference") ON DELETE RESTRICT ON UPDATE CASCADE;
