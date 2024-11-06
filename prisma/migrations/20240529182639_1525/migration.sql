-- CreateTable
CREATE TABLE "tbl_galaxies" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "guild_area" TEXT NOT NULL,
    "access_level_area" TEXT NOT NULL,
    "size" JSONB NOT NULL,
    "index" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tbl_galaxies_pkey" PRIMARY KEY ("id")
);
