/*
  Warnings:

  - Changed the type of `type` on the `tbl_points` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "PointType" AS ENUM ('POINT', 'PLANET');

-- AlterTable
ALTER TABLE "tbl_points" DROP COLUMN "type",
ADD COLUMN     "type" "PointType" NOT NULL;

-- DropEnum
DROP TYPE "MapPointsType";
