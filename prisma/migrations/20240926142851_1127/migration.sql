/*
  Warnings:

  - The primary key for the `market_has_minerals` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `market_reference` on the `market_has_minerals` table. All the data in the column will be lost.
  - You are about to drop the column `reference` on the `tbl_markets` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[point_reference]` on the table `tbl_markets` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `market_id` to the `market_has_minerals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `point_reference` to the `tbl_markets` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "market_has_minerals" DROP CONSTRAINT "market_has_minerals_market_reference_fkey";

-- DropIndex
DROP INDEX "tbl_markets_reference_key";

-- AlterTable
ALTER TABLE "market_has_minerals" DROP CONSTRAINT "market_has_minerals_pkey",
DROP COLUMN "market_reference",
ADD COLUMN     "market_id" INTEGER NOT NULL,
ADD CONSTRAINT "market_has_minerals_pkey" PRIMARY KEY ("market_id", "minerals_reference");

-- AlterTable
ALTER TABLE "tbl_markets" DROP COLUMN "reference",
ADD COLUMN     "point_reference" BIGINT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "tbl_markets_point_reference_key" ON "tbl_markets"("point_reference");

-- AddForeignKey
ALTER TABLE "tbl_markets" ADD CONSTRAINT "tbl_markets_point_reference_fkey" FOREIGN KEY ("point_reference") REFERENCES "tbl_points"("reference") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "market_has_minerals" ADD CONSTRAINT "market_has_minerals_market_id_fkey" FOREIGN KEY ("market_id") REFERENCES "tbl_markets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
