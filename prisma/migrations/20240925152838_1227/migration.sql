-- DropForeignKey
ALTER TABLE "tbl_ship_skins" DROP CONSTRAINT "tbl_ship_skins_reference_ship_fkey";

-- AddForeignKey
ALTER TABLE "tbl_ship_skins" ADD CONSTRAINT "tbl_ship_skins_reference_ship_fkey" FOREIGN KEY ("reference_ship") REFERENCES "tbl_ships"("reference") ON DELETE RESTRICT ON UPDATE CASCADE;
