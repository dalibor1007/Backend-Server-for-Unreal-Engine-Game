-- AlterTable
ALTER TABLE "tbl_user_configurations" ALTER COLUMN "affiliation_change" DROP NOT NULL,
ALTER COLUMN "equiped_ship_id" DROP NOT NULL,
ALTER COLUMN "equiped_skin_id" DROP NOT NULL,
ALTER COLUMN "experience" SET DEFAULT 0,
ALTER COLUMN "jump_delay" DROP NOT NULL,
ALTER COLUMN "reputation_change" DROP NOT NULL,
ALTER COLUMN "respawn_delay" DROP NOT NULL;

-- AlterTable
ALTER TABLE "tbl_users" ADD COLUMN     "id_user_config" INTEGER;
