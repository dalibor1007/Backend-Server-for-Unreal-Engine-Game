/*
  Warnings:

  - Added the required column `count_max` to the `asteroid_has_minerals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `count_min` to the `asteroid_has_minerals` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "asteroid_has_minerals" ADD COLUMN     "count_max" INTEGER NOT NULL,
ADD COLUMN     "count_min" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "tbl_markets" (
    "id" SERIAL NOT NULL,
    "reference" BIGINT NOT NULL,
    "name" TEXT NOT NULL,
    "update_time_min" INTEGER NOT NULL,
    "update_time_max" INTEGER NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'ACTIVE',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tbl_markets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "market_has_minerals" (
    "market_reference" BIGINT NOT NULL,
    "minerals_reference" BIGINT NOT NULL,
    "count_min" INTEGER NOT NULL,
    "count_max" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "market_has_minerals_pkey" PRIMARY KEY ("market_reference","minerals_reference")
);

-- CreateIndex
CREATE UNIQUE INDEX "tbl_markets_reference_key" ON "tbl_markets"("reference");

-- AddForeignKey
ALTER TABLE "market_has_minerals" ADD CONSTRAINT "market_has_minerals_market_reference_fkey" FOREIGN KEY ("market_reference") REFERENCES "tbl_markets"("reference") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "market_has_minerals" ADD CONSTRAINT "market_has_minerals_minerals_reference_fkey" FOREIGN KEY ("minerals_reference") REFERENCES "tbl_minerals"("reference") ON DELETE RESTRICT ON UPDATE CASCADE;
