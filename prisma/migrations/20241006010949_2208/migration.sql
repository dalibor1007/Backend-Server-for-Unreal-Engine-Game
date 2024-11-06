/*
  Warnings:

  - You are about to drop the `tbl_research` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "tbl_research";

-- CreateTable
CREATE TABLE "tbl_player_research_types" (
    "id" SERIAL NOT NULL,
    "reference" BIGINT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "upgrade_time" INTEGER NOT NULL,
    "time_bossted" DECIMAL(18,8) NOT NULL DEFAULT 0.00,
    "boost" INTEGER NOT NULL,
    "cost_price" DECIMAL(18,8) NOT NULL DEFAULT 0.00,
    "cost_pdc" DECIMAL(18,8) NOT NULL DEFAULT 0.00,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tbl_player_research_types_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tbl_player_research_types_reference_key" ON "tbl_player_research_types"("reference");
