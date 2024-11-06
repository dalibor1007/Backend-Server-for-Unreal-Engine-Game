-- CreateTable
CREATE TABLE "tbl_guns" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "reference" INTEGER NOT NULL,
    "firing_sound" TEXT NOT NULL,
    "accuracy" INTEGER NOT NULL,
    "speed" INTEGER NOT NULL,
    "damage" INTEGER NOT NULL,
    "type" INTEGER NOT NULL,
    "blueprint" TEXT NOT NULL,
    "repair_per_hp" INTEGER NOT NULL,
    "level_required" INTEGER NOT NULL,
    "total_hp" INTEGER NOT NULL,
    "cost_price" INTEGER NOT NULL,
    "money_type" INTEGER NOT NULL,
    "static_mesh" TEXT NOT NULL,
    "itemName" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'ACTIVE',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tbl_guns_pkey" PRIMARY KEY ("id")
);
