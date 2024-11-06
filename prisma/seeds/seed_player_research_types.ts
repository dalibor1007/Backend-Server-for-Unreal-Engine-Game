import { PrismaClient } from '@prisma/client';

export async function seedPlayerResearchTypes(prisma: PrismaClient) {
  const research = [
    {
        "reference": 101,
        "name": "Universe Explorer",
        "description": "Player map level Increase +1",
        "upgrade_time": 0,
        "cost": 0,
        "boost_cost": 1000.0,
        "boost_percents": 50,
        "time_bossted": 0.0
    },
    {
        "reference": 102.0,
        "name": "Universe Explorer",
        "description": "Player map level Increase +1",
        "upgrade_time": 1,
        "cost": 25,
        "boost_cost": 1000.0,
        "boost_percents": 50,
        "time_bossted": 0.5
    },
    {
        "reference": 103.0,
        "name": "Universe Explorer",
        "description": "Player map level Increase +1",
        "upgrade_time": 2,
        "cost": 50,
        "boost_cost": 1000.0,
        "boost_percents": 25,
        "time_bossted": 0.5
    },
    {
        "reference": 104.0,
        "name": "Universe Explorer",
        "description": "Player map level Increase +1",
        "upgrade_time": 3,
        "cost": 75,
        "boost_cost": 1000.0,
        "boost_percents": 25,
        "time_bossted": 0.75
    },
    {
        "reference": 105.0,
        "name": "Universe Explorer",
        "description": "Player map level Increase +1",
        "upgrade_time": 6,
        "cost": 150,
        "boost_cost": 1000.0,
        "boost_percents": 25,
        "time_bossted": 1.5
    },
    {
        "reference": 106.0,
        "name": "Universe Explorer",
        "description": "Player map level Increase +1",
        "upgrade_time": 6,
        "cost": 150,
        "boost_cost": 1000.0,
        "boost_percents": 30,
        "time_bossted": 1.8
    },
    {
        "reference": 107.0,
        "name": "Universe Explorer",
        "description": "Player map level Increase +1",
        "upgrade_time": 12,
        "cost": 300,
        "boost_cost": 1000.0,
        "boost_percents": 25,
        "time_bossted": 3.0
    },
    {
        "reference": 108.0,
        "name": "Universe Explorer",
        "description": "Player map level Increase +1",
        "upgrade_time": 24,
        "cost": 600,
        "boost_cost": 1000.0,
        "boost_percents": 25,
        "time_bossted": 6.0
    },
    {
        "reference": 109.0,
        "name": "Universe Explorer",
        "description": "Player map level Increase +1",
        "upgrade_time": 24,
        "cost": 600,
        "boost_cost": 1000.0,
        "boost_percents": 20,
        "time_bossted": 4.8
    },
    {
        "reference": 201.0,
        "name": "Fast Relexes",
        "description": "Jump Speed of the equipped ship increase 5",
        "upgrade_time": 1,
        "cost": 25,
        "boost_cost": 1000.0,
        "boost_percents": 50,
        "time_bossted": 0.5
    },
    {
        "reference": 202.0,
        "name": "Fast Relexes",
        "description": "Jump Speed of the equipped ship increase 5",
        "upgrade_time": 2,
        "cost": 50,
        "boost_cost": 1000.0,
        "boost_percents": 50,
        "time_bossted": 1.0
    },
    {
        "reference": 203.0,
        "name": "Fast Relexes",
        "description": "Jump Speed of the equipped ship increase 5",
        "upgrade_time": 8,
        "cost": 200,
        "boost_cost": 1000.0,
        "boost_percents": 25,
        "time_bossted": 2.0
    },
    {
        "reference": 204.0,
        "name": "Fast Relexes",
        "description": "Jump Speed of the equipped ship increase 5",
        "upgrade_time": 16,
        "cost": 400,
        "boost_cost": 1000.0,
        "boost_percents": 25,
        "time_bossted": 4.0
    },
    {
        "reference": 205.0,
        "name": "Fast Relexes",
        "description": "Jump Speed of the equipped ship increase 5",
        "upgrade_time": 40,
        "cost": 1000000,
        "boost_cost": 1000.0,
        "boost_percents": 25,
        "time_bossted": 10.0
    },
    {
        "reference": 206.0,
        "name": "Fast Relexes",
        "description": "Jump Speed of the equipped ship increase 5",
        "upgrade_time": 60,
        "cost": 1500000,
        "boost_cost": 1000.0,
        "boost_percents": 25,
        "time_bossted": 15.0
    },
    {
        "reference": 207.0,
        "name": "Fast Relexes",
        "description": "Jump Speed of the equipped ship increase 5",
        "upgrade_time": 100,
        "cost": 2500000,
        "boost_cost": 1000.0,
        "boost_percents": 25,
        "time_bossted": 25.0
    },
    {
        "reference": 208.0,
        "name": "Fast Relexes",
        "description": "Jump Speed of the equipped ship increase 5",
        "upgrade_time": 120,
        "cost": 3000000,
        "boost_cost": 1000.0,
        "boost_percents": 25,
        "time_bossted": 30.0
    },
    {
        "reference": 209.0,
        "name": "Fast Relexes",
        "description": "Jump Speed of the equipped ship increase 5",
        "upgrade_time": 150,
        "cost": 3750000,
        "boost_cost": 1000.0,
        "boost_percents": 26,
        "time_bossted": 39.0
    },
    {
        "reference": 301.0,
        "name": "On Guard",
        "description": "Evade increase of the equipped ship 1",
        "upgrade_time": 1,
        "cost": 25,
        "boost_cost": 1000.0,
        "boost_percents": 50,
        "time_bossted": 0.5
    },
    {
        "reference": 302.0,
        "name": "On Guard",
        "description": "Evade increase of the equipped ship 1",
        "upgrade_time": 16,
        "cost": 400,
        "boost_cost": 1000.0,
        "boost_percents": 25,
        "time_bossted": 4.0
    },
    {
        "reference": 303.0,
        "name": "On Guard",
        "description": "Evade increase of the equipped ship 1",
        "upgrade_time": 40,
        "cost": 1000000,
        "boost_cost": 1000.0,
        "boost_percents": 50,
        "time_bossted": 20.0
    },
    {
        "reference": 401.0,
        "name": "Aggressive Nature",
        "description": "Damage increase of the equipped ship 5",
        "upgrade_time": 1,
        "cost": 25,
        "boost_cost": 1000.0,
        "boost_percents": 50,
        "time_bossted": 0.5
    },
    {
        "reference": 402.0,
        "name": "Aggerssive Nature",
        "description": "Damage increase of the equipped ship 5",
        "upgrade_time": 48,
        "cost": 1200000,
        "boost_cost": 1000.0,
        "boost_percents": 25,
        "time_bossted": 12.0
    },
    {
        "reference": 403.0,
        "name": "Aggerssive Nature",
        "description": "Damage increase of the equipped ship 3",
        "upgrade_time": 96,
        "cost": 2400000,
        "boost_cost": 1000.0,
        "boost_percents": 20,
        "time_bossted": 19.2
    },
    {
        "reference": 404.0,
        "name": "Aggerssive Nature",
        "description": "Damage increase of the equipped ship 2",
        "upgrade_time": 120,
        "cost": 3000000,
        "boost_cost": 1000.0,
        "boost_percents": 20,
        "time_bossted": 24.0
    },
    {
        "reference": 501.0,
        "name": "Hoarder",
        "description": "Cargo Hold Increase of the equipped ship +25 Cargo",
        "upgrade_time": 4,
        "cost": 100,
        "boost_cost": 1000.0,
        "boost_percents": 50,
        "time_bossted": 2.0
    },
    {
        "reference": 502.0,
        "name": "Hoarder",
        "description": "Cargo Hold Increase of the equipped ship +75 Cargo",
        "upgrade_time": 48,
        "cost": 1200000,
        "boost_cost": 1000.0,
        "boost_percents": 25,
        "time_bossted": 12.0
    },
    {
        "reference": 503.0,
        "name": "Hoarder",
        "description": "Cargo Hold Increase of the equipped ship +150 Cargo",
        "upgrade_time": 80,
        "cost": 2000000,
        "boost_cost": 1000.0,
        "boost_percents": 25,
        "time_bossted": 20.0
    },
    {
        "reference": 504.0,
        "name": "Hoarder",
        "description": "Cargo Hold Increase of the equipped ship +200 Cargo",
        "upgrade_time": 150,
        "cost": 3750000,
        "boost_cost": 1000.0,
        "boost_percents": 25,
        "time_bossted": 37.5
    },
    {
        "reference": 601.0,
        "name": "mission Resource",
        "description": "Increase Quest slot number +1",
        "upgrade_time": 1,
        "cost": 25,
        "boost_cost": 1000.0,
        "boost_percents": 50,
        "time_bossted": 0.5
    },
    {
        "reference": 602.0,
        "name": "mission Resource",
        "description": "Increase Quest slot number +1",
        "upgrade_time": 16,
        "cost": 400,
        "boost_cost": 1000.0,
        "boost_percents": 30,
        "time_bossted": 4.8
    },
    {
        "reference": 603.0,
        "name": "mission Resource",
        "description": "Increase Quest slot number +1",
        "upgrade_time": 32,
        "cost": 800,
        "boost_cost": 1000.0,
        "boost_percents": 25,
        "time_bossted": 8.0
    },
    {
        "reference": 604.0,
        "name": "mission Resource",
        "description": "Increase Quest slot number +2",
        "upgrade_time": 76,
        "cost": 1900000,
        "boost_cost": 1000.0,
        "boost_percents": 25,
        "time_bossted": 19.0
    },
    {
        "reference": 701.0,
        "name": "fast research",
        "description": "increase the speed of the player research by 2",
        "upgrade_time": 8,
        "cost": 200,
        "boost_cost": 1000.0,
        "boost_percents": 50,
        "time_bossted": 4.0
    },
    {
        "reference": 702.0,
        "name": "fast research",
        "description": "increase the speed of the player research by 2",
        "upgrade_time": 24,
        "cost": 600,
        "boost_cost": 1000.0,
        "boost_percents": 25,
        "time_bossted": 6.0
    },
    {
        "reference": 703.0,
        "name": "fast research",
        "description": "increase the speed of the player research by 2",
        "upgrade_time": 72,
        "cost": 1800000,
        "boost_cost": 1000.0,
        "boost_percents": 20,
        "time_bossted": 14.4
    },
    {
        "reference": 704.0,
        "name": "fast research",
        "description": "increase the speed of the player research by 2",
        "upgrade_time": 144,
        "cost": 3600000,
        "boost_cost": 1000.0,
        "boost_percents": 20,
        "time_bossted": 28.8
    },
    {
        "reference": 705.0,
        "name": "fast research",
        "description": "increase the speed of the player research by 2",
        "upgrade_time": 190,
        "cost": 4750000,
        "boost_cost": 1000.0,
        "boost_percents": 17,
        "time_bossted": 32.3
    },
    {
        "reference": 801.0,
        "name": "hull plus",
        "description": "increase the hull of the equipped ship by 2",
        "upgrade_time": 1,
        "cost": 25,
        "boost_cost": 1000.0,
        "boost_percents": 50,
        "time_bossted": 0.5
    },
    {
        "reference": 802.0,
        "name": "hull plus",
        "description": "increase the hull of the equipped ship by 2",
        "upgrade_time": 16,
        "cost": 400,
        "boost_cost": 1000.0,
        "boost_percents": 50,
        "time_bossted": 8.0
    },
    {
        "reference": 803.0,
        "name": "hull plus",
        "description": "increase the hull of the equipped ship by 2",
        "upgrade_time": 24,
        "cost": 600,
        "boost_cost": 1000.0,
        "boost_percents": 25,
        "time_bossted": 6.0
    },
    {
        "reference": 804.0,
        "name": "hull plus",
        "description": "increase the hull of the equipped ship by 2",
        "upgrade_time": 48,
        "cost": 1200000,
        "boost_cost": 1000.0,
        "boost_percents": 20,
        "time_bossted": 9.6
    },
    {
        "reference": 805.0,
        "name": "hull plus",
        "description": "increase the hull of the equipped ship by 2",
        "upgrade_time": 96,
        "cost": 2400000,
        "boost_cost": 1000.0,
        "boost_percents": 20,
        "time_bossted": 19.2
    },
    {
        "reference": 806.0,
        "name": "hull plus",
        "description": "increase the hull of the equipped ship by 2",
        "upgrade_time": 120,
        "cost": 3000000,
        "boost_cost": 1000.0,
        "boost_percents": 17,
        "time_bossted": 20.4
    },
    {
        "reference": 901.0,
        "name": "escape time",
        "description": "increase the time of the ai first shoot to the player by 2s",
        "upgrade_time": 1,
        "cost": 25,
        "boost_cost": 1000.0,
        "boost_percents": 20,
        "time_bossted": 0.2
    },
    {
        "reference": 902.0,
        "name": "escape time",
        "description": "increase the time of the ai first shoot to the player by 2s",
        "upgrade_time": 8,
        "cost": 200,
        "boost_cost": 1000.0,
        "boost_percents": 20,
        "time_bossted": 1.6
    },
    {
        "reference": 903.0,
        "name": "escape time",
        "description": "increase the time of the ai first shoot to the player by 1s",
        "upgrade_time": 24,
        "cost": 600,
        "boost_cost": 1000.0,
        "boost_percents": 17,
        "time_bossted": 4.08
    },
    {
        "reference": 1001.0,
        "name": "good deal Ship",
        "description": "decrease the price of the ship cost in the hangar by 3",
        "upgrade_time": 16,
        "cost": 400,
        "boost_cost": 1000.0,
        "boost_percents": 30,
        "time_bossted": 4.8
    },
    {
        "reference": 1002.0,
        "name": "good deal Ship",
        "description": "decrease the price of the ship cost in the hangar by 3",
        "upgrade_time": 48,
        "cost": 1200000,
        "boost_cost": 1000.0,
        "boost_percents": 25,
        "time_bossted": 12.0
    },
    {
        "reference": 1003.0,
        "name": "good deal Ship",
        "description": "decrease the price of the ship cost in the hangar by 4",
        "upgrade_time": 102,
        "cost": 2550000,
        "boost_cost": 1000.0,
        "boost_percents": 25,
        "time_bossted": 25.5
    },
    {
        "reference": 1101.0,
        "name": "good deal Guns",
        "description": "cut the cost of the guns 5",
        "upgrade_time": 8,
        "cost": 200,
        "boost_cost": 1000.0,
        "boost_percents": 50,
        "time_bossted": 4.0
    },
    {
        "reference": 1102.0,
        "name": "good deal Guns",
        "description": "cut the cost of the guns 5",
        "upgrade_time": 24,
        "cost": 600,
        "boost_cost": 1000.0,
        "boost_percents": 25,
        "time_bossted": 6.0
    },
    {
        "reference": 1103.0,
        "name": "good deal Guns",
        "description": "cut the cost of the guns 5",
        "upgrade_time": 64,
        "cost": 1600000,
        "boost_cost": 1000.0,
        "boost_percents": 25,
        "time_bossted": 16.0
    },
    {
        "reference": 1201.0,
        "name": "good deal Misc",
        "description": "cut the cost of the misc 5",
        "upgrade_time": 8,
        "cost": 200,
        "boost_cost": 1000.0,
        "boost_percents": 50,
        "time_bossted": 4.0
    },
    {
        "reference": 1202.0,
        "name": "good deal Misc",
        "description": "cut the cost of the misc 5",
        "upgrade_time": 24,
        "cost": 600,
        "boost_cost": 1000.0,
        "boost_percents": 25,
        "time_bossted": 6.0
    },
    {
        "reference": 1203.0,
        "name": "good deal Misc",
        "description": "cut the cost of the misc 5",
        "upgrade_time": 64,
        "cost": 1600000,
        "boost_cost": 1000.0,
        "boost_percents": 25,
        "time_bossted": 16.0
    },
    {
        "reference": 1204.0,
        "name": "good deal Misc",
        "description": "cut the cost of the misc 5",
        "upgrade_time": 96,
        "cost": 2400000,
        "boost_cost": 1000.0,
        "boost_percents": 25,
        "time_bossted": 24.0
    },
    {
        "reference": 1301.0,
        "name": "repair efficiency",
        "description": "decrease the cost of the repair 5",
        "upgrade_time": 4,
        "cost": 100,
        "boost_cost": 1000.0,
        "boost_percents": 50,
        "time_bossted": 2.0
    },
    {
        "reference": 1302.0,
        "name": "repair efficiency",
        "description": "decrease the cost of the repair 5",
        "upgrade_time": 8,
        "cost": 200,
        "boost_cost": 1000.0,
        "boost_percents": 30,
        "time_bossted": 2.4
    },
    {
        "reference": 1303.0,
        "name": "repair efficiency",
        "description": "decrease the cost of the repair 5",
        "upgrade_time": 24,
        "cost": 600,
        "boost_cost": 1000.0,
        "boost_percents": 25,
        "time_bossted": 6.0
    },
    {
        "reference": 1304.0,
        "name": "repair efficiency",
        "description": "decrease the cost of the repair 5",
        "upgrade_time": 64,
        "cost": 1600000,
        "boost_cost": 1000.0,
        "boost_percents": 25,
        "time_bossted": 16.0
    },
    {
        "reference": 1401.0,
        "name": "Improve Sell Ship",
        "description": "selling ship value increase 1",
        "upgrade_time": 4,
        "cost": 100,
        "boost_cost": 1000.0,
        "boost_percents": 50,
        "time_bossted": 2.0
    },
    {
        "reference": 1402.0,
        "name": "Improve Sell Ship",
        "description": "selling ship value increase 1",
        "upgrade_time": 6,
        "cost": 150,
        "boost_cost": 1000.0,
        "boost_percents": 30,
        "time_bossted": 1.8
    },
    {
        "reference": 1403.0,
        "name": "Improve Sell Ship",
        "description": "selling ship value increase 1",
        "upgrade_time": 10,
        "cost": 250,
        "boost_cost": 1000.0,
        "boost_percents": 30,
        "time_bossted": 3.0
    },
    {
        "reference": 1404.0,
        "name": "Improve Sell Ship",
        "description": "selling ship value increase 1",
        "upgrade_time": 30,
        "cost": 750,
        "boost_cost": 1000.0,
        "boost_percents": 25,
        "time_bossted": 7.5
    },
    {
        "reference": 1405.0,
        "name": "Improve Sell Ship",
        "description": "selling ship value increase 1",
        "upgrade_time": 70,
        "cost": 1750000,
        "boost_cost": 1000.0,
        "boost_percents": 25,
        "time_bossted": 17.5
    },
    {
        "reference": 1501.0,
        "name": "Improve Sell Guns",
        "description": "selling gun value increase 1",
        "upgrade_time": 3,
        "cost": 75,
        "boost_cost": 1000.0,
        "boost_percents": 50,
        "time_bossted": 1.5
    },
    {
        "reference": 1502.0,
        "name": "Improve Sell Guns",
        "description": "selling gun value increase 1",
        "upgrade_time": 4,
        "cost": 100,
        "boost_cost": 1000.0,
        "boost_percents": 30,
        "time_bossted": 1.2
    },
    {
        "reference": 1503.0,
        "name": "Improve Sell Guns",
        "description": "selling gun value increase 1",
        "upgrade_time": 8,
        "cost": 200,
        "boost_cost": 1000.0,
        "boost_percents": 30,
        "time_bossted": 2.4
    },
    {
        "reference": 1504.0,
        "name": "Improve Sell Guns",
        "description": "selling gun value increase 1",
        "upgrade_time": 24,
        "cost": 600,
        "boost_cost": 1000.0,
        "boost_percents": 25,
        "time_bossted": 6.0
    },
    {
        "reference": 1505.0,
        "name": "Improve Sell Guns",
        "description": "selling gun value increase 1",
        "upgrade_time": 64,
        "cost": 1600000,
        "boost_cost": 1000.0,
        "boost_percents": 25,
        "time_bossted": 16.0
    },
    {
        "reference": 1601.0,
        "name": "Improve Sell Misc",
        "description": "selling misc value increase 1",
        "upgrade_time": 3,
        "cost": 75,
        "boost_cost": 1000.0,
        "boost_percents": 50,
        "time_bossted": 1.5
    },
    {
        "reference": 1602.0,
        "name": "Improve Sell Misc",
        "description": "selling misc value increase 1",
        "upgrade_time": 4,
        "cost": 100,
        "boost_cost": 1000.0,
        "boost_percents": 30,
        "time_bossted": 1.2
    },
    {
        "reference": 1603.0,
        "name": "Improve Sell Misc",
        "description": "selling misc value increase 1",
        "upgrade_time": 8,
        "cost": 200,
        "boost_cost": 1000.0,
        "boost_percents": 30,
        "time_bossted": 2.4
    },
    {
        "reference": 1604.0,
        "name": "Improve Sell Misc",
        "description": "selling misc value increase 1",
        "upgrade_time": 24,
        "cost": 600,
        "boost_cost": 1000.0,
        "boost_percents": 25,
        "time_bossted": 6.0
    },
    {
        "reference": 1605.0,
        "name": "Improve Sell Misc",
        "description": "selling misc value increase 1",
        "upgrade_time": 64,
        "cost": 1600000,
        "boost_cost": 1000.0,
        "boost_percents": 25,
        "time_bossted": 16.0
    },
    {
        "reference": 1701.0,
        "name": "decks explore",
        "description": "increase number of deck available by +1",
        "upgrade_time": 4,
        "cost": 100,
        "boost_cost": 2000.0,
        "boost_percents": 30,
        "time_bossted": 1.2
    },
    {
        "reference": 1702.0,
        "name": "decks explore",
        "description": "increase number of deck available by +2",
        "upgrade_time": 20,
        "cost": 500,
        "boost_cost": 2000.0,
        "boost_percents": 25,
        "time_bossted": 5.0
    },
    {
        "reference": 1703.0,
        "name": "decks explore",
        "description": "increase number of deck available by +3",
        "upgrade_time": 64,
        "cost": 1600000,
        "boost_cost": 2000.0,
        "boost_percents": 25,
        "time_bossted": 16.0
    },
    {
        "reference": 1801.0,
        "name": "R&D investment",
        "description": "Reduce the cost for upgrade by 5",
        "upgrade_time": 4,
        "cost": 100,
        "boost_cost": 2000.0,
        "boost_percents": 50,
        "time_bossted": 2.0
    },
    {
        "reference": 1802.0,
        "name": "R&D investment",
        "description": "Reduce the cost for upgrade by 5",
        "upgrade_time": 20,
        "cost": 500,
        "boost_cost": 2000.0,
        "boost_percents": 30,
        "time_bossted": 6.0
    },
    {
        "reference": 1803.0,
        "name": "R&D investment",
        "description": "Reduce the cost for upgrade by 5",
        "upgrade_time": 64,
        "cost": 1600000,
        "boost_cost": 2000.0,
        "boost_percents": 30,
        "time_bossted": 19.2
    },
    {
        "reference": 1804.0,
        "name": "R&D investment",
        "description": "Reduce the cost for upgrade by 5",
        "upgrade_time": 128,
        "cost": 3200000,
        "boost_cost": 2000.0,
        "boost_percents": 25,
        "time_bossted": 32.0
    }
];


  await prisma.playerResearchTypes.createMany({
    data: research,
  });

  console.log('PlayerResearchTypes seeded successfully');
}