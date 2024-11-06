/*
  Warnings:

  - You are about to drop the column `id_map` on the `tbl_user_configurations` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "tbl_user_configurations" DROP COLUMN "id_map",
ADD COLUMN     "id_point" INTEGER;

-- AddForeignKey
ALTER TABLE "tbl_user_configurations" ADD CONSTRAINT "tbl_user_configurations_id_point_fkey" FOREIGN KEY ("id_point") REFERENCES "tbl_points"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
