-- CreateTable
CREATE TABLE "tbl_ship_skins" (
    "id" SERIAL NOT NULL,
    "id_ship" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "reference" INTEGER NOT NULL,
    "ovveride_materials" JSONB[],
    "class_filter" TEXT NOT NULL,
    "cost_price" DECIMAL(18,8) NOT NULL DEFAULT 0.00,
    "money_type" INTEGER NOT NULL,
    "static_mesh" TEXT NOT NULL,
    "item_name" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'ACTIVE',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tbl_ship_skins_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tbl_ship_skins" ADD CONSTRAINT "tbl_ship_skins_id_ship_fkey" FOREIGN KEY ("id_ship") REFERENCES "tbl_ships"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
