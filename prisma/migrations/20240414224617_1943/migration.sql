-- CreateTable
CREATE TABLE "tbl_accounts" (
    "id" SERIAL NOT NULL,
    "id_user" INTEGER NOT NULL,
    "mac_address" TEXT NOT NULL,
    "store_name" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'ACTIVE',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tbl_accounts_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tbl_accounts" ADD CONSTRAINT "tbl_accounts_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "tbl_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
