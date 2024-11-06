-- CreateEnum
CREATE TYPE "StatusSecurityCode" AS ENUM ('ACTIVE', 'CHECKED', 'CANCELED');

-- CreateTable
CREATE TABLE "tbl_security_codes" (
    "id" SERIAL NOT NULL,
    "id_user" INTEGER NOT NULL,
    "code" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "date_expiration" TIMESTAMP(3) NOT NULL,
    "status" "StatusSecurityCode" NOT NULL DEFAULT 'ACTIVE',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tbl_security_codes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tbl_security_codes_code_key" ON "tbl_security_codes"("code");

-- AddForeignKey
ALTER TABLE "tbl_security_codes" ADD CONSTRAINT "tbl_security_codes_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "tbl_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
