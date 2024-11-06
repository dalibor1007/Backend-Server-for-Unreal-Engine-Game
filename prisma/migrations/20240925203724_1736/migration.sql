-- CreateEnum
CREATE TYPE "MiscType" AS ENUM ('SHIELD', 'HULL', 'SPEED', 'CARGO');

-- AlterTable
ALTER TABLE "tbl_achievement_symbols" ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'ACTIVE';

-- AlterTable
ALTER TABLE "tbl_achievements" ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'ACTIVE';

-- CreateTable
CREATE TABLE "tbl_miscs" (
    "id" SERIAL NOT NULL,
    "reference" BIGINT NOT NULL,
    "name" TEXT NOT NULL,
    "module_type" "MiscType" NOT NULL,
    "effect_value" DECIMAL(18,8) NOT NULL DEFAULT 0.00,
    "module_level" BIGINT NOT NULL,
    "repair_per_hp" DECIMAL(18,8) NOT NULL DEFAULT 0.00,
    "level_required" BIGINT NOT NULL,
    "total_hp" BIGINT NOT NULL,
    "cost_price" DECIMAL(18,8) NOT NULL DEFAULT 0.00,
    "money_type" BIGINT NOT NULL,
    "static_mesh" TEXT NOT NULL,
    "item_name" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'ACTIVE',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tbl_miscs_pkey" PRIMARY KEY ("id")
);
