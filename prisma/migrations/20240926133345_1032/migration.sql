-- CreateTable
CREATE TABLE "tbl_decks" (
    "id" SERIAL NOT NULL,
    "reference" INTEGER NOT NULL,
    "money_type" INTEGER NOT NULL,
    "cost_price" DECIMAL(18,8) NOT NULL DEFAULT 0.00,
    "status" "Status" NOT NULL DEFAULT 'ACTIVE',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tbl_decks_pkey" PRIMARY KEY ("id")
);
