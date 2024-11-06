import { PrismaClient } from '@prisma/client';

export async function seedPlanetResearch(prisma: PrismaClient) {
  const research = [
    {
      "Name": "0",
      "id": 0,
      "upgrade_name": "Time to collect",
      "icon": "None",
      "levels": [
        {
          "index": 0,
          "short_description": "Increase the speed to colect Tax by 10%",
          "description": "",
          "upgrade_time": 6,
          "upgrade_cost": 150000,
          "boost_cost": 2000,
          "boost_percents": 150
        },
        {
          "index": 1,
          "short_description": "Increase the speed to colect Tax by 8%",
          "description": "",
          "upgrade_time": 10,
          "upgrade_cost": 250000,
          "boost_cost": 2000,
          "boost_percents": 140
        },
        {
          "index": 2,
          "short_description": "Increase the speed to colect Tax by 7%",
          "description": "",
          "upgrade_time": 20,
          "upgrade_cost": 500000,
          "boost_cost": 2000,
          "boost_percents": 135
        },
        {
          "index": 3,
          "short_description": "Increase the speed to colect Tax by 7%",
          "description": "",
          "upgrade_time": 35,
          "upgrade_cost": 875000,
          "boost_cost": 2000,
          "boost_percents": 140
        },
        {
          "index": 4,
          "short_description": "Increase the speed to colect Tax by 5%",
          "description": "",
          "upgrade_time": 50,
          "upgrade_cost": 1250000,
          "boost_cost": 2000,
          "boost_percents": 135
        },
        {
          "index": 5,
          "short_description": "Increase the speed to colect Tax by 5%",
          "description": "",
          "upgrade_time": 75,
          "upgrade_cost": 1875000,
          "boost_cost": 2000,
          "boost_percents": 130
        },
        {
          "index": 6,
          "short_description": "Increase the speed to colect Tax by 4%",
          "description": "",
          "upgrade_time": 100,
          "upgrade_cost": 2500000,
          "boost_cost": 2000,
          "boost_percents": 130
        },
        {
          "index": 7,
          "short_description": "Increase the speed to colect Tax by 4%",
          "description": "",
          "upgrade_time": 150,
          "upgrade_cost": 3750000,
          "boost_cost": 2000,
          "boost_percents": 125
        }
      ]
    },
    {
      "Name": "1",
      "id": 1,
      "upgrade_name": "Population Managment",
      "icon": "None",
      "levels": [
        {
          "index": 0,
          "short_description": "Allows +5% Population Increase",
          "description": "",
          "upgrade_time": 1,
          "upgrade_cost": 25000,
          "boost_cost": 1000,
          "boost_percents": 150
        },
        {
          "index": 1,
          "short_description": "Allows +5% Population Increase",
          "description": "",
          "upgrade_time": 3,
          "upgrade_cost": 75000,
          "boost_cost": 1000,
          "boost_percents": 150
        },
        {
          "index": 2,
          "short_description": "Allows +4% Population Increase",
          "description": "",
          "upgrade_time": 10,
          "upgrade_cost": 250000,
          "boost_cost": 1000,
          "boost_percents": 130
        },
        {
          "index": 3,
          "short_description": "Allows +4% Population Increase",
          "description": "",
          "upgrade_time": 24,
          "upgrade_cost": 600000,
          "boost_cost": 1000,
          "boost_percents": 125
        },
        {
          "index": 4,
          "short_description": "Allows +4% Population Increase",
          "description": "",
          "upgrade_time": 48,
          "upgrade_cost": 1200000,
          "boost_cost": 1000,
          "boost_percents": 125
        },
        {
          "index": 5,
          "short_description": "Allows +3% Population Increase",
          "description": "",
          "upgrade_time": 72,
          "upgrade_cost": 1800000,
          "boost_cost": 1000,
          "boost_percents": 130
        },
        {
          "index": 6,
          "short_description": "Allows +3% Population Increase",
          "description": "",
          "upgrade_time": 120,
          "upgrade_cost": 3000000,
          "boost_cost": 1000,
          "boost_percents": 130
        },
        {
          "index": 7,
          "short_description": "Allows +3% Population Increase",
          "description": "",
          "upgrade_time": 200,
          "upgrade_cost": 5000000,
          "boost_cost": 1000,
          "boost_percents": 120
        },
        {
          "index": 8,
          "short_description": "Allows +3% Population Increase",
          "description": "",
          "upgrade_time": 250,
          "upgrade_cost": 6250000,
          "boost_cost": 1000,
          "boost_percents": 115
        }
      ]
    },
    {
      "Name": "2",
      "id": 2,
      "upgrade_name": "Economic Advanes",
      "icon": "None",
      "levels": [
        {
          "index": 0,
          "short_description": "Allows +1 To Planet Economic Modifier",
          "description": "",
          "upgrade_time": 2,
          "upgrade_cost": 50000,
          "boost_cost": 1000,
          "boost_percents": 150
        },
        {
          "index": 1,
          "short_description": "Allows +1 To Planet Economic Modifier",
          "description": "",
          "upgrade_time": 6,
          "upgrade_cost": 150000,
          "boost_cost": 1000,
          "boost_percents": 135
        },
        {
          "index": 2,
          "short_description": "Allows +1 To Planet Economic Modifier",
          "description": "",
          "upgrade_time": 12,
          "upgrade_cost": 300000,
          "boost_cost": 1000,
          "boost_percents": 130
        },
        {
          "index": 3,
          "short_description": "Allows +1 To Planet Economic Modifier",
          "description": "",
          "upgrade_time": 18,
          "upgrade_cost": 450000,
          "boost_cost": 1000,
          "boost_percents": 125
        },
        {
          "index": 4,
          "short_description": "Allows +1 To Planet Economic Modifier",
          "description": "",
          "upgrade_time": 24,
          "upgrade_cost": 600000,
          "boost_cost": 1000,
          "boost_percents": 120
        },
        {
          "index": 5,
          "short_description": "Allows +1 To Planet Economic Modifier",
          "description": "",
          "upgrade_time": 36,
          "upgrade_cost": 900000,
          "boost_cost": 1000,
          "boost_percents": 120
        },
        {
          "index": 6,
          "short_description": "Allows +1 To Planet Economic Modifier",
          "description": "",
          "upgrade_time": 48,
          "upgrade_cost": 1200000,
          "boost_cost": 1000,
          "boost_percents": 125
        },
        {
          "index": 7,
          "short_description": "Allows +1 To Planet Economic Modifier",
          "description": "",
          "upgrade_time": 56,
          "upgrade_cost": 1400000,
          "boost_cost": 1000,
          "boost_percents": 130
        },
        {
          "index": 8,
          "short_description": "Allows +1 To Planet Economic Modifier",
          "description": "",
          "upgrade_time": 64,
          "upgrade_cost": 1600000,
          "boost_cost": 1000,
          "boost_percents": 120
        }
      ]
    },
    {
      "Name": "3",
      "id": 3,
      "upgrade_name": "Aggressive Tax Rate",
      "icon": "None",
      "levels": [
        {
          "index": 0,
          "short_description": "Allows Higher Tax on Population .5%",
          "description": "",
          "upgrade_time": 6,
          "upgrade_cost": 150000,
          "boost_cost": 2000,
          "boost_percents": 135
        },
        {
          "index": 1,
          "short_description": "Allows Higher Tax on Population .5%",
          "description": "",
          "upgrade_time": 12,
          "upgrade_cost": 300000,
          "boost_cost": 2000,
          "boost_percents": 135
        },
        {
          "index": 2,
          "short_description": "Allows Higher Tax on Population .5%",
          "description": "",
          "upgrade_time": 24,
          "upgrade_cost": 600000,
          "boost_cost": 2000,
          "boost_percents": 130
        },
        {
          "index": 3,
          "short_description": "Allows Higher Tax on Population .5%",
          "description": "",
          "upgrade_time": 36,
          "upgrade_cost": 900000,
          "boost_cost": 2000,
          "boost_percents": 130
        },
        {
          "index": 4,
          "short_description": "Allows Higher Tax on Population .5%",
          "description": "",
          "upgrade_time": 48,
          "upgrade_cost": 1200000,
          "boost_cost": 2000,
          "boost_percents": 125
        }
      ]
    },
    {
      "Name": "4",
      "id": 4,
      "upgrade_name": "Low & Order",
      "icon": "None",
      "levels": [
        {
          "index": 0,
          "short_description": "Reduce the corruption factor by ",
          "description": "",
          "upgrade_time": 2,
          "upgrade_cost": 50000,
          "boost_cost": 1000,
          "boost_percents": 150
        },
        {
          "index": 1,
          "short_description": "Reduce the corruption factor by ",
          "description": "",
          "upgrade_time": 6,
          "upgrade_cost": 150000,
          "boost_cost": 1000,
          "boost_percents": 135
        },
        {
          "index": 2,
          "short_description": "Reduce the corruption factor by ",
          "description": "",
          "upgrade_time": 12,
          "upgrade_cost": 300000,
          "boost_cost": 1000,
          "boost_percents": 130
        },
        {
          "index": 3,
          "short_description": "Reduce the corruption factor by ",
          "description": "",
          "upgrade_time": 18,
          "upgrade_cost": 450000,
          "boost_cost": 1000,
          "boost_percents": 125
        },
        {
          "index": 4,
          "short_description": "Reduce the corruption factor by ",
          "description": "",
          "upgrade_time": 24,
          "upgrade_cost": 600000,
          "boost_cost": 1000,
          "boost_percents": 120
        },
        {
          "index": 5,
          "short_description": "Reduce the corruption factor by ",
          "description": "",
          "upgrade_time": 36,
          "upgrade_cost": 900000,
          "boost_cost": 1000,
          "boost_percents": 120
        },
        {
          "index": 6,
          "short_description": "Reduce the corruption factor by ",
          "description": "",
          "upgrade_time": 48,
          "upgrade_cost": 1200000,
          "boost_cost": 1000,
          "boost_percents": 125
        }
      ]
    },
    {
      "Name": "5",
      "id": 5,
      "upgrade_name": "Building Blocks",
      "icon": "None",
      "levels": [
        {
          "index": 0,
          "short_description": "Increase the Speed to populate the planet",
          "description": "",
          "upgrade_time": 2,
          "upgrade_cost": 50000,
          "boost_cost": 1000,
          "boost_percents": 150
        },
        {
          "index": 1,
          "short_description": "Increase the Speed to populate the planet",
          "description": "",
          "upgrade_time": 6,
          "upgrade_cost": 150000,
          "boost_cost": 1000,
          "boost_percents": 135
        },
        {
          "index": 2,
          "short_description": "Increase the Speed to populate the planet",
          "description": "",
          "upgrade_time": 12,
          "upgrade_cost": 300000,
          "boost_cost": 1000,
          "boost_percents": 130
        },
        {
          "index": 3,
          "short_description": "Increase the Speed to populate the planet",
          "description": "",
          "upgrade_time": 18,
          "upgrade_cost": 450000,
          "boost_cost": 1000,
          "boost_percents": 125
        },
        {
          "index": 4,
          "short_description": "Increase the Speed to populate the planet",
          "description": "",
          "upgrade_time": 24,
          "upgrade_cost": 600000,
          "boost_cost": 1000,
          "boost_percents": 120
        },
        {
          "index": 5,
          "short_description": "Increase the Speed to populate the planet",
          "description": "",
          "upgrade_time": 36,
          "upgrade_cost": 900000,
          "boost_cost": 1000,
          "boost_percents": 120
        },
        {
          "index": 6,
          "short_description": "Increase the Speed to populate the planet",
          "description": "",
          "upgrade_time": 48,
          "upgrade_cost": 1200000,
          "boost_cost": 1000,
          "boost_percents": 125
        }
      ]
    }
  ];
  const types = [];
  const levels = [];
  research.map((type: any) =>{
    types.push({
      name: type.Name,
      icon: type.icon,
      description: type.upgrade_name,
      reference: type.id
    })
    if(type.levels){
      type.levels.map((level: any) => {
        levels.push({
          short_description: level.short_description,
          description: level?.description && level.description ? level.description : level.short_description,
          upgrade_time: level.upgrade_time,
          upgrade_cost: level.upgrade_cost,
          boost_cost: level.boost_cost,
          boost_percents: level.boost_percents,
          reference_player_research: type.id,
        })
      })
    }
  })
  if(types){
    await prisma.planetResearchTypes.createMany({
      data: types,
    });
  }
  if(levels){
    await prisma.planetResearchLevels.createMany({
      data: levels,
    });
  }

  console.log('PlayerResearchTypes seeded successfully');
}