-- CreateTable
CREATE TABLE "tbl_user_configurations" (
    "id" SERIAL NOT NULL,
    "id_user" INTEGER NOT NULL,
    "id_map" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tbl_user_configurations_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tbl_user_configurations" ADD CONSTRAINT "tbl_user_configurations_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "tbl_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_user_configurations" ADD CONSTRAINT "tbl_user_configurations_id_map_fkey" FOREIGN KEY ("id_map") REFERENCES "tbl_maps"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
