-- CreateEnum
CREATE TYPE "type" AS ENUM ('incoming', 'outgoing');

-- CreateTable
CREATE TABLE "records" (
    "id" SERIAL NOT NULL,
    "value" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "type" "type" NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "records_pkey" PRIMARY KEY ("id")
);
