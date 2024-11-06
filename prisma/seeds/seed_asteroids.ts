import { Logger } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

export async function seedAsteroids(prismaClient: PrismaClient) {
  const asteroidData = {
  
    "asteroid_families": [
      {
        "id": 0,
        "family_name": "easy One",
        "path_points_id": [ 10559, 10562, 10304, 10436, 10308, 10310, 10569, 10698, 10696, 10694, 10564, 10566],
        "minerals": [
          {
            "id": 101,
            "count": {
              "min": 10,
              "max": 15
            }
          },
          {
            "id": 102,
            "count": {
              "min": 10,
              "max": 15
            }
          },
          {
            "id": 103,
            "count": {
              "min": 10,
              "max": 15
            }
          },
          {
            "id": 104,
            "count": {
              "min": 10,
              "max": 15
            }
          },
          {
            "id": 105,
            "count": {
              "min": 10,
              "max": 15
            }
          },
          {
            "id": 106,
            "count": {
              "min": 10,
              "max": 15
            }
          },
          {
            "id": 107,
            "count": {
              "min": 0,
              "max": 0
            }
          },
          {
            "id": 108,
            "count": {
              "min": 0,
              "max": 0
            }
          },
          {
            "id": 109,
            "count": {
              "min": 0,
              "max": 0
            }
          },
          {
            "id": 110,
            "count": {
              "min": 0,
              "max": 0
            }
          }
        ],
        "jump_delay": {
          "min": 100,
          "max": 120
        },
        "respawn_delay": {
          "min": 100,
          "max": 150
        },
        "full_hp": {
          "min": 10,
          "max": 20
        },
        "experience": {
          "min": 10,
          "max": 10
        },
        "money": {
          "min": 1500,
          "max": 2000
        },
        "visual_type": 0,
        "max_asteroids": 25,
        "loot_boxes": [
          {
            "type": 0,
            "chance": 0
          }
        ]
      },
      {
        "id": 1,
        "family_name": "fastOnes",
        "path_points_id": [ 10694, 10823, 10951, 10953, 11082, 10953, 11084, 11214, 11283, 11087, 11024 ],
        "minerals": [
          {
            "id": 101,
            "count": {
              "min": 0,
              "max": 0
            }
          },
          {
            "id": 102,
            "count": {
              "min": 0,
              "max": 0
            }
          },
          {
            "id": 103,
            "count": {
              "min": 0,
              "max": 1500
            }
          },
          {
            "id": 104,
            "count": {
              "min": 0,
              "max": 0
            }
          },
          {
            "id": 105,
            "count": {
              "min": 0,
              "max": 0
            }
          },
          {
            "id": 106,
            "count": {
              "min": 0,
              "max": 0
            }
          },
          {
            "id": 107,
            "count": {
              "min": 0,
              "max": 0
            }
          },
          {
            "id": 108,
            "count": {
              "min": 0,
              "max": 2000
            }
          },
          {
            "id": 109,
            "count": {
              "min": 0,
              "max": 0
            }
          },
          {
            "id": 110,
            "count": {
              "min": 0,
              "max": 0
            }
          }
        ],
        "jump_delay": {
          "min": 5,
          "max": 10
        },
        "respawn_delay": {
          "min": 60,
          "max": 90
        },
        "full_hp": {
          "min": 10,
          "max": 15
        },
        "experience": {
          "min": 50,
          "max": 60
        },
        "money": {
          "min": 3000,
          "max": 4000
        },
        "visual_type": 0,
        "max_asteroids": 20,
        "loot_boxes": [
          {
            "type": 0,
            "chance": 0
          }
        ]
      },
      {
        "id": 2,
        "family_name": "HardONe ",
        "path_points_id": [ 10574, 10572, 10569, 10698, 10696, 10698, 10765, 10895, 11024, 11026, 10895, 10897, 10899, 10902 ],
        "minerals": [
          {
            "id": 101,
            "count": {
              "min": 30,
              "max": 40
            }
          },
          {
            "id": 102,
            "count": {
              "min": 30,
              "max": 40
            }
          },
          {
            "id": 103,
            "count": {
              "min": 30,
              "max": 40
            }
          },
          {
            "id": 104,
            "count": {
              "min": 30,
              "max": 40
            }
          },
          {
            "id": 105,
            "count": {
              "min": 30,
              "max": 40
            }
          },
          {
            "id": 106,
            "count": {
              "min": 30,
              "max": 40
            }
          },
          {
            "id": 107,
            "count": {
              "min": 30,
              "max": 40
            }
          },
          {
            "id": 108,
            "count": {
              "min": 30,
              "max": 40
            }
          },
          {
            "id": 109,
            "count": {
              "min": 30,
              "max": 40
            }
          },
          {
            "id": 110,
            "count": {
              "min": 30,
              "max": 40
            }
          }
        ],
        "jump_delay": {
          "min": 300,
          "max": 300
        },
        "respawn_delay": {
          "min": 40,
          "max": 60
        },
        "full_hp": {
          "min": 20,
          "max": 25
        },
        "experience": {
          "min": 1000,
          "max": 1500
        },
        "money": {
          "min": 1000,
          "max": 2000
        },
        "visual_type": 0,
        "max_asteroids": 20,
        "loot_boxes": [
          {
            "type": 0,
            "chance": 0
          }
        ]
      }
    ]
  };

  
  asteroidData.asteroid_families.map(async (asteroid:any) => {
    const points = [];
    asteroid.path_points_id.map((point:any) => {
      points.push({
        point_reference: +point,
        asteroid_reference: asteroid.id
      });
    });

    const minerals = [];
    asteroid.minerals.map((mineral:any) => {
      minerals.push({
        minerals_reference: +mineral.id,
        asteroid_reference: asteroid.id,
        count_min: mineral.count.min ?? 0,
        count_max: mineral.count.max ?? 0,
      });
    });

    await prismaClient.asteroids.create({
      data: {
        reference: asteroid.id,
        name: asteroid.family_name,
        jump_delay_min: asteroid.jump_delay.min,
        jump_delay_max: asteroid.jump_delay.max,
        respawn_delay_min: asteroid.respawn_delay.min,
        respawn_delay_max: asteroid.respawn_delay.max,
        full_hp_min: asteroid.full_hp.min,
        full_hp_max: asteroid.full_hp.max,
        experience_min: asteroid.experience.min,
        experience_max: asteroid.experience.max,
        money_min: asteroid.money.min,
        money_max: asteroid.money.max,
        visual_type: asteroid.visual_type,
        max: asteroid.max_asteroids,
        loot_boxes: asteroid.loot_boxes,
      }
    });

    await prismaClient.asteroidHasMinerals.createMany({
      data: minerals,
      skipDuplicates: true
    })
    await prismaClient.asteroidHasPoints.createMany({
      data: points,
      skipDuplicates: true
    })

  });
  

  await prismaClient.$disconnect();

  console.log('Markets seeded successfully');
}