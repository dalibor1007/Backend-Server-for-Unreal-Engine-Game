-- AlterTable
ALTER TABLE "tbl_maps" ADD COLUMN     "id_point" INTEGER;

-- AddForeignKey
ALTER TABLE "tbl_maps" ADD CONSTRAINT "tbl_maps_id_point_fkey" FOREIGN KEY ("id_point") REFERENCES "tbl_points"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
