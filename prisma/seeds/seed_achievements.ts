import { PrismaClient } from '@prisma/client';

export async function seedAchievements(prisma: PrismaClient) {
  const achievements = [
    {
      name: "Loyalist ",
      detail: "",
      image: "IMG1",
      rule_type: ""
    },
    {
      name: "Master Mine",
      detail: "Increase your qualification by destroying asteroids.",
      image: "IMG2",
      rule_type: "more_asteroid"
    },
    {
      name: "Generous Giver",
      detail: "",
      image: "IMG3",
      rule_type: "spend_units"
    },
    {
      name: "Supreme Commander",
      detail: "",
      image: "IMG4",
      rule_type: ""
    },
    {
      name: "The Destroyer",
      detail: "",
      image: "IMG5",
      rule_type: "all_avatar"
    },
    {
      name: "I Dont Trust The Ai",
      detail: "",
      image: "IMG6",
      rule_type: "avatar_ai"
    },
    {
      name: "Supreme Destroyer",
      detail: "",
      image: "IMG7",
      rule_type: ""
    },
    {
      name: "Does it come in black?",
      detail: "",
      image: "IMG8",
      rule_type: "spend_ship"
    },
    {
      name: "Never To Broke For Firepower",
      detail: "",
      image: "IMG9",
      rule_type: "spend_guns"
    },
    {
      name: "Modules Are My Life",
      detail: "",
      image: "IMG10",
      rule_type: "spend_misc"
    },
    {
      name: "The Banker",
      detail: "",
      image: "IMG11",
      rule_type: ""
    },
    {
      name: "Climbing The Ladder",
      detail: "",
      image: "IMG12",
      rule_type: ""
    },
    {
      name: "Famous",
      detail: "",
      image: "IMG13",
      rule_type: ""
    },
    {
      name: "Not Under Warranty",
      detail: "",
      image: "IMG14",
      rule_type: "spend_repairs"
    },
    {
      name: "Made Of Money ",
      detail: "",
      image: "IMG15",
      rule_type: ""
    },
    {
      name: "The Researcher",
      detail: "",
      image: "IMG16",
      rule_type: ""
    },
    {
      name: "The Defender",
      detail: "",
      image: "IMG17",
      rule_type: ""
    },
    {
      name: "Pirate King ",
      detail: "",
      image: "IMG18",
      rule_type: ""
    },
    {
      name: "Elite Team",
      detail: "",
      image: "IMG19",
      rule_type: ""
    },
    {
      name: "Pest Control",
      detail: "",
      image: "IMG20",
      rule_type: ""
    },
    {
      name: "Rin Eradicator",
      detail: "",
      image: "IMG21",
      rule_type: ""
    },
    {
      name: "I Shot The Sheriff",
      detail: "",
      image: "IMG22",
      rule_type: ""
    },
    {
      name: "Not A Good Guy ",
      detail: "",
      image: "IMG23",
      rule_type: ""
    },
    {
      name: "Gen Raider butcher",
      detail: "",
      image: "IMG24",
      rule_type: ""
    },
    {
      name: "Kaydin Slaughter",
      detail: "",
      image: "IMG25",
      rule_type: ""
    },
    {
      name: "Missions Maniac ",
      detail: "",
      image: "IMG26",
      rule_type: ""
    }
  ];


  await prisma.achievements.createMany({
    data: achievements,
  });

  console.log('Achievements seeded successfully');
}