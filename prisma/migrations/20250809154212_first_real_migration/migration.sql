/*
  Warnings:

  - You are about to drop the column `codingexperience` on the `Applicant` table. All the data in the column will be lost.
  - You are about to drop the column `fullname` on the `Applicant` table. All the data in the column will be lost.
  - You are about to drop the column `fullorpart` on the `Applicant` table. All the data in the column will be lost.
  - You are about to drop the column `remoteoronsite` on the `Applicant` table. All the data in the column will be lost.
  - You are about to drop the column `stageofcareer` on the `Applicant` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Applicant" DROP COLUMN "codingexperience",
DROP COLUMN "fullname",
DROP COLUMN "fullorpart",
DROP COLUMN "remoteoronsite",
DROP COLUMN "stageofcareer",
ADD COLUMN     "fullName" TEXT,
ADD COLUMN     "institution" TEXT,
ADD COLUMN     "study" TEXT,
ALTER COLUMN "email" DROP NOT NULL;
