-- CreateTable
CREATE TABLE "tbl_minerals" (
    "id" SERIAL NOT NULL,
    "reference" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'ACTIVE',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tbl_minerals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbl_asteroid" (
    "id" SERIAL NOT NULL,
    "reference" INTEGER NOT NULL,
    "money_type" INTEGER NOT NULL,
    "cost_price" DECIMAL(18,8) NOT NULL DEFAULT 0.00,
    "status" "Status" NOT NULL DEFAULT 'ACTIVE',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tbl_asteroid_pkey" PRIMARY KEY ("id")
);
