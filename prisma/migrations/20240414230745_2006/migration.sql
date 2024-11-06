/*
  Warnings:

  - A unique constraint covering the columns `[store_name]` on the table `tbl_accounts` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "tbl_accounts_store_name_key" ON "tbl_accounts"("store_name");
