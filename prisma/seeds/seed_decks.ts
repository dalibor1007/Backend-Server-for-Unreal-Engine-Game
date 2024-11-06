import { PrismaClient } from '@prisma/client';

export async function seedDecks(prisma: PrismaClient) {
  const decks = [
    {
      reference: 0,
      money_type: 0,
      cost_price: 0

    },
    {
      reference: 1,
      money_type: 0,
      cost_price: 1000

    },
    {
      reference: 2,
      money_type: 0,
      cost_price: 1000

    },
    {
      reference: 3,
      money_type: 0,
      cost_price: 1500

    },
    {
      reference: 4,
      money_type: 0,
      cost_price: 2000

    },
    {
      reference: 5,
      money_type: 0,
      cost_price: 2500

    },
    {
      reference: 6,
      money_type: 0,
      cost_price: 3000

    }
  ];

  await prisma.decks.createMany({
    data: decks,
  });

  console.log('Decks seeded successfully');
}