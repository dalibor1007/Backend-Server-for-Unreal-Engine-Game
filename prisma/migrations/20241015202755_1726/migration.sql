/*
  Warnings:

  - You are about to alter the column `repair_per_hp` on the `tbl_guns` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Decimal(18,8)`.

*/
-- AlterTable
ALTER TABLE "tbl_guns" ALTER COLUMN "repair_per_hp" SET DEFAULT 0.00,
ALTER COLUMN "repair_per_hp" SET DATA TYPE DECIMAL(18,8);

-- CreateTable
CREATE TABLE "tbl_planet_researches" (
    "id" SERIAL NOT NULL,
    "id_planet" INTEGER NOT NULL,
    "reference_planet_reserach_type" BIGINT NOT NULL,
    "time_end" TIMESTAMP(3) NOT NULL,
    "increase" INTEGER NOT NULL,
    "level" INTEGER NOT NULL,
    "with_boots" BOOLEAN NOT NULL DEFAULT false,
    "status" "StatusPlayerResearchs" NOT NULL DEFAULT 'IN_PROGESS',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tbl_planet_researches_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbl_planet_upgrade" (
    "id" SERIAL NOT NULL,
    "id_planet" INTEGER NOT NULL,
    "reference_planet_reserach_type" BIGINT NOT NULL,
    "time_end" TIMESTAMP(3) NOT NULL,
    "increase" INTEGER NOT NULL,
    "level" INTEGER NOT NULL,
    "with_boots" BOOLEAN NOT NULL DEFAULT false,
    "status" "StatusPlayerResearchs" NOT NULL DEFAULT 'IN_PROGESS',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tbl_planet_upgrade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbl_planets" (
    "id" SERIAL NOT NULL,
    "id_user" INTEGER,
    "name" TEXT NOT NULL,
    "population" TEXT NOT NULL,
    "coruption" DECIMAL(18,8) NOT NULL DEFAULT 0.00,
    "coruption_growing_index" DECIMAL(18,8) NOT NULL DEFAULT 0.00,
    "economy" DECIMAL(18,8) NOT NULL DEFAULT 0.00,
    "guild_tax" DECIMAL(18,8) NOT NULL DEFAULT 0.00,
    "max_guild_tax" DECIMAL(18,8) NOT NULL DEFAULT 0.00,
    "remaining_income_time" TIMESTAMP(3) NOT NULL,
    "income_frequency" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tbl_planets_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tbl_planet_researches" ADD CONSTRAINT "tbl_planet_researches_id_planet_fkey" FOREIGN KEY ("id_planet") REFERENCES "tbl_planets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_planet_researches" ADD CONSTRAINT "tbl_planet_researches_reference_planet_reserach_type_fkey" FOREIGN KEY ("reference_planet_reserach_type") REFERENCES "tbl_planet_research_types"("reference") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_planet_upgrade" ADD CONSTRAINT "tbl_planet_upgrade_id_planet_fkey" FOREIGN KEY ("id_planet") REFERENCES "tbl_planets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_planet_upgrade" ADD CONSTRAINT "tbl_planet_upgrade_reference_planet_reserach_type_fkey" FOREIGN KEY ("reference_planet_reserach_type") REFERENCES "tbl_planet_research_types"("reference") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_planets" ADD CONSTRAINT "tbl_planets_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "tbl_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
