/*
  Warnings:

  - You are about to drop the `tbl_map_has_points` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tbl_maps` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "tbl_map_has_points" DROP CONSTRAINT "tbl_map_has_points_id_map_fkey";

-- DropForeignKey
ALTER TABLE "tbl_map_has_points" DROP CONSTRAINT "tbl_map_has_points_id_point_fkey";

-- DropForeignKey
ALTER TABLE "tbl_maps" DROP CONSTRAINT "tbl_maps_id_point_fkey";

-- DropForeignKey
ALTER TABLE "tbl_user_configurations" DROP CONSTRAINT "tbl_user_configurations_id_map_fkey";

-- DropTable
DROP TABLE "tbl_map_has_points";

-- DropTable
DROP TABLE "tbl_maps";
