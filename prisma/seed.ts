import { PrismaClient } from '@prisma/client';
import { seedGuns } from './seeds/seed_guns';
import { seedShips } from './seeds/seed_ships';
import { seedShipSkins } from './seeds/seed_ship_skins';
import { seedGalaxies } from './seeds/seed_galaxies';
import { seedPoints } from './seeds/seed_points';
import { seedHasPoints } from './seeds/seed_has_points';
import { seedAchievements } from './seeds/seed_achievements';
import { seedAchievementSymbols } from './seeds/seed_achievement_symbols';
import { seedMiscs } from './seeds/seed_miscs';
import { seedDecks } from './seeds/seed_decks';
import { seedMinerals } from './seeds/seed_minerals';
import { seedMarkets } from './seeds/seed_markets';
import { seedAsteroids } from './seeds/seed_asteroids';
import { seedPlayerResearchTypes } from './seeds/seed_player_research_types';
import { seedPlanetResearch } from './seeds/seed_planet_research';
// Adicione outros seeds aqui, por exemplo:
// import { seedAnotherEntity } from './seeds/another_entity.seed';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding data...');
  
  // await seedGuns(prisma);
  // await seedShips(prisma);
  // await seedShipSkins(prisma);
  // await seedGalaxies(prisma);
  // await seedPoints(prisma);
  // await seedHasPoints(prisma);
  // await seedAchievements(prisma);
  // await seedAchievementSymbols(prisma);
  // await seedMiscs(prisma);
  // await seedDecks(prisma);
  // await seedMinerals(prisma);
  // await seedMarkets(prisma);
  // await seedAsteroids(prisma);
  // await seedPlayerResearchTypes(prisma);
  await seedPlanetResearch(prisma);
  

  console.log('Seeding completed!');
}

main()
  .then(() => {
    console.log('Seed completed successfully.');
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
