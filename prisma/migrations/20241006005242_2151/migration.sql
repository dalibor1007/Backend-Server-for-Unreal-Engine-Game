-- CreateTable
CREATE TABLE "tbl_research" (
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

    CONSTRAINT "tbl_research_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tbl_research_reference_key" ON "tbl_research"("reference");
