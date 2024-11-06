/*
  Warnings:

  - You are about to drop the column `itemName` on the `tbl_guns` table. All the data in the column will be lost.
  - Added the required column `item_name` to the `tbl_guns` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tbl_guns" DROP COLUMN "itemName",
ADD COLUMN     "item_name" TEXT NOT NULL;
