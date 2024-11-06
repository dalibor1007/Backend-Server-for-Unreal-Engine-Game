/*
  Warnings:

  - You are about to drop the column `boost` on the `tbl_player_research_types` table. All the data in the column will be lost.
  - You are about to drop the column `cost_pdc` on the `tbl_player_research_types` table. All the data in the column will be lost.
  - You are about to drop the column `cost_price` on the `tbl_player_research_types` table. All the data in the column will be lost.
  - Added the required column `boost_percents` to the `tbl_player_research_types` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tbl_player_research_types" DROP COLUMN "boost",
DROP COLUMN "cost_pdc",
DROP COLUMN "cost_price",
ADD COLUMN     "boost_cost" DECIMAL(18,8) NOT NULL DEFAULT 0.00,
ADD COLUMN     "boost_percents" INTEGER NOT NULL,
ADD COLUMN     "cost" DECIMAL(18,8) NOT NULL DEFAULT 0.00;

-- CreateTable
CREATE TABLE "tbl_planet_research_types" (
    "id" SERIAL NOT NULL,
    "reference" BIGINT NOT NULL,
    "name" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tbl_planet_research_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbl_planet_research_levels" (
    "id" SERIAL NOT NULL,
    "reference" BIGINT NOT NULL,
    "short_description" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "upgrade_time" INTEGER NOT NULL,
    "upgrade_cost" DECIMAL(18,8) NOT NULL DEFAULT 0.00,
    "boost_cost" DECIMAL(18,8) NOT NULL DEFAULT 0.00,
    "boost_percents" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tbl_planet_research_levels_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tbl_planet_research_types_reference_key" ON "tbl_planet_research_types"("reference");

-- CreateIndex
CREATE UNIQUE INDEX "tbl_planet_research_levels_reference_key" ON "tbl_planet_research_levels"("reference");
