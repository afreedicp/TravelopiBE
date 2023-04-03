-- CreateTable
CREATE TABLE "Travellers" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "numberOfTravellers" INTEGER NOT NULL,
    "destination" VARCHAR(255) NOT NULL,

    CONSTRAINT "Travellers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Travellers_email_key" ON "Travellers"("email");
