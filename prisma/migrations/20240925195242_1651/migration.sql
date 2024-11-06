-- CreateTable
CREATE TABLE "tbl_achievement_symbols" (
    "id" SERIAL NOT NULL,
    "achievement_reference" INTEGER NOT NULL,
    "reference" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "detail" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "premium" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tbl_achievement_symbols_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tbl_achievement_symbols_reference_key" ON "tbl_achievement_symbols"("reference");

-- AddForeignKey
ALTER TABLE "tbl_achievement_symbols" ADD CONSTRAINT "tbl_achievement_symbols_achievement_reference_fkey" FOREIGN KEY ("achievement_reference") REFERENCES "tbl_achievements"("reference") ON DELETE RESTRICT ON UPDATE CASCADE;
