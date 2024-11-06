-- CreateEnum
CREATE TYPE "MapPointsType" AS ENUM ('POINT', 'PLANET');

-- CreateTable
CREATE TABLE "tbl_maps" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "xpos" INTEGER NOT NULL,
    "ypos" INTEGER NOT NULL,
    "galaxy" INTEGER NOT NULL,
    "accessLevelArea" INTEGER NOT NULL,
    "ai_guild_area" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tbl_maps_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbl_map_has_points" (
    "id_map" INTEGER NOT NULL,
    "id_point" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tbl_map_has_points_pkey" PRIMARY KEY ("id_map","id_point")
);

-- CreateTable
CREATE TABLE "tbl_points" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "reference" INTEGER NOT NULL,
    "type" "MapPointsType" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tbl_points_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tbl_map_has_points" ADD CONSTRAINT "tbl_map_has_points_id_map_fkey" FOREIGN KEY ("id_map") REFERENCES "tbl_maps"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_map_has_points" ADD CONSTRAINT "tbl_map_has_points_id_point_fkey" FOREIGN KEY ("id_point") REFERENCES "tbl_points"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
