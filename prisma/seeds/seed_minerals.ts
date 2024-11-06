import { PrismaClient } from '@prisma/client';

export async function seedMinerals(prisma: PrismaClient) {
  const minerals = [
    {reference: 101,name: "101"},
    {reference: 102,name: "102"},
    {reference: 103,name: "103"},
    {reference: 104,name: "104"},
    {reference: 105,name: "105"},
    {reference: 106,name: "106"},
    {reference: 107,name: "107"},
    {reference: 108,name: "108"},
    {reference: 109,name: "109"},
    {reference: 110,name: "110"},
  ];

  await prisma.minerals.createMany({
    data: minerals,
  });

  console.log('Minerals seeded successfully');
}