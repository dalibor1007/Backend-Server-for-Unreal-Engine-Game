/*
  Warnings:

  - You are about to alter the column `repair_per_hp` on the `tbl_guns` table. The data in that column could be lost. The data in that column will be cast from `Decimal(18,8)` to `BigInt`.

*/
-- AlterTable
ALTER TABLE "tbl_guns" ALTER COLUMN "repair_per_hp" DROP DEFAULT,
ALTER COLUMN "repair_per_hp" SET DATA TYPE BIGINT;

-- AlterTable
ALTER TABLE "tbl_user_configurations" ADD COLUMN     "mapsId" INTEGER;

-- CreateTable
CREATE TABLE "tbl_notifications" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "content" TEXT,
    "isRead" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tbl_notifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbl_maps" (
    "id" SERIAL NOT NULL,
    "id_point" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "xpos" BIGINT NOT NULL,
    "ypos" BIGINT NOT NULL,
    "galaxy" BIGINT NOT NULL DEFAULT 0,
    "access_level_area" BIGINT NOT NULL DEFAULT 0,
    "guild_area" BIGINT NOT NULL DEFAULT 0,
    "status" "Status" NOT NULL DEFAULT 'ACTIVE',
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

-- AddForeignKey
ALTER TABLE "tbl_notifications" ADD CONSTRAINT "tbl_notifications_userId_fkey" FOREIGN KEY ("userId") REFERENCES "tbl_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_user_configurations" ADD CONSTRAINT "tbl_user_configurations_mapsId_fkey" FOREIGN KEY ("mapsId") REFERENCES "tbl_maps"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_maps" ADD CONSTRAINT "tbl_maps_id_point_fkey" FOREIGN KEY ("id_point") REFERENCES "tbl_points"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_map_has_points" ADD CONSTRAINT "tbl_map_has_points_id_map_fkey" FOREIGN KEY ("id_map") REFERENCES "tbl_maps"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_map_has_points" ADD CONSTRAINT "tbl_map_has_points_id_point_fkey" FOREIGN KEY ("id_point") REFERENCES "tbl_points"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
