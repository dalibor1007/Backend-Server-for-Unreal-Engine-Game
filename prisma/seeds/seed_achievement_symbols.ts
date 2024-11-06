import { PrismaClient } from '@prisma/client';

export async function seedAchievementSymbols(prisma: PrismaClient) {
  const achievementSymbols = [
    {
      reference: 1,
      name: "Bronze Moon",
      achievement_reference: 1,
      detail: "Stay 1 week in the same guild",
      image: "IMG1",
      order: 1,
      premium: 1000,
      quantity: 1
    },
    {
      reference: 2,
      name: "Silver Rings",
      achievement_reference: 1,
      detail: "Stay 5 weeks in the same guild",
      image: "IMG2",
      order: 2,
      premium: 1000,
      quantity: 5
    },
    {
      reference: 3,
      name: "Gold Star",
      achievement_reference: 1,
      detail: "Stay 10 weeks in the same guild",
      image: "IMG3",
      order: 3,
      premium: 1000,
      quantity: 10
    },
    {
      reference: 4,
      name: "Platinum Force",
      achievement_reference: 1,
      detail: "Stay 20 weeks in the same guild",
      image: "IMG4",
      order: 4,
      premium: 1000,
      quantity: 20
    },
    {
      reference: 5,
      name: "Diamond Nebula",
      achievement_reference: 1,
      detail: "Stay 40 weeks in the same guild",
      image: "IMG5",
      order: 5,
      premium: 1000,
      quantity: 40
    },
    {
      reference: 6,
      name: "Ruby Supernova",
      achievement_reference: 1,
      detail: "Stay 52 weeks in the same guild",
      image: "IMG6",
      order: 6,
      premium: 1000,
      quantity: 52
    },
    {
      reference: 7,
      name: "Bronze Moon",
      achievement_reference: 2,
      detail: "Destroy 10 Asterods ",
      image: "IMG7",
      order: 1,
      premium: 1000,
      quantity: 10
    },
    {
      reference: 8,
      name: "Silver Rings",
      achievement_reference: 2,
      detail: "Destroy 100 Asterods ",
      image: "IMG8",
      order: 2,
      premium: 1000,
      quantity: 100
    },
    {
      reference: 9,
      name: "Gold Star",
      achievement_reference: 2,
      detail: "Destroy 1000 Asterods ",
      image: "IMG9",
      order: 3,
      premium: 1000,
      quantity: 1000
    },
    {
      reference: 10,
      name: "Platinum Force",
      achievement_reference: 2,
      detail: "Destroy 5000 Asterods ",
      image: "IMG10",
      order: 4,
      premium: 1000,
      quantity: 5000
    },
    {
      reference: 11,
      name: "Diamond Nebula",
      achievement_reference: 2,
      detail: "Destroy 10000 Asterods ",
      image: "IMG11",
      order: 5,
      premium: 1000,
      quantity: 10000
    },
    {
      reference: 12,
      name: "Ruby Supernova",
      achievement_reference: 2,
      detail: "Destroy 20000 Asterods ",
      image: "IMG12",
      order: 6,
      premium: 1000,
      quantity: 20000
    },
    {
      reference: 13,
      name: "Bronze Moon",
      achievement_reference: 3,
      detail: "Send 100 goods units",
      image: "IMG13",
      order: 1,
      premium: 1000,
      quantity: 100
    },
    {
      reference: 14,
      name: "Silver Rings",
      achievement_reference: 3,
      detail: "Send 1000 goods units",
      image: "IMG14",
      order: 2,
      premium: 1000,
      quantity: 1000
    },
    {
      reference: 15,
      name: "Gold Star",
      achievement_reference: 3,
      detail: "Send 5000 goods units",
      image: "IMG15",
      order: 3,
      premium: 1000,
      quantity: 5000
    },
    {
      reference: 16,
      name: "Platinum Force",
      achievement_reference: 3,
      detail: "Send 15000 goods units",
      image: "IMG16",
      order: 4,
      premium: 1000,
      quantity: 15000
    },
    {
      reference: 17,
      name: "Diamond Nebula",
      achievement_reference: 3,
      detail: "Send 30000 goods units",
      image: "IMG17",
      order: 5,
      premium: 1000,
      quantity: 30000
    },
    {
      reference: 18,
      name: "Ruby Supernova",
      achievement_reference: 3,
      detail: "Send 100000 goods units",
      image: "IMG18",
      order: 6,
      premium: 1000,
      quantity: 100000
    },
    {
      reference: 19,
      name: "Bronze Moon",
      achievement_reference: 4,
      detail: "Control 1 Planet",
      image: "IMG19",
      order: 1,
      premium: 1000,
      quantity: 1
    },
    {
      reference: 20,
      name: "Silver Rings",
      achievement_reference: 4,
      detail: "Control 2 Planets",
      image: "IMG20",
      order: 2,
      premium: 1000,
      quantity: 2
    },
    {
      reference: 21,
      name: "Gold Star",
      achievement_reference: 4,
      detail: "Control 3 Planets",
      image: "IMG21",
      order: 3,
      premium: 1000,
      quantity: 3
    },
    {
      reference: 22,
      name: "Platinum Force",
      achievement_reference: 4,
      detail: "Control 4 Planets",
      image: "IMG22",
      order: 4,
      premium: 1000,
      quantity: 4
    },
    {
      reference: 23,
      name: "Diamond Nebula",
      achievement_reference: 4,
      detail: "Control 5 Planets",
      image: "IMG23",
      order: 5,
      premium: 1000,
      quantity: 5
    },
    {
      reference: 24,
      name: "Ruby Supernova",
      achievement_reference: 4,
      detail: "Control 10 Planets",
      image: "IMG24",
      order: 6,
      premium: 1000,
      quantity: 10
    },
    {
      reference: 25,
      name: "Bronze Moon",
      achievement_reference: 5,
      detail: "Destroy 10 ships",
      image: "IMG25",
      order: 1,
      premium: 1000,
      quantity: 10
    },
    {
      reference: 26,
      name: "Silver Rings",
      achievement_reference: 5,
      detail: "Destroy 100 ships",
      image: "IMG26",
      order: 2,
      premium: 1000,
      quantity: 100
    },
    {
      reference: 27,
      name: "Gold Star",
      achievement_reference: 5,
      detail: "Destroy 500 ships",
      image: "IMG27",
      order: 3,
      premium: 1000,
      quantity: 500
    },
    {
      reference: 28,
      name: "Platinum Force",
      achievement_reference: 5,
      detail: "Destroy 1000 ships",
      image: "IMG28",
      order: 4,
      premium: 1000,
      quantity: 1000
    },
    {
      reference: 29,
      name: "Diamond Nebula",
      achievement_reference: 5,
      detail: "Destroy 2000 ships",
      image: "IMG29",
      order: 5,
      premium: 1000,
      quantity: 2000
    },
    {
      reference: 30,
      name: "Ruby Supernova",
      achievement_reference: 5,
      detail: "Destroy 5000 ships",
      image: "IMG30",
      order: 6,
      premium: 1000,
      quantity: 5000
    },
    {
      reference: 31,
      name: "Bronze Moon",
      achievement_reference: 6,
      detail: "Destroy 10 bot ships",
      image: "IMG31",
      order: 1,
      premium: 1000,
      quantity: 10
    },
    {
      reference: 32,
      name: "Silver Rings",
      achievement_reference: 6,
      detail: "Destroy 50 bot ships",
      image: "IMG32",
      order: 2,
      premium: 1000,
      quantity: 50
    },
    {
      reference: 33,
      name: "Gold Star",
      achievement_reference: 6,
      detail: "Destroy 100 bot ships",
      image: "IMG33",
      order: 3,
      premium: 1000,
      quantity: 100
    },
    {
      reference: 34,
      name: "Platinum Force",
      achievement_reference: 6,
      detail: "Destroy 500 bot ships",
      image: "IMG34",
      order: 4,
      premium: 1000,
      quantity: 500
    },
    {
      reference: 35,
      name: "Diamond Nebula",
      achievement_reference: 6,
      detail: "Destroy 1000 bot ships",
      image: "IMG35",
      order: 5,
      premium: 1000,
      quantity: 1000
    },
    {
      reference: 36,
      name: "Ruby Supernova",
      achievement_reference: 6,
      detail: "Destroy 2000 bot ships",
      image: "IMG36",
      order: 6,
      premium: 1000,
      quantity: 2000
    },
    {
      reference: 37,
      name: "Bronze Moon",
      achievement_reference: 7,
      detail: "Destroy 1 satellite ",
      image: "IMG37",
      order: 1,
      premium: 1000,
      quantity: 1
    },
    {
      reference: 38,
      name: "Silver Rings",
      achievement_reference: 7,
      detail: "Destroy 3 satellites ",
      image: "IMG38",
      order: 2,
      premium: 1000,
      quantity: 3
    },
    {
      reference: 39,
      name: "Gold Star",
      achievement_reference: 7,
      detail: "Destroy 5 satellites ",
      image: "IMG39",
      order: 3,
      premium: 1000,
      quantity: 5
    },
    {
      reference: 40,
      name: "Platinum Force",
      achievement_reference: 7,
      detail: "Destroy 10 satellites ",
      image: "IMG40",
      order: 4,
      premium: 1000,
      quantity: 10
    },
    {
      reference: 41,
      name: "Diamond Nebula",
      achievement_reference: 7,
      detail: "Destroy 20 satellites ",
      image: "IMG41",
      order: 5,
      premium: 1000,
      quantity: 20
    },
    {
      reference: 42,
      name: "Ruby Supernova",
      achievement_reference: 7,
      detail: "Destroy 50 satellites ",
      image: "IMG42",
      order: 6,
      premium: 1000,
      quantity: 50
    },
    {
      reference: 43,
      name: "Bronze Moon",
      achievement_reference: 8,
      detail: "Spend 1M DC in ships",
      image: "IMG43",
      order: 1,
      premium: 1000,
      quantity: 1000000
    },
    {
      reference: 44,
      name: "Silver Rings",
      achievement_reference: 8,
      detail: "Spend 2M DC in ships",
      image: "IMG44",
      order: 2,
      premium: 1000,
      quantity: 2000000
    },
    {
      reference: 45,
      name: "Gold Star",
      achievement_reference: 8,
      detail: "Spend 5M DC in ships",
      image: "IMG45",
      order: 3,
      premium: 1000,
      quantity: 5000000
    },
    {
      reference: 46,
      name: "Platinum Force",
      achievement_reference: 8,
      detail: "Spend 10M DC in ships",
      image: "IMG46",
      order: 4,
      premium: 1000,
      quantity: 10000000
    },
    {
      reference: 47,
      name: "Diamond Nebula",
      achievement_reference: 8,
      detail: "Spend 50M DC in ships",
      image: "IMG47",
      order: 5,
      premium: 1000,
      quantity: 50000000
    },
    {
      reference: 48,
      name: "Ruby Supernova",
      achievement_reference: 8,
      detail: "Spend 100M DC in ships",
      image: "IMG48",
      order: 6,
      premium: 1000,
      quantity: 100000000
    },
    {
      reference: 49,
      name: "Bronze Moon",
      achievement_reference: 9,
      detail: "Spend 500k DC on guns",
      image: "IMG49",
      order: 1,
      premium: 1000,
      quantity: 500000
    },
    {
      reference: 50,
      name: "Silver Rings",
      achievement_reference: 9,
      detail: "Spend 2M DC on guns",
      image: "IMG50",
      order: 2,
      premium: 1000,
      quantity: 2000000
    },
    {
      reference: 51,
      name: "Gold Star",
      achievement_reference: 9,
      detail: "Spend 4M DC on guns",
      image: "IMG51",
      order: 3,
      premium: 1000,
      quantity: 4000000
    },
    {
      reference: 52,
      name: "Platinum Force",
      achievement_reference: 9,
      detail: "Spend 10M DC on guns",
      image: "IMG52",
      order: 4,
      premium: 1000,
      quantity: 10000000
    },
    {
      reference: 53,
      name: "Diamond Nebula",
      achievement_reference: 9,
      detail: "Spend 20M DC on guns",
      image: "IMG53",
      order: 5,
      premium: 1000,
      quantity: 20000000
    },
    {
      reference: 54,
      name: "Ruby Supernova",
      achievement_reference: 9,
      detail: "Spend 50M DC on guns",
      image: "IMG54",
      order: 6,
      premium: 1000,
      quantity: 50000000
    },
    {
      reference: 55,
      name: "Bronze Moon",
      achievement_reference: 10,
      detail: "Spend 250k DC on misc.",
      image: "IMG55",
      order: 1,
      premium: 1000,
      quantity: 250000
    },
    {
      reference: 56,
      name: "Silver Rings",
      achievement_reference: 10,
      detail: "Spend 1M DC on misc.",
      image: "IMG56",
      order: 2,
      premium: 1000,
      quantity: 1000000
    },
    {
      reference: 57,
      name: "Gold Star",
      achievement_reference: 10,
      detail: "Spend 3M DC on misc.",
      image: "IMG57",
      order: 3,
      premium: 1000,
      quantity: 3000000
    },
    {
      reference: 58,
      name: "Platinum Force",
      achievement_reference: 10,
      detail: "Spend 6M DC on misc.",
      image: "IMG58",
      order: 4,
      premium: 1000,
      quantity: 6000000
    },
    {
      reference: 59,
      name: "Diamond Nebula",
      achievement_reference: 10,
      detail: "Spend 15M DC on misc.",
      image: "IMG59",
      order: 5,
      premium: 1000,
      quantity: 15000000
    },
    {
      reference: 60,
      name: "Ruby Supernova",
      achievement_reference: 10,
      detail: "Spend 30M DC on misc.",
      image: "IMG60",
      order: 6,
      premium: 1000,
      quantity: 30000000
    },
    {
      reference: 61,
      name: "Bronze Moon",
      achievement_reference: 11,
      detail: "Store 1M DC ",
      image: "IMG61",
      order: 1,
      premium: 1000,
      quantity: 1000000
    },
    {
      reference: 62,
      name: "Silver Rings",
      achievement_reference: 11,
      detail: "Store 5M DC",
      image: "IMG62",
      order: 2,
      premium: 1000,
      quantity: 5000000
    },
    {
      reference: 63,
      name: "Gold Star",
      achievement_reference: 11,
      detail: "Store 25M DC",
      image: "IMG63",
      order: 3,
      premium: 1000,
      quantity: 25000000
    },
    {
      reference: 64,
      name: "Platinum Force",
      achievement_reference: 11,
      detail: "Store 100M DC",
      image: "IMG64",
      order: 4,
      premium: 1000,
      quantity: 100000000
    },
    {
      reference: 65,
      name: "Diamond Nebula",
      achievement_reference: 11,
      detail: "Store 250M DC",
      image: "IMG65",
      order: 5,
      premium: 1000,
      quantity: 250000000
    },
    {
      reference: 66,
      name: "Ruby Supernova",
      achievement_reference: 11,
      detail: "Store 500m DC",
      image: "IMG66",
      order: 6,
      premium: 1000,
      quantity: 500000000000
    },
    {
      reference: 67,
      name: "Bronze Moon",
      achievement_reference: 12,
      detail: "Become Second Rank In Your Guild",
      image: "IMG67",
      order: 1,
      premium: 1000,
      quantity: 0
    },
    {
      reference: 68,
      name: "Silver Rings",
      achievement_reference: 12,
      detail: "Become Third Rank In Your Guild",
      image: "IMG68",
      order: 2,
      premium: 1000,
      quantity: 0
    },
    {
      reference: 69,
      name: "Gold Star",
      achievement_reference: 12,
      detail: "Become Fourth Rank In Your Guild",
      image: "IMG69",
      order: 3,
      premium: 1000,
      quantity: 0
    },
    {
      reference: 70,
      name: "Platinum Force",
      achievement_reference: 12,
      detail: "Become Fifth Rank In Your Guild",
      image: "IMG70",
      order: 4,
      premium: 1000,
      quantity: 0
    },
    {
      reference: 71,
      name: "Bronze Moon",
      achievement_reference: 13,
      detail: "Occupy Top Rank in  1 Catagory",
      image: "IMG71",
      order: 1,
      premium: 1000,
      quantity: 1
    },
    {
      reference: 72,
      name: "Silver Rings",
      achievement_reference: 13,
      detail: "Occupy Top Rank in  3 Catagories",
      image: "IMG72",
      order: 2,
      premium: 1000,
      quantity: 3
    },
    {
      reference: 73,
      name: "Gold Star",
      achievement_reference: 13,
      detail: "Occupy Top Rank in  5 Catagories",
      image: "IMG73",
      order: 3,
      premium: 1000,
      quantity: 5
    },
    {
      reference: 74,
      name: "Platinum Force",
      achievement_reference: 13,
      detail: "Occupy Top Rank in  6 Catagories",
      image: "IMG74",
      order: 4,
      premium: 1000,
      quantity: 6
    },
    {
      reference: 75,
      name: "Diamond Nebula",
      achievement_reference: 13,
      detail: "Occupy Top Rank in  7 Catagories",
      image: "IMG75",
      order: 5,
      premium: 1000,
      quantity: 7
    },
    {
      reference: 76,
      name: "Ruby Supernova",
      achievement_reference: 13,
      detail: "Occupy Top Rank in  8 Catagories",
      image: "IMG76",
      order: 6,
      premium: 1000,
      quantity: 8
    },
    {
      reference: 77,
      name: "Bronze Moon",
      achievement_reference: 14,
      detail: "Spend 500k DC on repairs",
      image: "IMG77",
      order: 1,
      premium: 1000,
      quantity: 500000
    },
    {
      reference: 78,
      name: "Silver Rings",
      achievement_reference: 14,
      detail: "Spend 1M DC on repairs",
      image: "IMG78",
      order: 2,
      premium: 1000,
      quantity: 1000000
    },
    {
      reference: 79,
      name: "Gold Star",
      achievement_reference: 14,
      detail: "Spend 3M DC on repairs",
      image: "IMG79",
      order: 3,
      premium: 1000,
      quantity: 3000000
    },
    {
      reference: 80,
      name: "Platinum Force",
      achievement_reference: 14,
      detail: "Spend 8M DC on repairs",
      image: "IMG80",
      order: 4,
      premium: 1000,
      quantity: 8000000
    },
    {
      reference: 81,
      name: "Diamond Nebula",
      achievement_reference: 14,
      detail: "Spend 16M DC on repairs",
      image: "IMG81",
      order: 5,
      premium: 1000,
      quantity: 16000000
    },
    {
      reference: 82,
      name: "Ruby Supernova",
      achievement_reference: 14,
      detail: "Spend 35M DC on repairs",
      image: "IMG82",
      order: 6,
      premium: 1000,
      quantity: 35000000
    },
    {
      reference: 83,
      name: "Bronze Moon",
      achievement_reference: 15,
      detail: "Make 1M selling goods",
      image: "IMG83",
      order: 1,
      premium: 1000,
      quantity: 1000000
    },
    {
      reference: 84,
      name: "Silver Rings",
      achievement_reference: 15,
      detail: "Make 10M selling goods",
      image: "IMG84",
      order: 2,
      premium: 1000,
      quantity: 10000000
    },
    {
      reference: 85,
      name: "Gold Star",
      achievement_reference: 15,
      detail: "Make 20M selling goods",
      image: "IMG85",
      order: 3,
      premium: 1000,
      quantity: 20000000
    },
    {
      reference: 86,
      name: "Platinum Force",
      achievement_reference: 15,
      detail: "Make 50M selling goods",
      image: "IMG86",
      order: 4,
      premium: 1000,
      quantity: 50000000
    },
    {
      reference: 87,
      name: "Diamond Nebula",
      achievement_reference: 15,
      detail: "Make 100M selling goods",
      image: "IMG87",
      order: 5,
      premium: 1000,
      quantity: 100000000
    },
    {
      reference: 88,
      name: "Ruby Supernova",
      achievement_reference: 15,
      detail: "Make 500M selling goods",
      image: "IMG88",
      order: 6,
      premium: 1000,
      quantity: 500000000
    },
    {
      reference: 89,
      name: "Bronze Moon",
      achievement_reference: 16,
      detail: "Complete 5 research",
      image: "IMG89",
      order: 1,
      premium: 1000,
      quantity: 5
    },
    {
      reference: 90,
      name: "Silver Rings",
      achievement_reference: 16,
      detail: "Complete 10 research",
      image: "IMG90",
      order: 2,
      premium: 1000,
      quantity: 10
    },
    {
      reference: 91,
      name: "Gold Star",
      achievement_reference: 16,
      detail: "Complete 15 research",
      image: "IMG91",
      order: 3,
      premium: 1000,
      quantity: 15
    },
    {
      reference: 92,
      name: "Platinum Force",
      achievement_reference: 16,
      detail: "Complete 20 research",
      image: "IMG92",
      order: 4,
      premium: 1000,
      quantity: 20
    },
    {
      reference: 93,
      name: "Diamond Nebula",
      achievement_reference: 16,
      detail: "Complete 25 research",
      image: "IMG93",
      order: 5,
      premium: 1000,
      quantity: 25
    },
    {
      reference: 94,
      name: "Ruby Supernova",
      achievement_reference: 16,
      detail: "Complete 30 research",
      image: "IMG94",
      order: 6,
      premium: 1000,
      quantity: 30
    },
    {
      reference: 95,
      name: "Bronze Moon",
      achievement_reference: 17,
      detail: "Destroy enemy ships while defending a satellite 10 ",
      image: "IMG95",
      order: 1,
      premium: 1000,
      quantity: 10
    },
    {
      reference: 96,
      name: "Silver Rings",
      achievement_reference: 17,
      detail: "Destroy enemy ships while defending a satellite 20",
      image: "IMG96",
      order: 2,
      premium: 1000,
      quantity: 20
    },
    {
      reference: 97,
      name: "Gold Star",
      achievement_reference: 17,
      detail: "Destroy enemy ships while defending a satellite 50",
      image: "IMG97",
      order: 3,
      premium: 1000,
      quantity: 50
    },
    {
      reference: 98,
      name: "Platinum Force",
      achievement_reference: 17,
      detail: "Destroy enemy ships while defending a satellite 100",
      image: "IMG98",
      order: 4,
      premium: 1000,
      quantity: 100
    },
    {
      reference: 99,
      name: "Diamond Nebula",
      achievement_reference: 17,
      detail: "Destroy enemy ships while defending a satellite 500",
      image: "IMG99",
      order: 5,
      premium: 1000,
      quantity: 500
    },
    {
      reference: 100,
      name: "Ruby Supernova",
      achievement_reference: 17,
      detail: "Destroy enemy ships while defending a satellite 1000",
      image: "IMG100",
      order: 6,
      premium: 1000,
      quantity: 1000
    },
    {
      reference: 101,
      name: "Bronze Moon",
      achievement_reference: 18,
      detail: "Loot Goods From Destroyed Ships 1k",
      image: "IMG101",
      order: 1,
      premium: 1000,
      quantity: 1000
    },
    {
      reference: 102,
      name: "Silver Rings",
      achievement_reference: 18,
      detail: "Loot Goods From Destroyed Ships 10k",
      image: "IMG102",
      order: 2,
      premium: 1000,
      quantity: 10000
    },
    {
      reference: 103,
      name: "Gold Star",
      achievement_reference: 18,
      detail: "Loot Goods From Destroyed Ships 50k",
      image: "IMG103",
      order: 3,
      premium: 1000,
      quantity: 50000
    },
    {
      reference: 104,
      name: "Platinum Force",
      achievement_reference: 18,
      detail: "Loot Goods From Destroyed Ships 100k",
      image: "IMG104",
      order: 4,
      premium: 1000,
      quantity: 100000
    },
    {
      reference: 105,
      name: "Diamond Nebula",
      achievement_reference: 18,
      detail: "Loot Goods From Destroyed Ships 500k",
      image: "IMG105",
      order: 5,
      premium: 1000,
      quantity: 500000
    },
    {
      reference: 106,
      name: "Ruby Supernova",
      achievement_reference: 18,
      detail: "Loot Goods From Destroyed Ships 1M",
      image: "IMG106",
      order: 6,
      premium: 1000,
      quantity: 1000000
    },
    {
      reference: 107,
      name: "Bronze Moon",
      achievement_reference: 19,
      detail: "Be a member of a guild that controls 1 Planet",
      image: "IMG107",
      order: 1,
      premium: 1000,
      quantity: 1
    },
    {
      reference: 108,
      name: "Silver Rings",
      achievement_reference: 19,
      detail: "Be a member of a guild that controls 2 Planet",
      image: "IMG108",
      order: 2,
      premium: 1000,
      quantity: 2
    },
    {
      reference: 109,
      name: "Gold Star",
      achievement_reference: 19,
      detail: "Be a member of a guild that controls 3 Planet",
      image: "IMG109",
      order: 3,
      premium: 1000,
      quantity: 3
    },
    {
      reference: 110,
      name: "Platinum Force",
      achievement_reference: 19,
      detail: "Be a member of a guild that controls 4 Planet",
      image: "IMG110",
      order: 4,
      premium: 1000,
      quantity: 4
    },
    {
      reference: 111,
      name: "Diamond Nebula",
      achievement_reference: 19,
      detail: "Be a member of a guild that controls 5 Planet",
      image: "IMG111",
      order: 5,
      premium: 1000,
      quantity: 5
    },
    {
      reference: 112,
      name: "Ruby Supernova",
      achievement_reference: 19,
      detail: "Be a member of a guild that controls 6 Planet",
      image: "IMG112",
      order: 6,
      premium: 1000,
      quantity: 6
    },
    {
      reference: 113,
      name: "Bronze Moon",
      achievement_reference: 20,
      detail: "Destroy 10 klynn ships",
      image: "IMG113",
      order: 1,
      premium: 1000,
      quantity: {
        ship: 101,
        total: 10
      }
    },
    {
      reference: 114,
      name: "Silver Rings",
      achievement_reference: 20,
      detail: "Destroy 100 klynn ships",
      image: "IMG114",
      order: 2,
      premium: 1000,
      quantity: {
        ship: 101,
        total: 100
      }
    },
    {
      reference: 115,
      name: "Gold Star",
      achievement_reference: 20,
      detail: "Destroy 200 klynn ships",
      image: "IMG115",
      order: 3,
      premium: 1000,
      quantity: {
        ship: 101,
        total: 200
      }
    },
    {
      reference: 116,
      name: "Platinum Force",
      achievement_reference: 20,
      detail: "Destroy 500 klynn ships",
      image: "IMG116",
      order: 4,
      premium: 1000,
      quantity: {
        ship: 101,
        total: 500
      }
    },
    {
      reference: 117,
      name: "Diamond Nebula",
      achievement_reference: 20,
      detail: "Destroy 1000 klynn ships",
      image: "IMG117",
      order: 5,
      premium: 1000,
      quantity: {
        ship: 101,
        total: 1000
      }
    },
    {
      reference: 118,
      name: "Ruby Supernova",
      achievement_reference: 20,
      detail: "Destroy 2000 klynn ships",
      image: "IMG118",
      order: 6,
      premium: 1000,
      quantity: {
        ship: 101,
        total: 2000
      }
    },
    {
      reference: 119,
      name: "Bronze Moon",
      achievement_reference: 21,
      detail: "Destroy 10 Rin ships",
      image: "IMG119",
      order: 1,
      premium: 1000,
      quantity: {
        ship: 102,
        total: 10
      }
    },
    {
      reference: 120,
      name: "Silver Rings",
      achievement_reference: 21,
      detail: "Destroy 100 Rin ships",
      image: "IMG120",
      order: 2,
      premium: 1000,
      quantity: {
        ship: 102,
        total: 100
      }
    },
    {
      reference: 121,
      name: "Gold Star",
      achievement_reference: 21,
      detail: "Destroy 200 Rin ships",
      image: "IMG121",
      order: 3,
      premium: 1000,
      quantity: {
        ship: 102,
        total: 200
      }
    },
    {
      reference: 122,
      name: "Platinum Force",
      achievement_reference: 21,
      detail: "Destroy 500 Rin ships",
      image: "IMG122",
      order: 4,
      premium: 1000,
      quantity: {
        ship: 102,
        total: 500
      }
    },
    {
      reference: 123,
      name: "Diamond Nebula",
      achievement_reference: 21,
      detail: "Destroy 1000 Rin ships",
      image: "IMG123",
      order: 5,
      premium: 1000,
      quantity: {
        ship: 102,
        total: 1000
      }
    },
    {
      reference: 124,
      name: "Ruby Supernova",
      achievement_reference: 21,
      detail: "Destroy 2000 klynn ships",
      image: "IMG124",
      order: 6,
      premium: 1000,
      quantity: {
        ship: 102,
        total: 2000
      }
    },
    {
      reference: 125,
      name: "Bronze Moon",
      achievement_reference: 22,
      detail: "Destroy 10 Militia Ships",
      image: "IMG125",
      order: 1,
      premium: 1000,
      quantity: {
        ship: 103,
        total: 10
      }
    },
    {
      reference: 126,
      name: "Silver Rings",
      achievement_reference: 22,
      detail: "Destroy 100 Militia Ships",
      image: "IMG126",
      order: 2,
      premium: 1000,
      quantity: {
        ship: 103,
        total: 100
      }
    },
    {
      reference: 127,
      name: "Gold Star",
      achievement_reference: 22,
      detail: "Destroy 200 Militia Ships",
      image: "IMG127",
      order: 3,
      premium: 1000,
      quantity: {
        ship: 103,
        total: 200
      }
    },
    {
      reference: 128,
      name: "Platinum Force",
      achievement_reference: 22,
      detail: "Destroy 500 Militia Ships",
      image: "IMG128",
      order: 4,
      premium: 1000,
      quantity: {
        ship: 103,
        total: 500
      }
    },
    {
      reference: 129,
      name: "Diamond Nebula",
      achievement_reference: 22,
      detail: "Destroy 1000 Militia Ships",
      image: "IMG129",
      order: 5,
      premium: 1000,
      quantity: {
        ship: 103,
        total: 1000
      }
    },
    {
      reference: 130,
      name: "Ruby Supernova",
      achievement_reference: 22,
      detail: "Destroy 2000 Militia Ships",
      image: "IMG130",
      order: 6,
      premium: 1000,
      quantity: {
        ship: 103,
        total: 2000
      }
    },
    {
      reference: 131,
      name: "Bronze Moon",
      achievement_reference: 23,
      detail: "Destroy 10 Gen Crusader ships",
      image: "IMG131",
      order: 1,
      premium: 1000,
      quantity: {
        ship: 104,
        total: 10
      }
    },
    {
      reference: 132,
      name: "Silver Rings",
      achievement_reference: 23,
      detail: "Destroy 100 Gen Crusader ships",
      image: "IMG132",
      order: 2,
      premium: 1000,
      quantity: {
        ship: 104,
        total: 100
      }
    },
    {
      reference: 133,
      name: "Gold Star",
      achievement_reference: 23,
      detail: "Destroy 200 Gen Crusader ships",
      image: "IMG133",
      order: 3,
      premium: 1000,
      quantity: {
        ship: 104,
        total: 200
      }
    },
    {
      reference: 134,
      name: "Platinum Force",
      achievement_reference: 23,
      detail: "Destroy 500 Gen Crusader ships",
      image: "IMG134",
      order: 4,
      premium: 1000,
      quantity: {
        ship: 104,
        total: 500
      }
    },
    {
      reference: 135,
      name: "Diamond Nebula",
      achievement_reference: 23,
      detail: "Destroy 1000 Gen Crusader ships",
      image: "IMG135",
      order: 5,
      premium: 1000,
      quantity: {
        ship: 104,
        total: 1000
      }
    },
    {
      reference: 136,
      name: "Ruby Supernova",
      achievement_reference: 23,
      detail: "Destroy 2000 Gen Crusader ships",
      image: "IMG136",
      order: 6,
      premium: 1000,
      quantity: {
        ship: 104,
        total: 2000
      }
    },
    {
      reference: 137,
      name: "Bronze Moon",
      achievement_reference: 24,
      detail: "Destroy 10 Gen Raider ships",
      image: "IMG137",
      order: 1,
      premium: 1000,
      quantity: {
        ship: 105,
        total: 10
      }
    },
    {
      reference: 138,
      name: "Silver Rings",
      achievement_reference: 24,
      detail: "Destroy 100 Gen Raider ships",
      image: "IMG138",
      order: 2,
      premium: 1000,
      quantity: {
        ship: 105,
        total: 100
      }
    },
    {
      reference: 139,
      name: "Gold Star",
      achievement_reference: 24,
      detail: "Destroy 200 Gen Raider ships",
      image: "IMG139",
      order: 3,
      premium: 1000,
      quantity: {
        ship: 105,
        total: 200
      }
    },
    {
      reference: 140,
      name: "Platinum Force",
      achievement_reference: 24,
      detail: "Destroy 500 Gen Raider ships",
      image: "IMG140",
      order: 4,
      premium: 1000,
      quantity: {
        ship: 105,
        total: 500
      }
    },
    {
      reference: 141,
      name: "Diamond Nebula",
      achievement_reference: 24,
      detail: "Destroy 1000 Gen Raider ships",
      image: "IMG141",
      order: 5,
      premium: 1000,
      quantity: {
        ship: 105,
        total: 1000
      }
    },
    {
      reference: 142,
      name: "Ruby Supernova",
      achievement_reference: 24,
      detail: "Destroy 2000 Gen Raider ships",
      image: "IMG142",
      order: 6,
      premium: 1000,
      quantity: {
        ship: 105,
        total: 2000
      }
    },
    {
      reference: 143,
      name: "bronze Moon",
      achievement_reference: 25,
      detail: "Destroy 10 Kaydin ships",
      image: "IMG143",
      order: 1,
      premium: 1000,
      quantity: {
        ship: 106,
        total: 10
      }
    },
    {
      reference: 144,
      name: "Silver Rings",
      achievement_reference: 25,
      detail: "Destroy 100 Kaydin ships",
      image: "IMG144",
      order: 2,
      premium: 1000,
      quantity: {
        ship: 106,
        total: 100
      }
    },
    {
      reference: 145,
      name: "Gold Star",
      achievement_reference: 25,
      detail: "Destroy 200 Kaydin ships",
      image: "IMG145",
      order: 3,
      premium: 1000,
      quantity: {
        ship: 106,
        total: 200
      }
    },
    {
      reference: 146,
      name: "Platinum Force",
      achievement_reference: 25,
      detail: "Destroy 500 Kaydin ships",
      image: "IMG146",
      order: 4,
      premium: 1000,
      quantity: {
        ship: 106,
        total: 500
      }
    },
    {
      reference: 147,
      name: "Diamond Nebula",
      achievement_reference: 25,
      detail: "Destroy 1000 Kaydin ships",
      image: "IMG147",
      order: 5,
      premium: 1000,
      quantity: {
        ship: 106,
        total: 1000
      }
    },
    {
      reference: 148,
      name: "Ruby Supernova",
      achievement_reference: 25,
      detail: "Destroy 2000 Kaydin ships",
      image: "IMG148",
      order: 6,
      premium: 1000,
      quantity: {
        ship: 106,
        total: 2000
      }
    },
    {
      reference: 149,
      name: "Bronze Moon",
      achievement_reference: 26,
      detail: "Complete 10 Missions",
      image: "IMG149",
      order: 1,
      premium: 1000,
      quantity: 10
    },
    {
      reference: 150,
      name: "Silver Rings",
      achievement_reference: 26,
      detail: "Complete 20 Missions",
      image: "IMG150",
      order: 2,
      premium: 1000,
      quantity: 20
    },
    {
      reference: 151,
      name: "Gold Star",
      achievement_reference: 26,
      detail: "Complete 40 Missions",
      image: "IMG151",
      order: 3,
      premium: 1000,
      quantity: 40
    },
    {
      reference: 152,
      name: "Platinum Force",
      achievement_reference: 26,
      detail: "Complete 50 Missions",
      image: "IMG152",
      order: 4,
      premium: 1000,
      quantity: 50
    },
    {
      reference: 153,
      name: "Diamond Nebula",
      achievement_reference: 26,
      detail: "Complete 70 Missions",
      image: "IMG153",
      order: 5,
      premium: 1000,
      quantity: 70
    },
    {
      reference: 154,
      name: "Ruby Supernova",
      achievement_reference: 26,
      detail: "Complete 100 Missions",
      image: "IMG154",
      order: 6,
      premium: 1000,
      quantity: 100
    }
  ];

  const arrAchievementSymbols = [];
  achievementSymbols.map(achievement =>{
    let symbols = {
      reference: achievement.reference,
      name: achievement.name,
      achievement_reference: achievement.achievement_reference,
      detail: achievement.detail,
      image: achievement.image,
      order: achievement.order,
      premium: achievement.premium,
    }
    if(typeof achievement.quantity === "number"){
      Object.assign(symbols, {quantity: achievement.quantity});
    }else{
      Object.assign(symbols, {quantity: achievement.quantity.total, ship: achievement.quantity.ship});
    }
    arrAchievementSymbols.push(symbols);
  })
  await prisma.achievementSymbols.createMany({
    data: arrAchievementSymbols,
  });

  console.log('AchievementSymbols seeded successfully');
}