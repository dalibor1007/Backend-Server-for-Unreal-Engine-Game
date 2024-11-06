/*
  Warnings:

  - You are about to drop the column `cost_price` on the `tbl_asteroid` table. All the data in the column will be lost.
  - You are about to drop the column `money_type` on the `tbl_asteroid` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[reference]` on the table `tbl_asteroid` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[reference]` on the table `tbl_minerals` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `experience_max` to the `tbl_asteroid` table without a default value. This is not possible if the table is not empty.
  - Added the required column `experience_min` to the `tbl_asteroid` table without a default value. This is not possible if the table is not empty.
  - Added the required column `full_hp_max` to the `tbl_asteroid` table without a default value. This is not possible if the table is not empty.
  - Added the required column `full_hp_min` to the `tbl_asteroid` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jump_delay_max` to the `tbl_asteroid` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jump_delay_min` to the `tbl_asteroid` table without a default value. This is not possible if the table is not empty.
  - Added the required column `max` to the `tbl_asteroid` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `tbl_asteroid` table without a default value. This is not possible if the table is not empty.
  - Added the required column `respawn_delay_max` to the `tbl_asteroid` table without a default value. This is not possible if the table is not empty.
  - Added the required column `respawn_delay_min` to the `tbl_asteroid` table without a default value. This is not possible if the table is not empty.
  - Added the required column `visual_type` to the `tbl_asteroid` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tbl_asteroid" DROP COLUMN "cost_price",
DROP COLUMN "money_type",
ADD COLUMN     "experience_max" INTEGER NOT NULL,
ADD COLUMN     "experience_min" INTEGER NOT NULL,
ADD COLUMN     "full_hp_max" INTEGER NOT NULL,
ADD COLUMN     "full_hp_min" INTEGER NOT NULL,
ADD COLUMN     "jump_delay_max" INTEGER NOT NULL,
ADD COLUMN     "jump_delay_min" INTEGER NOT NULL,
ADD COLUMN     "loot_boxes" JSONB[],
ADD COLUMN     "max" INTEGER NOT NULL,
ADD COLUMN     "money_max" DECIMAL(18,8) NOT NULL DEFAULT 0.00,
ADD COLUMN     "money_min" DECIMAL(18,8) NOT NULL DEFAULT 0.00,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "respawn_delay_max" INTEGER NOT NULL,
ADD COLUMN     "respawn_delay_min" INTEGER NOT NULL,
ADD COLUMN     "visual_type" INTEGER NOT NULL,
ALTER COLUMN "reference" SET DATA TYPE BIGINT;

-- AlterTable
ALTER TABLE "tbl_decks" ALTER COLUMN "reference" SET DATA TYPE BIGINT;

-- AlterTable
ALTER TABLE "tbl_minerals" ALTER COLUMN "reference" SET DATA TYPE BIGINT;

-- CreateTable
CREATE TABLE "asteroid_has_points" (
    "point_reference" BIGINT NOT NULL,
    "asteroid_reference" BIGINT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "asteroid_has_points_pkey" PRIMARY KEY ("point_reference","asteroid_reference")
);

-- CreateTable
CREATE TABLE "asteroid_has_minerals" (
    "asteroid_reference" BIGINT NOT NULL,
    "minerals_reference" BIGINT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "asteroid_has_minerals_pkey" PRIMARY KEY ("asteroid_reference","minerals_reference")
);

-- CreateIndex
CREATE UNIQUE INDEX "tbl_asteroid_reference_key" ON "tbl_asteroid"("reference");

-- CreateIndex
CREATE UNIQUE INDEX "tbl_minerals_reference_key" ON "tbl_minerals"("reference");

-- AddForeignKey
ALTER TABLE "asteroid_has_points" ADD CONSTRAINT "asteroid_has_points_point_reference_fkey" FOREIGN KEY ("point_reference") REFERENCES "tbl_points"("reference") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "asteroid_has_points" ADD CONSTRAINT "asteroid_has_points_asteroid_reference_fkey" FOREIGN KEY ("asteroid_reference") REFERENCES "tbl_asteroid"("reference") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "asteroid_has_minerals" ADD CONSTRAINT "asteroid_has_minerals_asteroid_reference_fkey" FOREIGN KEY ("asteroid_reference") REFERENCES "tbl_asteroid"("reference") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "asteroid_has_minerals" ADD CONSTRAINT "asteroid_has_minerals_minerals_reference_fkey" FOREIGN KEY ("minerals_reference") REFERENCES "tbl_minerals"("reference") ON DELETE RESTRICT ON UPDATE CASCADE;
