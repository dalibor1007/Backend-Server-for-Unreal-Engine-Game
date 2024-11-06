import { PrismaClient } from '@prisma/client';

export async function seedGuilds(prisma: PrismaClient) {
  const guildData = [
    {
      "Name": "Stupid",
      "id": 0,
      "guild_name": "Stupid",
      "path_points_id": [
        10567
      ],
      "damage_multiplier": 0.5,
      "resistance_multiplier": 1,
      "asteroid_is_enemy": true,
      "hunting_time": 120,
      "reputation": 50,
      "ai_players": [
        {
          "id": 1,
          "jump_delay": 30,
          "respawn_delay": 30,
          "reputation_change": 1,
          "affiliation_change": 1,
          "money_multiplier": 1,
          "damage_multiplier": 1,
          "resistance_multiplier": 1,
          "experience": 1,
          "ai_name": "Rick",
          "equiped_ship_id": 101,
          "equiped_skin_id": -1,
          "equiped_guns": [
            109
          ],
          "equiped_miscs": [],
          "loot_boxes": []
        },
        {
          "id": 2,
          "jump_delay": 30,
          "respawn_delay": 30,
          "reputation_change": 1,
          "affiliation_change": 1,
          "money_multiplier": 1,
          "damage_multiplier": 1,
          "resistance_multiplier": 1,
          "experience": 1,
          "ai_name": "SuperAlgerd",
          "equiped_ship_id": 101,
          "equiped_skin_id": -1,
          "equiped_guns": [
            109
          ],
          "equiped_miscs": [],
          "loot_boxes": []
        },
        {
          "id": 3,
          "jump_delay": 30,
          "respawn_delay": 30,
          "reputation_change": 1,
          "affiliation_change": 1,
          "money_multiplier": 1,
          "damage_multiplier": 1,
          "resistance_multiplier": 1,
          "experience": 1,
          "ai_name": "DamagerXXL",
          "equiped_ship_id": 101,
          "equiped_skin_id": -1,
          "equiped_guns": [
            109
          ],
          "equiped_miscs": [],
          "loot_boxes": []
        },
        {
          "id": 4,
          "jump_delay": 30,
          "respawn_delay": 30,
          "reputation_change": 1,
          "affiliation_change": 1,
          "money_multiplier": 1,
          "damage_multiplier": 1,
          "resistance_multiplier": 1,
          "experience": 1,
          "ai_name": "Granada",
          "equiped_ship_id": 101,
          "equiped_skin_id": -1,
          "equiped_guns": [
            109
          ],
          "equiped_miscs": [],
          "loot_boxes": []
        },
        {
          "id": 5,
          "jump_delay": 30,
          "respawn_delay": 30,
          "reputation_change": 1,
          "affiliation_change": 1,
          "money_multiplier": 1,
          "damage_multiplier": 1,
          "resistance_multiplier": 1,
          "experience": 1,
          "ai_name": "Tartuga",
          "equiped_ship_id": 101,
          "equiped_skin_id": -1,
          "equiped_guns": [
            109
          ],
          "equiped_miscs": [],
          "loot_boxes": []
        },
        {
          "id": 6,
          "jump_delay": 90,
          "respawn_delay": 30,
          "reputation_change": 1,
          "affiliation_change": 1,
          "money_multiplier": 1,
          "damage_multiplier": 1,
          "resistance_multiplier": 1,
          "experience": 1,
          "ai_name": "SlowGuy",
          "equiped_ship_id": 101,
          "equiped_skin_id": -1,
          "equiped_guns": [
            109
          ],
          "equiped_miscs": [],
          "loot_boxes": []
        },
        {
          "id": 7,
          "jump_delay": 60,
          "respawn_delay": 30,
          "reputation_change": 1,
          "affiliation_change": 1,
          "money_multiplier": 1,
          "damage_multiplier": 1,
          "resistance_multiplier": 1,
          "experience": 1,
          "ai_name": "MiniSlowGuy",
          "equiped_ship_id": 101,
          "equiped_skin_id": -1,
          "equiped_guns": [
            109
          ],
          "equiped_miscs": [],
          "loot_boxes": []
        },
        {
          "id": 8,
          "jump_delay": 30,
          "respawn_delay": 30,
          "reputation_change": 1,
          "affiliation_change": 1,
          "money_multiplier": 1,
          "damage_multiplier": 1,
          "resistance_multiplier": 1,
          "experience": 1,
          "ai_name": "PapaCarlo",
          "equiped_ship_id": 101,
          "equiped_skin_id": -1,
          "equiped_guns": [
            109
          ],
          "equiped_miscs": [],
          "loot_boxes": []
        },
        {
          "id": 9,
          "jump_delay": 30,
          "respawn_delay": 30,
          "reputation_change": 1,
          "affiliation_change": 1,
          "money_multiplier": 1,
          "damage_multiplier": 1,
          "resistance_multiplier": 1,
          "experience": 1,
          "ai_name": "PomPorom",
          "equiped_ship_id": 101,
          "equiped_skin_id": -1,
          "equiped_guns": [
            109
          ],
          "equiped_miscs": [],
          "loot_boxes": []
        },
        {
          "id": 10,
          "jump_delay": 30,
          "respawn_delay": 30,
          "reputation_change": 1,
          "affiliation_change": 1,
          "money_multiplier": 1,
          "damage_multiplier": 1,
          "resistance_multiplier": 1,
          "experience": 1,
          "ai_name": "StupidBot",
          "equiped_ship_id": 101,
          "equiped_skin_id": -1,
          "equiped_guns": [
            109
          ],
          "equiped_miscs": [],
          "loot_boxes": []
        }
      ]
    },
    {
      "Name": "Smart",
      "id": 1,
      "guild_name": "Smart",
      "path_points_id": [
        10566
      ],
      "damage_multiplier": 1,
      "resistance_multiplier": 0.5,
      "asteroid_is_enemy": false,
      "hunting_time": 300,
      "reputation": 150,
      "ai_players": [{
          "id": 1,
          "jump_delay": 30,
          "respawn_delay": 30,
          "reputation_change": 1,
          "affiliation_change": 1,
          "money_multiplier": 1,
          "damage_multiplier": 1,
          "resistance_multiplier": 1,
          "experience": 1,
          "ai_name": "Mohandas_Gandhi",
          "equiped_ship_id": 301,
          "equiped_skin_id": -1,
          "equiped_guns": [
            109
          ],
          "equiped_miscs": [],
          "loot_boxes": []
        },
        {
          "id": 2,
          "jump_delay": 30,
          "respawn_delay": 30,
          "reputation_change": 1,
          "affiliation_change": 1,
          "money_multiplier": 1,
          "damage_multiplier": 1,
          "resistance_multiplier": 1,
          "experience": 1,
          "ai_name": "Justin_Roiland",
          "equiped_ship_id": 301,
          "equiped_skin_id": -1,
          "equiped_guns": [
            109
          ],
          "equiped_miscs": [],
          "loot_boxes": []
        },
        {
          "id": 3,
          "jump_delay": 30,
          "respawn_delay": 30,
          "reputation_change": 1,
          "affiliation_change": 1,
          "money_multiplier": 1,
          "damage_multiplier": 1,
          "resistance_multiplier": 1,
          "experience": 1,
          "ai_name": "Dan_Harmon",
          "equiped_ship_id": 301,
          "equiped_skin_id": -1,
          "equiped_guns": [
            109
          ],
          "equiped_miscs": [],
          "loot_boxes": []
        },
        {
          "id": 4,
          "jump_delay": 30,
          "respawn_delay": 30,
          "reputation_change": 1,
          "affiliation_change": 1,
          "money_multiplier": 1,
          "damage_multiplier": 1,
          "resistance_multiplier": 1,
          "experience": 1,
          "ai_name": "Elon_Musk",
          "equiped_ship_id": 301,
          "equiped_skin_id": -1,
          "equiped_guns": [
            109
          ],
          "equiped_miscs": [],
          "loot_boxes": []
        },
        {
          "id": 5,
          "jump_delay": 30,
          "respawn_delay": 30,
          "reputation_change": 1,
          "affiliation_change": 1,
          "money_multiplier": 1,
          "damage_multiplier": 1,
          "resistance_multiplier": 1,
          "experience": 1,
          "ai_name": "Stephen_Hawking",
          "equiped_ship_id": 301,
          "equiped_skin_id": -1,
          "equiped_guns": [
            109
          ],
          "equiped_miscs": [],
          "loot_boxes": []
        },
        {
          "id": 6,
          "jump_delay": 90,
          "respawn_delay": 30,
          "reputation_change": 1,
          "affiliation_change": 1,
          "money_multiplier": 1,
          "damage_multiplier": 1,
          "resistance_multiplier": 1,
          "experience": 1,
          "ai_name": "Bjarne_Stroustrup",
          "equiped_ship_id": 301,
          "equiped_skin_id": -1,
          "equiped_guns": [
            109
          ],
          "equiped_miscs": [],
          "loot_boxes": []
        },
        {
          "id": 7,
          "jump_delay": 60,
          "respawn_delay": 30,
          "reputation_change": 1,
          "affiliation_change": 1,
          "money_multiplier": 1,
          "damage_multiplier": 1,
          "resistance_multiplier": 1,
          "experience": 1,
          "ai_name": "Sadh_Guru",
          "equiped_ship_id": 301,
          "equiped_skin_id": -1,
          "equiped_guns": [
            109
          ],
          "equiped_miscs": [],
          "loot_boxes": []
        },
        {
          "id": 8,
          "jump_delay": 30,
          "respawn_delay": 30,
          "reputation_change": 1,
          "affiliation_change": 1,
          "money_multiplier": 1,
          "damage_multiplier": 1,
          "resistance_multiplier": 1,
          "experience": 1,
          "ai_name": "Degrasse_Tyson",
          "equiped_ship_id": 301,
          "equiped_skin_id": -1,
          "equiped_guns": [
            109
          ],
          "equiped_miscs": [],
          "loot_boxes": []
        },
        {
          "id": 9,
          "jump_delay": 30,
          "respawn_delay": 30,
          "reputation_change": 1,
          "affiliation_change": 1,
          "money_multiplier": 1,
          "damage_multiplier": 1,
          "resistance_multiplier": 1,
          "experience": 1,
          "ai_name": "Lawrence_Krauss",
          "equiped_ship_id": 301,
          "equiped_skin_id": -1,
          "equiped_guns": [
            109
          ],
          "equiped_miscs": [],
          "loot_boxes": []
        },
        {
          "id": 10,
          "jump_delay": 30,
          "respawn_delay": 30,
          "reputation_change": 1,
          "affiliation_change": 1,
          "money_multiplier": 1,
          "damage_multiplier": 1,
          "resistance_multiplier": 1,
          "experience": 1,
          "ai_name": "Joe_Rogan",
          "equiped_ship_id": 301,
          "equiped_skin_id": -1,
          "equiped_guns": [
            109
          ],
          "equiped_miscs": [],
          "loot_boxes": []
        }
      ]
    }
  ];

  const guilds = [];
  const players = [];
  guildData.map((guild:any) => {
    guilds.push({
      reference: guild.id,
      name: guild.Name,
      damage_multiplier: guild.damage_multiplier,
      resistance_multiplier: guild.resistance_multiplier,
      asteroid_is_enemy: guild.asteroid_is_enemy,
      hunting_time: guild.hunting_time,
      reputation: guild.reputation,
      point_reference: guild.path_points_id[0]
    });
    guild.ai_players.map((player:any) => {
      players.push({
        
      });
    })
  })
  

  await prisma.guilds.createMany({
    data: guilds
  })

  console.log('Guilds seeded successfully');
}