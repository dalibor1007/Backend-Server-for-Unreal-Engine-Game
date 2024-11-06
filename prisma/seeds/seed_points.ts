import { PointType, PrismaClient } from '@prisma/client';

export async function seedPoints(prisma: PrismaClient) {
  const points = [
    {
      name: "11659",
      reference: 11659,
      xpos: 34,
      ypos: 26,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 2,
      ai_guild_area: 3
    },
    {
      name: "11994",
      reference: 11994,
      xpos: 44,
      ypos: 31,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 7,
      ai_guild_area: 5
    },
    {
      name: "12258",
      reference: 12258,
      xpos: 48,
      ypos: 35,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 7,
      ai_guild_area: 5
    },
    {
      name: "11082",
      reference: 11082,
      xpos: 42,
      ypos: 17,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 2,
      ai_guild_area: 3
    },
    {
      name: "11084",
      reference: 11084,
      xpos: 44,
      ypos: 17,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 2,
      ai_guild_area: 3
    },
    {
      name: "11024",
      reference: 11024,
      xpos: 49,
      ypos: 16,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 0,
      ai_guild_area: 3
    },
    {
      name: "11243",
      reference: 11243,
      xpos: 8,
      ypos: 20,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 6,
      ai_guild_area: 2
    },
    {
      name: "10562",
      reference: 10562,
      xpos: 42,
      ypos: 9,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 0,
      ai_guild_area: 1
    },
    {
      name: "Neutral_Gen_Gate_1",
      reference: 10310,
      xpos: 50,
      ypos: 5,
      type: PointType.GATE,
      galaxy_index: 0,
      access_level_area: 0,
      ai_guild_area: 1
    },
    {
      name: "10436",
      reference: 10436,
      xpos: 46,
      ypos: 7,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 0,
      ai_guild_area: 1
    },
    {
      name: "10569",
      reference: 10569,
      xpos: 49,
      ypos: 9,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 0,
      ai_guild_area: 1
    },
    {
      name: "10564",
      reference: 10564,
      xpos: 44,
      ypos: 9,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 0,
      ai_guild_area: 1
    },
    {
      name: "10559",
      reference: 10559,
      xpos: 39,
      ypos: 9,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 0,
      ai_guild_area: 1
    },
    {
      name: "Lauis_Metis",
      reference: 10566,
      xpos: 46,
      ypos: 9,
      type: PointType.PLANET,
      galaxy_index: 0,
      access_level_area: 0,
      ai_guild_area: 1
    },
    {
      name: "10694",
      reference: 10694,
      xpos: 44,
      ypos: 11,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 0,
      ai_guild_area: 1
    },
    {
      name: "10572",
      reference: 10572,
      xpos: 52,
      ypos: 9,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 0,
      ai_guild_area: 1
    },
    {
      name: "10574",
      reference: 10574,
      xpos: 54,
      ypos: 9,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 0,
      ai_guild_area: 1
    },
    {
      name: "Neutral_Gen_Gate_2",
      reference: 10576,
      xpos: 56,
      ypos: 9,
      type: PointType.GATE,
      galaxy_index: 0,
      access_level_area: 0,
      ai_guild_area: 1
    },
    {
      name: "10557",
      reference: 10557,
      xpos: 37,
      ypos: 9,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 0,
      ai_guild_area: 1
    },
    {
      name: "10689",
      reference: 10689,
      xpos: 39,
      ypos: 11,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 1,
      ai_guild_area: 1
    },
    {
      name: "10616",
      reference: 10616,
      xpos: 31,
      ypos: 10,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 0,
      ai_guild_area: 0
    },
    {
      name: "10674",
      reference: 10674,
      xpos: 24,
      ypos: 11,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 0,
      ai_guild_area: 0
    },
    {
      name: "Neutral_Velic_Gate_1",
      reference: 10672,
      xpos: 22,
      ypos: 11,
      type: PointType.GATE,
      galaxy_index: 0,
      access_level_area: 0,
      ai_guild_area: 0
    },
    {
      name: "10997",
      reference: 10997,
      xpos: 22,
      ypos: 16,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 4,
      ai_guild_area: 2
    },
    {
      name: "10696",
      reference: 10696,
      xpos: 46,
      ypos: 11,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 0,
      ai_guild_area: 1
    },
    {
      name: "10823",
      reference: 10823,
      xpos: 43,
      ypos: 13,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 0,
      ai_guild_area: 1
    },
    {
      name: "10698",
      reference: 10698,
      xpos: 48,
      ypos: 11,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 0,
      ai_guild_area: 1
    },
    {
      name: "10765",
      reference: 10765,
      xpos: 50,
      ypos: 12,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 0,
      ai_guild_area: 1
    },
    {
      name: "Tyros",
      reference: 10895,
      xpos: 50,
      ypos: 14,
      type: PointType.PLANET,
      galaxy_index: 0,
      access_level_area: 0,
      ai_guild_area: 3
    },
    {
      name: "10897",
      reference: 10897,
      xpos: 52,
      ypos: 14,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 0,
      ai_guild_area: 3
    },
    {
      name: "10899",
      reference: 10899,
      xpos: 54,
      ypos: 14,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 0,
      ai_guild_area: 3
    },
    {
      name: "10902",
      reference: 10902,
      xpos: 57,
      ypos: 14,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 0,
      ai_guild_area: 3
    },
    {
      name: "Neutral_Gen _Gate_3",
      reference: 10904,
      xpos: 59,
      ypos: 14,
      type: PointType.GATE,
      galaxy_index: 0,
      access_level_area: 0,
      ai_guild_area: 3
    },
    {
      name: "Endy_Station",
      reference: 11123,
      xpos: 18,
      ypos: 18,
      type: PointType.STATION,
      galaxy_index: 0,
      access_level_area: 4,
      ai_guild_area: 2
    },
    {
      name: "10935",
      reference: 10935,
      xpos: 25,
      ypos: 15,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 1,
      ai_guild_area: 2
    },
    {
      name: "11384",
      reference: 11384,
      xpos: 19,
      ypos: 22,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 4,
      ai_guild_area: 2
    },
    {
      name: "10938",
      reference: 10938,
      xpos: 28,
      ypos: 15,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 1,
      ai_guild_area: 2
    },
    {
      name: "10941",
      reference: 10941,
      xpos: 31,
      ypos: 15,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 1,
      ai_guild_area: 2
    },
    {
      name: "10944",
      reference: 10944,
      xpos: 34,
      ypos: 15,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 1,
      ai_guild_area: 3
    },
    {
      name: "10947",
      reference: 10947,
      xpos: 37,
      ypos: 15,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 1,
      ai_guild_area: 3
    },
    {
      name: "10949",
      reference: 10949,
      xpos: 39,
      ypos: 15,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 1,
      ai_guild_area: 3
    },
    {
      name: "10951",
      reference: 10951,
      xpos: 41,
      ypos: 15,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 2,
      ai_guild_area: 3
    },
    {
      name: "11209",
      reference: 11209,
      xpos: 39,
      ypos: 19,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 2,
      ai_guild_area: 3
    },
    {
      name: "Seejen",
      reference: 10953,
      xpos: 43,
      ypos: 15,
      type: PointType.PLANET,
      galaxy_index: 0,
      access_level_area: 2,
      ai_guild_area: 3
    },
    {
      name: "11026",
      reference: 11026,
      xpos: 51,
      ypos: 16,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 0,
      ai_guild_area: 3
    },
    {
      name: "11087",
      reference: 11087,
      xpos: 47,
      ypos: 17,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 1,
      ai_guild_area: 3
    },
    {
      name: "11222",
      reference: 11222,
      xpos: 52,
      ypos: 19,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 2,
      ai_guild_area: 3
    },
    {
      name: "11214",
      reference: 11214,
      xpos: 44,
      ypos: 19,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 2,
      ai_guild_area: 3
    },
    {
      name: "11285",
      reference: 11285,
      xpos: 50,
      ypos: 20,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 2,
      ai_guild_area: 3
    },
    {
      name: "11283",
      reference: 11283,
      xpos: 48,
      ypos: 20,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 2,
      ai_guild_area: 3
    },
    {
      name: "11207",
      reference: 11207,
      xpos: 37,
      ypos: 19,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 2,
      ai_guild_area: 3
    },
    {
      name: "11277",
      reference: 11277,
      xpos: 42,
      ypos: 20,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 2,
      ai_guild_area: 3
    },
    {
      name: "11204",
      reference: 11204,
      xpos: 34,
      ypos: 19,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 2,
      ai_guild_area: 3
    },
    {
      name: "11336",
      reference: 11336,
      xpos: 36,
      ypos: 21,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 2,
      ai_guild_area: 3
    },
    {
      name: "11201",
      reference: 11201,
      xpos: 31,
      ypos: 19,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 3,
      ai_guild_area: 2
    },
    {
      name: "11197",
      reference: 11197,
      xpos: 27,
      ypos: 19,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 4,
      ai_guild_area: 2
    },
    {
      name: "11502",
      reference: 11502,
      xpos: 7,
      ypos: 24,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 6,
      ai_guild_area: 2
    },
    {
      name: "11247",
      reference: 11247,
      xpos: 12,
      ypos: 20,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 6,
      ai_guild_area: 2
    },
    {
      name: "11376",
      reference: 11376,
      xpos: 11,
      ypos: 22,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 6,
      ai_guild_area: 2
    },
    {
      name: "11249",
      reference: 11249,
      xpos: 14,
      ypos: 20,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 6,
      ai_guild_area: 2
    },
    {
      name: "11505",
      reference: 11505,
      xpos: 10,
      ypos: 24,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 6,
      ai_guild_area: 2
    },
    {
      name: "11698",
      reference: 11698,
      xpos: 8,
      ypos: 27,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 6,
      ai_guild_area: 2
    },
    {
      name: "11509",
      reference: 11509,
      xpos: 14,
      ypos: 24,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 6,
      ai_guild_area: 2
    },
    {
      name: "11316",
      reference: 11316,
      xpos: 16,
      ypos: 21,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 6,
      ai_guild_area: 2
    },
    {
      name: "11701",
      reference: 11701,
      xpos: 11,
      ypos: 27,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 6,
      ai_guild_area: 2
    },
    {
      name: "11704",
      reference: 11704,
      xpos: 14,
      ypos: 27,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 6,
      ai_guild_area: 2
    },
    {
      name: "11387",
      reference: 11387,
      xpos: 22,
      ypos: 22,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 4,
      ai_guild_area: 2
    },
    {
      name: "11446",
      reference: 11446,
      xpos: 16,
      ypos: 23,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 6,
      ai_guild_area: 2
    },
    {
      name: "11390",
      reference: 11390,
      xpos: 25,
      ypos: 22,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 3,
      ai_guild_area: 2
    },
    {
      name: "11466",
      reference: 11466,
      xpos: 36,
      ypos: 23,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 2,
      ai_guild_area: 3
    },
    {
      name: "Jen_Cando",
      reference: 11661,
      xpos: 36,
      ypos: 26,
      type: PointType.PLANET,
      galaxy_index: 0,
      access_level_area: 2,
      ai_guild_area: 3
    },
    {
      name: "11468",
      reference: 11468,
      xpos: 38,
      ypos: 23,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 2,
      ai_guild_area: 3
    },
    {
      name: "11406",
      reference: 11406,
      xpos: 41,
      ypos: 22,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 2,
      ai_guild_area: 3
    },
    {
      name: "11344",
      reference: 11344,
      xpos: 44,
      ypos: 21,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 2,
      ai_guild_area: 3
    },
    {
      name: "11474",
      reference: 11474,
      xpos: 44,
      ypos: 23,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 2,
      ai_guild_area: 3
    },
    {
      name: "11604",
      reference: 11604,
      xpos: 44,
      ypos: 25,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 2,
      ai_guild_area: 3
    },
    {
      name: "Jen_Kayle",
      reference: 11864,
      xpos: 44,
      ypos: 29,
      type: PointType.PLANET,
      galaxy_index: 0,
      access_level_area: 5,
      ai_guild_area: 5
    },
    {
      name: "11602",
      reference: 11602,
      xpos: 42,
      ypos: 25,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 2,
      ai_guild_area: 3
    },
    {
      name: "11665",
      reference: 11665,
      xpos: 40,
      ypos: 26,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 2,
      ai_guild_area: 3
    },
    {
      name: "11477",
      reference: 11477,
      xpos: 47,
      ypos: 23,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 2,
      ai_guild_area: 3
    },
    {
      name: "11607",
      reference: 11607,
      xpos: 47,
      ypos: 25,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 2,
      ai_guild_area: 3
    },
    {
      name: "11417",
      reference: 11417,
      xpos: 52,
      ypos: 22,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 2,
      ai_guild_area: 3
    },
    {
      name: "11354",
      reference: 11354,
      xpos: 54,
      ypos: 21,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 4,
      ai_guild_area: 3
    },
    {
      name: "11742",
      reference: 11742,
      xpos: 52,
      ypos: 27,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 2,
      ai_guild_area: 3
    },
    {
      name: "11356",
      reference: 11356,
      xpos: 56,
      ypos: 21,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 4,
      ai_guild_area: 3
    },
    {
      name: "11487",
      reference: 11487,
      xpos: 57,
      ypos: 23,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 4,
      ai_guild_area: 3
    },
    {
      name: "Hy_Syng",
      reference: 11615,
      xpos: 55,
      ypos: 25,
      type: PointType.PLANET,
      galaxy_index: 0,
      access_level_area: 4,
      ai_guild_area: 3
    },
    {
      name: "11619",
      reference: 11619,
      xpos: 59,
      ypos: 25,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 4,
      ai_guild_area: 3
    },
    {
      name: "11683",
      reference: 11683,
      xpos: 58,
      ypos: 26,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 4,
      ai_guild_area: 3
    },
    {
      name: "11878",
      reference: 11878,
      xpos: 58,
      ypos: 29,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 4,
      ai_guild_area: 5
    },
    {
      name: "11746",
      reference: 11746,
      xpos: 56,
      ypos: 27,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 4,
      ai_guild_area: 3
    },
    {
      name: "12008",
      reference: 12008,
      xpos: 58,
      ypos: 31,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 4,
      ai_guild_area: 5
    },
    {
      name: "11740",
      reference: 11740,
      xpos: 50,
      ypos: 27,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 2,
      ai_guild_area: 3
    },
    {
      name: "11873",
      reference: 11873,
      xpos: 53,
      ypos: 29,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 4,
      ai_guild_area: 5
    },
    {
      name: "12006",
      reference: 12006,
      xpos: 56,
      ypos: 31,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 4,
      ai_guild_area: 5
    },
    {
      name: "12004",
      reference: 12004,
      xpos: 54,
      ypos: 31,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 4,
      ai_guild_area: 5
    },
    {
      name: "12002",
      reference: 12002,
      xpos: 52,
      ypos: 31,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 4,
      ai_guild_area: 5
    },
    {
      name: "Naykon",
      reference: 12130,
      xpos: 50,
      ypos: 33,
      type: PointType.PLANET,
      galaxy_index: 0,
      access_level_area: 4,
      ai_guild_area: 5
    },
    {
      name: "Crontas",
      reference: 11737,
      xpos: 47,
      ypos: 27,
      type: PointType.PLANET,
      galaxy_index: 0,
      access_level_area: 2,
      ai_guild_area: 3
    },
    {
      name: "12122",
      reference: 12122,
      xpos: 42,
      ypos: 33,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 5,
      ai_guild_area: 5
    },
    {
      name: "11728",
      reference: 11728,
      xpos: 38,
      ypos: 27,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 2,
      ai_guild_area: 3
    },
    {
      name: "11791",
      reference: 11791,
      xpos: 36,
      ypos: 28,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 5,
      ai_guild_area: 5
    },
    {
      name: "11924",
      reference: 11924,
      xpos: 39,
      ypos: 30,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 5,
      ai_guild_area: 5
    },
    {
      name: "11921",
      reference: 11921,
      xpos: 36,
      ypos: 30,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 5,
      ai_guild_area: 5
    },
    {
      name: "12055",
      reference: 12055,
      xpos: 40,
      ypos: 32,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 5,
      ai_guild_area: 5
    },
    {
      name: "12117",
      reference: 12117,
      xpos: 37,
      ypos: 33,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 5,
      ai_guild_area: 5
    },
    {
      name: "11722",
      reference: 11722,
      xpos: 32,
      ypos: 27,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 3,
      ai_guild_area: 3
    },
    {
      name: "11656",
      reference: 11656,
      xpos: 31,
      ypos: 26,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 3,
      ai_guild_area: 2
    },
    {
      name: "11786",
      reference: 11786,
      xpos: 31,
      ypos: 28,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 3,
      ai_guild_area: 4
    },
    {
      name: "11719",
      reference: 11719,
      xpos: 29,
      ypos: 27,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 3,
      ai_guild_area: 2
    },
    {
      name: "11852",
      reference: 11852,
      xpos: 32,
      ypos: 29,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 8,
      ai_guild_area: 5
    },
    {
      name: "11783",
      reference: 11783,
      xpos: 28,
      ypos: 28,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 3,
      ai_guild_area: 4
    },
    {
      name: "11849",
      reference: 11849,
      xpos: 29,
      ypos: 29,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 3,
      ai_guild_area: 4
    },
    {
      name: "11846",
      reference: 11846,
      xpos: 26,
      ypos: 29,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 3,
      ai_guild_area: 4
    },
    {
      name: "11913",
      reference: 11913,
      xpos: 28,
      ypos: 30,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 3,
      ai_guild_area: 4
    },
    {
      name: "11916",
      reference: 11916,
      xpos: 31,
      ypos: 30,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 8,
      ai_guild_area: 4
    },
    {
      name: "Corridor_Station",
      reference: 11979,
      xpos: 29,
      ypos: 31,
      type: PointType.STATION,
      galaxy_index: 0,
      access_level_area: 3,
      ai_guild_area: 4
    },
    {
      name: "11910",
      reference: 11910,
      xpos: 25,
      ypos: 30,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 3,
      ai_guild_area: 4
    },
    {
      name: "12043",
      reference: 12043,
      xpos: 28,
      ypos: 32,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 3,
      ai_guild_area: 4
    },
    {
      name: "12106",
      reference: 12106,
      xpos: 26,
      ypos: 33,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 3,
      ai_guild_area: 4
    },
    {
      name: "11976",
      reference: 11976,
      xpos: 26,
      ypos: 31,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 3,
      ai_guild_area: 4
    },
    {
      name: "11827",
      reference: 11827,
      xpos: 7,
      ypos: 29,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 6,
      ai_guild_area: 4
    },
    {
      name: "11836",
      reference: 11836,
      xpos: 16,
      ypos: 29,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 6,
      ai_guild_area: 4
    },
    {
      name: "11895",
      reference: 11895,
      xpos: 10,
      ypos: 30,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 6,
      ai_guild_area: 4
    },
    {
      name: "11904",
      reference: 11904,
      xpos: 19,
      ypos: 30,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 6,
      ai_guild_area: 4
    },
    {
      name: "12035",
      reference: 12035,
      xpos: 20,
      ypos: 32,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 8,
      ai_guild_area: 4
    },
    {
      name: "12032",
      reference: 12032,
      xpos: 17,
      ypos: 32,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 8,
      ai_guild_area: 4
    },
    {
      name: "12103",
      reference: 12103,
      xpos: 23,
      ypos: 33,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 3,
      ai_guild_area: 4
    },
    {
      name: "11900",
      reference: 11900,
      xpos: 15,
      ypos: 30,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 6,
      ai_guild_area: 4
    },
    {
      name: "12163",
      reference: 12163,
      xpos: 18,
      ypos: 34,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 8,
      ai_guild_area: 4
    },
    {
      name: "11897",
      reference: 11897,
      xpos: 12,
      ypos: 30,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 6,
      ai_guild_area: 4
    },
    {
      name: "12090",
      reference: 12090,
      xpos: 10,
      ypos: 33,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 6,
      ai_guild_area: 4
    },
    {
      name: "Dysillica",
      reference: 11956,
      xpos: 6,
      ypos: 31,
      type: PointType.PLANET,
      galaxy_index: 0,
      access_level_area: 6,
      ai_guild_area: 4
    },
    {
      name: "12024",
      reference: 12024,
      xpos: 9,
      ypos: 32,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 6,
      ai_guild_area: 4
    },
    {
      name: "12217",
      reference: 12217,
      xpos: 7,
      ypos: 35,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 8,
      ai_guild_area: 4
    },
    {
      name: "12347",
      reference: 12347,
      xpos: 7,
      ypos: 37,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 8,
      ai_guild_area: 4
    },
    {
      name: "12477",
      reference: 12477,
      xpos: 7,
      ypos: 39,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 8,
      ai_guild_area: 4
    },
    {
      name: "12607",
      reference: 12607,
      xpos: 7,
      ypos: 41,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 8,
      ai_guild_area: 4
    },
    {
      name: "12736",
      reference: 12736,
      xpos: 6,
      ypos: 43,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 8,
      ai_guild_area: 6
    },
    {
      name: "12420",
      reference: 12420,
      xpos: 15,
      ypos: 38,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 8,
      ai_guild_area: 4
    },
    {
      name: "12548",
      reference: 12548,
      xpos: 13,
      ypos: 40,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 8,
      ai_guild_area: 4
    },
    {
      name: "12676",
      reference: 12676,
      xpos: 11,
      ypos: 42,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 8,
      ai_guild_area: 6
    },
    {
      name: "12294",
      reference: 12294,
      xpos: 19,
      ypos: 36,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 8,
      ai_guild_area: 4
    },
    {
      name: "12424",
      reference: 12424,
      xpos: 19,
      ypos: 38,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 8,
      ai_guild_area: 4
    },
    {
      name: "12617",
      reference: 12617,
      xpos: 17,
      ypos: 41,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 8,
      ai_guild_area: 4
    },
    {
      name: "12745",
      reference: 12745,
      xpos: 15,
      ypos: 43,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 8,
      ai_guild_area: 6
    },
    {
      name: "Helliathin",
      reference: 12363,
      xpos: 23,
      ypos: 37,
      type: PointType.PLANET,
      galaxy_index: 0,
      access_level_area: 3,
      ai_guild_area: 4
    },
    {
      name: "12170",
      reference: 12170,
      xpos: 25,
      ypos: 34,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 3,
      ai_guild_area: 4
    },
    {
      name: "12249",
      reference: 12249,
      xpos: 39,
      ypos: 35,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 5,
      ai_guild_area: 5
    },
    {
      name: "12312",
      reference: 12312,
      xpos: 37,
      ypos: 36,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 5,
      ai_guild_area: 5
    },
    {
      name: "12180",
      reference: 12180,
      xpos: 35,
      ypos: 34,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 5,
      ai_guild_area: 5
    },
    {
      name: "12178",
      reference: 12178,
      xpos: 33,
      ypos: 34,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 8,
      ai_guild_area: 5
    },
    {
      name: "12240",
      reference: 12240,
      xpos: 30,
      ypos: 35,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 8,
      ai_guild_area: 4
    },
    {
      name: "12368",
      reference: 12368,
      xpos: 28,
      ypos: 37,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 8,
      ai_guild_area: 4
    },
    {
      name: "12564",
      reference: 12564,
      xpos: 29,
      ypos: 40,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 8,
      ai_guild_area: 4
    },
    {
      name: "12759",
      reference: 12759,
      xpos: 29,
      ypos: 43,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 8,
      ai_guild_area: 6
    },
    {
      name: "12251",
      reference: 12251,
      xpos: 41,
      ypos: 35,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 5,
      ai_guild_area: 5
    },
    {
      name: "12380",
      reference: 12380,
      xpos: 40,
      ypos: 37,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 5,
      ai_guild_area: 5
    },
    {
      name: "12508",
      reference: 12508,
      xpos: 38,
      ypos: 39,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 5,
      ai_guild_area: 5
    },
    {
      name: "12506",
      reference: 12506,
      xpos: 36,
      ypos: 39,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 5,
      ai_guild_area: 5
    },
    {
      name: "DayNow",
      reference: 12636,
      xpos: 36,
      ypos: 41,
      type: PointType.PLANET,
      galaxy_index: 0,
      access_level_area: 5,
      ai_guild_area: 5
    },
    {
      name: "12440",
      reference: 12440,
      xpos: 35,
      ypos: 38,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 5,
      ai_guild_area: 5
    },
    {
      name: "12322",
      reference: 12322,
      xpos: 47,
      ypos: 36,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 7,
      ai_guild_area: 5
    },
    {
      name: "12385",
      reference: 12385,
      xpos: 45,
      ypos: 37,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 7,
      ai_guild_area: 5
    },
    {
      name: "12449",
      reference: 12449,
      xpos: 44,
      ypos: 38,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 7,
      ai_guild_area: 5
    },
    {
      name: "12391",
      reference: 12391,
      xpos: 51,
      ypos: 37,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 7,
      ai_guild_area: 5
    },
    {
      name: "12512",
      reference: 12512,
      xpos: 42,
      ypos: 39,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 7,
      ai_guild_area: 5
    },
    {
      name: "12576",
      reference: 12576,
      xpos: 41,
      ypos: 40,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 7,
      ai_guild_area: 5
    },
    {
      name: "12639",
      reference: 12639,
      xpos: 39,
      ypos: 41,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 5,
      ai_guild_area: 5
    },
    {
      name: "12771",
      reference: 12771,
      xpos: 41,
      ypos: 43,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 8,
      ai_guild_area: 7
    },
    {
      name: "12455",
      reference: 12455,
      xpos: 50,
      ypos: 38,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 7,
      ai_guild_area: 5
    },
    {
      name: "12452",
      reference: 12452,
      xpos: 47,
      ypos: 38,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 7,
      ai_guild_area: 5
    },
    {
      name: "12715",
      reference: 12715,
      xpos: 50,
      ypos: 42,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 7,
      ai_guild_area: 7
    },
    {
      name: "Tacitus_Station",
      reference: 12584,
      xpos: 49,
      ypos: 40,
      type: PointType.STATION,
      galaxy_index: 0,
      access_level_area: 7,
      ai_guild_area: 5
    },
    {
      name: "12646",
      reference: 12646,
      xpos: 46,
      ypos: 41,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 7,
      ai_guild_area: 5
    },
    {
      name: "12710",
      reference: 12710,
      xpos: 45,
      ypos: 42,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 7,
      ai_guild_area: 7
    },
    {
      name: "12781",
      reference: 12781,
      xpos: 51,
      ypos: 43,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 7,
      ai_guild_area: 7
    },
    {
      name: "12135",
      reference: 12135,
      xpos: 55,
      ypos: 33,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 4,
      ai_guild_area: 5
    },
    {
      name: "12138",
      reference: 12138,
      xpos: 58,
      ypos: 33,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 4,
      ai_guild_area: 5
    },
    {
      name: "12269",
      reference: 12269,
      xpos: 59,
      ypos: 35,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 7,
      ai_guild_area: 5
    },
    {
      name: "12267",
      reference: 12267,
      xpos: 57,
      ypos: 35,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 7,
      ai_guild_area: 5
    },
    {
      name: "12265",
      reference: 12265,
      xpos: 55,
      ypos: 35,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 7,
      ai_guild_area: 5
    },
    {
      name: "12397",
      reference: 12397,
      xpos: 57,
      ypos: 37,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 7,
      ai_guild_area: 5
    },
    {
      name: "12530",
      reference: 12530,
      xpos: 60,
      ypos: 39,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 7,
      ai_guild_area: 5
    },
    {
      name: "12527",
      reference: 12527,
      xpos: 57,
      ypos: 39,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 7,
      ai_guild_area: 5
    },
    {
      name: "12658",
      reference: 12658,
      xpos: 58,
      ypos: 41,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 7,
      ai_guild_area: 5
    },
    {
      name: "12655",
      reference: 12655,
      xpos: 55,
      ypos: 41,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 7,
      ai_guild_area: 5
    },
    {
      name: "12786",
      reference: 12786,
      xpos: 56,
      ypos: 43,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 7,
      ai_guild_area: 7
    },
    {
      name: "12804",
      reference: 12804,
      xpos: 9,
      ypos: 44,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 8,
      ai_guild_area: 6
    },
    {
      name: "12873",
      reference: 12873,
      xpos: 13,
      ypos: 45,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 8,
      ai_guild_area: 6
    },
    {
      name: "12932",
      reference: 12932,
      xpos: 7,
      ypos: 46,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 8,
      ai_guild_area: 6
    },
    {
      name: "13067",
      reference: 13067,
      xpos: 12,
      ypos: 48,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 8,
      ai_guild_area: 6
    },
    {
      name: "13127",
      reference: 13127,
      xpos: 7,
      ypos: 49,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 8,
      ai_guild_area: 6
    },
    {
      name: "13197",
      reference: 13197,
      xpos: 12,
      ypos: 50,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 9,
      ai_guild_area: 6
    },
    {
      name: "13257",
      reference: 13257,
      xpos: 7,
      ypos: 51,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 8,
      ai_guild_area: 6
    },
    {
      name: "13327",
      reference: 13327,
      xpos: 12,
      ypos: 52,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 9,
      ai_guild_area: 6
    },
    {
      name: "13265",
      reference: 13265,
      xpos: 15,
      ypos: 51,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 9,
      ai_guild_area: 6
    },
    {
      name: "13387",
      reference: 13387,
      xpos: 7,
      ypos: 53,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 9,
      ai_guild_area: 6
    },
    {
      name: "12891",
      reference: 12891,
      xpos: 31,
      ypos: 45,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 8,
      ai_guild_area: 6
    },
    {
      name: "13023",
      reference: 13023,
      xpos: 33,
      ypos: 47,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 8,
      ai_guild_area: 7
    },
    {
      name: "13026",
      reference: 13026,
      xpos: 36,
      ypos: 47,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 8,
      ai_guild_area: 7
    },
    {
      name: "13095",
      reference: 13095,
      xpos: 40,
      ypos: 48,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 8,
      ai_guild_area: 7
    },
    {
      name: "13162",
      reference: 13162,
      xpos: 42,
      ypos: 49,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 8,
      ai_guild_area: 7
    },
    {
      name: "13165",
      reference: 13165,
      xpos: 45,
      ypos: 49,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 8,
      ai_guild_area: 7
    },
    {
      name: "13168",
      reference: 13168,
      xpos: 48,
      ypos: 49,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 8,
      ai_guild_area: 7
    },
    {
      name: "13296",
      reference: 13296,
      xpos: 46,
      ypos: 51,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 8,
      ai_guild_area: 7
    },
    {
      name: "13555",
      reference: 13555,
      xpos: 45,
      ypos: 55,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 8,
      ai_guild_area: 7
    },
    {
      name: "12838",
      reference: 12838,
      xpos: 43,
      ypos: 44,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 7,
      ai_guild_area: 7
    },
    {
      name: "12904",
      reference: 12904,
      xpos: 44,
      ypos: 45,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 7,
      ai_guild_area: 7
    },
    {
      name: "12971",
      reference: 12971,
      xpos: 46,
      ypos: 46,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 7,
      ai_guild_area: 7
    },
    {
      name: "13037",
      reference: 13037,
      xpos: 47,
      ypos: 47,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 7,
      ai_guild_area: 7
    },
    {
      name: "12784",
      reference: 12784,
      xpos: 54,
      ypos: 43,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 7,
      ai_guild_area: 7
    },
    {
      name: "12912",
      reference: 12912,
      xpos: 52,
      ypos: 45,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 7,
      ai_guild_area: 7
    },
    {
      name: "12975",
      reference: 12975,
      xpos: 50,
      ypos: 46,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 7,
      ai_guild_area: 7
    },
    {
      name: "12914",
      reference: 12914,
      xpos: 54,
      ypos: 45,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 7,
      ai_guild_area: 7
    },
    {
      name: "13107",
      reference: 13107,
      xpos: 52,
      ypos: 48,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 7,
      ai_guild_area: 7
    },
    {
      name: "13517",
      reference: 13517,
      xpos: 7,
      ypos: 55,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 9,
      ai_guild_area: 6
    },
    {
      name: "13649",
      reference: 13649,
      xpos: 9,
      ypos: 57,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 9,
      ai_guild_area: 8
    },
    {
      name: "13457",
      reference: 13457,
      xpos: 12,
      ypos: 54,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 9,
      ai_guild_area: 6
    },
    {
      name: "13781",
      reference: 13781,
      xpos: 11,
      ypos: 59,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 9,
      ai_guild_area: 8
    },
    {
      name: "13589",
      reference: 13589,
      xpos: 14,
      ypos: 56,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 9,
      ai_guild_area: 8
    },
    {
      name: "13656",
      reference: 13656,
      xpos: 16,
      ypos: 57,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 9,
      ai_guild_area: 8
    },
    {
      name: "13719",
      reference: 13719,
      xpos: 14,
      ypos: 58,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 9,
      ai_guild_area: 8
    },
    {
      name: "13528",
      reference: 13528,
      xpos: 18,
      ypos: 55,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 9,
      ai_guild_area: 6
    },
    {
      name: "13790",
      reference: 13790,
      xpos: 20,
      ypos: 59,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 9,
      ai_guild_area: 8
    },
    {
      name: "Reno_Brin",
      reference: 13914,
      xpos: 14,
      ypos: 61,
      type: PointType.PLANET,
      galaxy_index: 0,
      access_level_area: 9,
      ai_guild_area: 8
    },
    {
      name: "13530",
      reference: 13530,
      xpos: 20,
      ypos: 55,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 9,
      ai_guild_area: 6
    },
    {
      name: "13535",
      reference: 13535,
      xpos: 25,
      ypos: 55,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 9,
      ai_guild_area: 6
    },
    {
      name: "13539",
      reference: 13539,
      xpos: 29,
      ypos: 55,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 9,
      ai_guild_area: 6
    },
    {
      name: "13543",
      reference: 13543,
      xpos: 33,
      ypos: 55,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 8,
      ai_guild_area: 7
    },
    {
      name: "13793",
      reference: 13793,
      xpos: 23,
      ypos: 59,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 9,
      ai_guild_area: 8
    },
    {
      name: "13796",
      reference: 13796,
      xpos: 26,
      ypos: 59,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 9,
      ai_guild_area: 8
    },
    {
      name: "13799",
      reference: 13799,
      xpos: 29,
      ypos: 59,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 9,
      ai_guild_area: 8
    },
    {
      name: "13802",
      reference: 13802,
      xpos: 32,
      ypos: 59,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 9,
      ai_guild_area: 9
    },
    {
      name: "13742",
      reference: 13742,
      xpos: 37,
      ypos: 58,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 8,
      ai_guild_area: 9
    },
    {
      name: "13681",
      reference: 13681,
      xpos: 41,
      ypos: 57,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 8,
      ai_guild_area: 9
    },
    {
      name: "13418",
      reference: 13418,
      xpos: 38,
      ypos: 53,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 8,
      ai_guild_area: 7
    },
    {
      name: "Kaydarin",
      reference: 13423,
      xpos: 43,
      ypos: 53,
      type: PointType.PLANET,
      galaxy_index: 0,
      access_level_area: 8,
      ai_guild_area: 7
    },
    {
      name: "Neutral_Velic_Gate_2",
      reference: 11241,
      xpos: 6,
      ypos: 20,
      type: PointType.GATE,
      galaxy_index: 0,
      access_level_area: 6,
      ai_guild_area: 2
    },
    {
      name: "Neutral_Velic_Gate_3",
      reference: 11773,
      xpos: 18,
      ypos: 28,
      type: PointType.GATE,
      galaxy_index: 0,
      access_level_area: 6,
      ai_guild_area: 4
    },
    {
      name: "Velic_Cardan",
      reference: 20025,
      xpos: 5,
      ypos: 2,
      type: PointType.PLANET,
      galaxy_index: 1,
      access_level_area: 0,
      ai_guild_area: 0
    },
    {
      name: "Velic_Grindow",
      reference: 20063,
      xpos: 3,
      ypos: 6,
      type: PointType.PLANET,
      galaxy_index: 1,
      access_level_area: 0,
      ai_guild_area: 0
    },
    {
      name: "Velic_Vel",
      reference: 20067,
      xpos: 7,
      ypos: 6,
      type: PointType.PLANET,
      galaxy_index: 1,
      access_level_area: 0,
      ai_guild_area: 0
    },
    {
      name: "Velic_Neutral_Gate_1",
      reference: 20042,
      xpos: 2,
      ypos: 4,
      type: PointType.GATE,
      galaxy_index: 1,
      access_level_area: 0,
      ai_guild_area: 0
    },
    {
      name: "Velic_Neutral_Gate_2",
      reference: 20047,
      xpos: 7,
      ypos: 4,
      type: PointType.GATE,
      galaxy_index: 1,
      access_level_area: 0,
      ai_guild_area: 0
    },
    {
      name: "Velic_Neutral_Gate_3",
      reference: 20075,
      xpos: 5,
      ypos: 7,
      type: PointType.GATE,
      galaxy_index: 1,
      access_level_area: 0,
      ai_guild_area: 0
    },
    {
      name: "Gen_Grayl",
      reference: 30000,
      xpos: 0,
      ypos: 0,
      type: PointType.PLANET,
      galaxy_index: 2,
      access_level_area: 0,
      ai_guild_area: 0
    },
    {
      name: "Gen_Irium",
      reference: 30001,
      xpos: 0,
      ypos: 0,
      type: PointType.PLANET,
      galaxy_index: 2,
      access_level_area: 0,
      ai_guild_area: 0
    },
    {
      name: "Gen_Pelein",
      reference: 30002,
      xpos: 0,
      ypos: 0,
      type: PointType.PLANET,
      galaxy_index: 2,
      access_level_area: 0,
      ai_guild_area: 0
    },
    {
      name: "Gen_Neutral_Gate_1",
      reference: 30003,
      xpos: 0,
      ypos: 0,
      type: PointType.GATE,
      galaxy_index: 2,
      access_level_area: 0,
      ai_guild_area: 0
    },
    {
      name: "Gen_Neutral_Gate_2",
      reference: 30004,
      xpos: 0,
      ypos: 0,
      type: PointType.GATE,
      galaxy_index: 2,
      access_level_area: 0,
      ai_guild_area: 0
    },
    {
      name: "Gen_Neutral_Gate_3",
      reference: 30005,
      xpos: 0,
      ypos: 0,
      type: PointType.GATE,
      galaxy_index: 2,
      access_level_area: 0,
      ai_guild_area: 0
    },
    {
      name: "10304",
      reference: 10304,
      xpos: 44,
      ypos: 5,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 0,
      ai_guild_area: 1
    },
    {
      name: "10308",
      reference: 10308,
      xpos: 48,
      ypos: 5,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 0,
      ai_guild_area: 1
    },
    {
      name: "11545",
      reference: 11545,
      xpos: 50,
      ypos: 24,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 2,
      ai_guild_area: 3
    },
    {
      name: "12040",
      reference: 12040,
      xpos: 25,
      ypos: 32,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 3,
      ai_guild_area: 4
    },
    {
      name: "12166",
      reference: 12166,
      xpos: 21,
      ypos: 34,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 8,
      ai_guild_area: 4
    },
    {
      name: "12133",
      reference: 12133,
      xpos: 53,
      ypos: 33,
      type: PointType.POINT,
      galaxy_index: 0,
      access_level_area: 4,
      ai_guild_area: 5
    }
  ];

  await prisma.points.createMany({
    data: points,
  });

  console.log('Points seeded successfully');
}