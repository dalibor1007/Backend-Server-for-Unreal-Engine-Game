-- CreateEnum
CREATE TYPE "Roles" AS ENUM ('MANAGER', 'SUPPORT', 'EMPLOYEE', 'ADMIN', 'PLAYER');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('ACTIVE', 'INACTIVE', 'BLOCKED');

-- CreateEnum
CREATE TYPE "TypePermissions" AS ENUM ('MENU', 'PAGE', 'SUBMENU', 'FUNC');

-- CreateTable
CREATE TABLE "tbl_users" (
    "id" SERIAL NOT NULL,
    "id_user" INTEGER,
    "password" VARCHAR(255) NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255),
    "avatar" VARCHAR(255),
    "access_token" TEXT,
    "role" "Roles" NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'ACTIVE',
    "seed" TEXT,
    "integration_token" TEXT,
    "onetime_token" TEXT,
    "app_secret" TEXT,
    "twofactor_active" BOOLEAN NOT NULL DEFAULT false,
    "twofactor_code" TEXT,
    "access_allowed" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tbl_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbl_peoples" (
    "id" SERIAL NOT NULL,
    "id_user" INTEGER NOT NULL,
    "first_name" TEXT,
    "last_name" TEXT,
    "nationality" TEXT,
    "birthday" TIMESTAMP(3),
    "birthplace" TEXT,
    "phone" TEXT,
    "phone_code" TEXT,
    "cellphone" TEXT,
    "cell_code" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tbl_peoples_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbl_permissions" (
    "id" SERIAL NOT NULL,
    "id_permission_indice" INTEGER NOT NULL,
    "id_user" INTEGER NOT NULL,
    "enabled" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tbl_permissions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbl_permission_indices" (
    "id" SERIAL NOT NULL,
    "id_permission" INTEGER,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "parameter" TEXT NOT NULL,
    "type" "TypePermissions" NOT NULL,
    "standard" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tbl_permission_indices_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tbl_users_username_key" ON "tbl_users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "tbl_peoples_id_user_key" ON "tbl_peoples"("id_user");

-- AddForeignKey
ALTER TABLE "tbl_users" ADD CONSTRAINT "tbl_users_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "tbl_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_peoples" ADD CONSTRAINT "tbl_peoples_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "tbl_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_permissions" ADD CONSTRAINT "tbl_permissions_id_permission_indice_fkey" FOREIGN KEY ("id_permission_indice") REFERENCES "tbl_permission_indices"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_permissions" ADD CONSTRAINT "tbl_permissions_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "tbl_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_permission_indices" ADD CONSTRAINT "tbl_permission_indices_id_permission_fkey" FOREIGN KEY ("id_permission") REFERENCES "tbl_permission_indices"("id") ON DELETE SET NULL ON UPDATE CASCADE;
