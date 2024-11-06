-- AlterTable
ALTER TABLE "tbl_player_research_types" ADD COLUMN     "increase" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "tbl_player_researches" (
    "id" SERIAL NOT NULL,
    "id_user" INTEGER NOT NULL,
    "reference_player_reserach_type" BIGINT NOT NULL,
    "time_end" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tbl_player_researches_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tbl_player_researches" ADD CONSTRAINT "tbl_player_researches_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "tbl_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
