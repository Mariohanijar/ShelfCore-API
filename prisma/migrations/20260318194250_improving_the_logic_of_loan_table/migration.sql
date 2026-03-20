/*
  Warnings:

  - Added the required column `returnDate` to the `Loan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Loan" ADD COLUMN     "loanDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "returnDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "returnedAt" TIMESTAMP(3);
