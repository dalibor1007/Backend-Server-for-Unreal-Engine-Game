import { Logger } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

export async function seedMarkets(prismaClient: PrismaClient) {
  const marketsData = [
    {
      "Name": "10566",
      "Minerals": [
        {
          "table_id": 101,
          "CostPrice":
          {
            "min": 59,
            "max": 60
          },
          "SellPrice":
          {
            "min": 47,
            "max": 57
          }
        },
        {
          "table_id": 102,
          "CostPrice":
          {
            "min": 52,
            "max": 53
          },
          "SellPrice":
          {
            "min": 40,
            "max": 50
          }
        },
        {
          "table_id": 103,
          "CostPrice":
          {
            "min": 58,
            "max": 59
          },
          "SellPrice":
          {
            "min": 46,
            "max": 56
          }
        },
        {
          "table_id": 104,
          "CostPrice":
          {
            "min": 58,
            "max": 59
          },
          "SellPrice":
          {
            "min": 46,
            "max": 56
          }
        },
        {
          "table_id": 105,
          "CostPrice":
          {
            "min": 55,
            "max": 56
          },
          "SellPrice":
          {
            "min": 43,
            "max": 53
          }
        },
        {
          "table_id": 106,
          "CostPrice":
          {
            "min": 54,
            "max": 55
          },
          "SellPrice":
          {
            "min": 42,
            "max": 52
          }
        },
        {
          "table_id": 107,
          "CostPrice":
          {
            "min": 45,
            "max": 46
          },
          "SellPrice":
          {
            "min": 33,
            "max": 43
          }
        },
        {
          "table_id": 108,
          "CostPrice":
          {
            "min": 59,
            "max": 60
          },
          "SellPrice":
          {
            "min": 47,
            "max": 57
          }
        },
        {
          "table_id": 109,
          "CostPrice":
          {
            "min": 58,
            "max": 59
          },
          "SellPrice":
          {
            "min": 46,
            "max": 56
          }
        },
        {
          "table_id": 110,
          "CostPrice":
          {
            "min": 45,
            "max": 46
          },
          "SellPrice":
          {
            "min": 33,
            "max": 43
          }
        }
      ],
      "UpdateTime":
      {
        "min": 100,
        "max": 160
      },
      "point_id": 10566
    },
    {
      "Name": "10895",
      "Minerals": [
        {
          "table_id": 101,
          "CostPrice":
          {
            "min": 50,
            "max": 51
          },
          "SellPrice":
          {
            "min": 38,
            "max": 48
          }
        },
        {
          "table_id": 102,
          "CostPrice":
          {
            "min": 49,
            "max": 50
          },
          "SellPrice":
          {
            "min": 37,
            "max": 47
          }
        },
        {
          "table_id": 103,
          "CostPrice":
          {
            "min": 59,
            "max": 60
          },
          "SellPrice":
          {
            "min": 47,
            "max": 57
          }
        },
        {
          "table_id": 104,
          "CostPrice":
          {
            "min": 54,
            "max": 55
          },
          "SellPrice":
          {
            "min": 42,
            "max": 52
          }
        },
        {
          "table_id": 105,
          "CostPrice":
          {
            "min": 47,
            "max": 48
          },
          "SellPrice":
          {
            "min": 35,
            "max": 45
          }
        },
        {
          "table_id": 106,
          "CostPrice":
          {
            "min": 56,
            "max": 57
          },
          "SellPrice":
          {
            "min": 44,
            "max": 54
          }
        },
        {
          "table_id": 107,
          "CostPrice":
          {
            "min": 47,
            "max": 48
          },
          "SellPrice":
          {
            "min": 35,
            "max": 45
          }
        },
        {
          "table_id": 108,
          "CostPrice":
          {
            "min": 54,
            "max": 55
          },
          "SellPrice":
          {
            "min": 42,
            "max": 52
          }
        },
        {
          "table_id": 109,
          "CostPrice":
          {
            "min": 55,
            "max": 56
          },
          "SellPrice":
          {
            "min": 43,
            "max": 53
          }
        },
        {
          "table_id": 110,
          "CostPrice":
          {
            "min": 61,
            "max": 62
          },
          "SellPrice":
          {
            "min": 49,
            "max": 59
          }
        }
      ],
      "UpdateTime":
      {
        "min": 69,
        "max": 129
      },
      "point_id": 10895
    },
    {
      "Name": "11123",
      "Minerals": [
        {
          "table_id": 101,
          "CostPrice":
          {
            "min": 44,
            "max": 45
          },
          "SellPrice":
          {
            "min": 32,
            "max": 42
          }
        },
        {
          "table_id": 102,
          "CostPrice":
          {
            "min": 44,
            "max": 45
          },
          "SellPrice":
          {
            "min": 32,
            "max": 42
          }
        },
        {
          "table_id": 103,
          "CostPrice":
          {
            "min": 47,
            "max": 48
          },
          "SellPrice":
          {
            "min": 35,
            "max": 45
          }
        },
        {
          "table_id": 104,
          "CostPrice":
          {
            "min": 50,
            "max": 51
          },
          "SellPrice":
          {
            "min": 38,
            "max": 48
          }
        },
        {
          "table_id": 105,
          "CostPrice":
          {
            "min": 45,
            "max": 46
          },
          "SellPrice":
          {
            "min": 33,
            "max": 43
          }
        },
        {
          "table_id": 106,
          "CostPrice":
          {
            "min": 50,
            "max": 51
          },
          "SellPrice":
          {
            "min": 38,
            "max": 48
          }
        },
        {
          "table_id": 107,
          "CostPrice":
          {
            "min": 42,
            "max": 43
          },
          "SellPrice":
          {
            "min": 30,
            "max": 40
          }
        },
        {
          "table_id": 108,
          "CostPrice":
          {
            "min": 44,
            "max": 45
          },
          "SellPrice":
          {
            "min": 32,
            "max": 42
          }
        },
        {
          "table_id": 109,
          "CostPrice":
          {
            "min": 51,
            "max": 52
          },
          "SellPrice":
          {
            "min": 39,
            "max": 49
          }
        },
        {
          "table_id": 110,
          "CostPrice":
          {
            "min": 49,
            "max": 50
          },
          "SellPrice":
          {
            "min": 37,
            "max": 47
          }
        }
      ],
      "UpdateTime":
      {
        "min": 107,
        "max": 167
      },
      "point_id": 11123
    },
    {
      "Name": "10953",
      "Minerals": [
        {
          "table_id": 101,
          "CostPrice":
          {
            "min": 58,
            "max": 59
          },
          "SellPrice":
          {
            "min": 46,
            "max": 56
          }
        },
        {
          "table_id": 102,
          "CostPrice":
          {
            "min": 56,
            "max": 57
          },
          "SellPrice":
          {
            "min": 44,
            "max": 54
          }
        },
        {
          "table_id": 103,
          "CostPrice":
          {
            "min": 42,
            "max": 43
          },
          "SellPrice":
          {
            "min": 30,
            "max": 40
          }
        },
        {
          "table_id": 104,
          "CostPrice":
          {
            "min": 42,
            "max": 43
          },
          "SellPrice":
          {
            "min": 30,
            "max": 40
          }
        },
        {
          "table_id": 105,
          "CostPrice":
          {
            "min": 58,
            "max": 59
          },
          "SellPrice":
          {
            "min": 46,
            "max": 56
          }
        },
        {
          "table_id": 106,
          "CostPrice":
          {
            "min": 60,
            "max": 61
          },
          "SellPrice":
          {
            "min": 48,
            "max": 58
          }
        },
        {
          "table_id": 107,
          "CostPrice":
          {
            "min": 60,
            "max": 61
          },
          "SellPrice":
          {
            "min": 48,
            "max": 58
          }
        },
        {
          "table_id": 108,
          "CostPrice":
          {
            "min": 53,
            "max": 54
          },
          "SellPrice":
          {
            "min": 41,
            "max": 51
          }
        },
        {
          "table_id": 109,
          "CostPrice":
          {
            "min": 55,
            "max": 56
          },
          "SellPrice":
          {
            "min": 43,
            "max": 53
          }
        },
        {
          "table_id": 110,
          "CostPrice":
          {
            "min": 56,
            "max": 57
          },
          "SellPrice":
          {
            "min": 44,
            "max": 54
          }
        }
      ],
      "UpdateTime":
      {
        "min": 119,
        "max": 179
      },
      "point_id": 10953
    },
    {
      "Name": "11661",
      "Minerals": [
        {
          "table_id": 101,
          "CostPrice":
          {
            "min": 62,
            "max": 63
          },
          "SellPrice":
          {
            "min": 50,
            "max": 60
          }
        },
        {
          "table_id": 102,
          "CostPrice":
          {
            "min": 59,
            "max": 60
          },
          "SellPrice":
          {
            "min": 47,
            "max": 57
          }
        },
        {
          "table_id": 103,
          "CostPrice":
          {
            "min": 56,
            "max": 57
          },
          "SellPrice":
          {
            "min": 44,
            "max": 54
          }
        },
        {
          "table_id": 104,
          "CostPrice":
          {
            "min": 61,
            "max": 62
          },
          "SellPrice":
          {
            "min": 49,
            "max": 59
          }
        },
        {
          "table_id": 105,
          "CostPrice":
          {
            "min": 55,
            "max": 56
          },
          "SellPrice":
          {
            "min": 43,
            "max": 53
          }
        },
        {
          "table_id": 106,
          "CostPrice":
          {
            "min": 59,
            "max": 60
          },
          "SellPrice":
          {
            "min": 47,
            "max": 57
          }
        },
        {
          "table_id": 107,
          "CostPrice":
          {
            "min": 52,
            "max": 53
          },
          "SellPrice":
          {
            "min": 40,
            "max": 50
          }
        },
        {
          "table_id": 108,
          "CostPrice":
          {
            "min": 43,
            "max": 44
          },
          "SellPrice":
          {
            "min": 31,
            "max": 41
          }
        },
        {
          "table_id": 109,
          "CostPrice":
          {
            "min": 46,
            "max": 47
          },
          "SellPrice":
          {
            "min": 34,
            "max": 44
          }
        },
        {
          "table_id": 110,
          "CostPrice":
          {
            "min": 47,
            "max": 48
          },
          "SellPrice":
          {
            "min": 35,
            "max": 45
          }
        }
      ],
      "UpdateTime":
      {
        "min": 96,
        "max": 156
      },
      "point_id": 11661
    },
    {
      "Name": "11864",
      "Minerals": [
        {
          "table_id": 101,
          "CostPrice":
          {
            "min": 61,
            "max": 62
          },
          "SellPrice":
          {
            "min": 49,
            "max": 59
          }
        },
        {
          "table_id": 102,
          "CostPrice":
          {
            "min": 55,
            "max": 56
          },
          "SellPrice":
          {
            "min": 43,
            "max": 53
          }
        },
        {
          "table_id": 103,
          "CostPrice":
          {
            "min": 62,
            "max": 63
          },
          "SellPrice":
          {
            "min": 50,
            "max": 60
          }
        },
        {
          "table_id": 104,
          "CostPrice":
          {
            "min": 56,
            "max": 57
          },
          "SellPrice":
          {
            "min": 44,
            "max": 54
          }
        },
        {
          "table_id": 105,
          "CostPrice":
          {
            "min": 51,
            "max": 52
          },
          "SellPrice":
          {
            "min": 39,
            "max": 49
          }
        },
        {
          "table_id": 106,
          "CostPrice":
          {
            "min": 43,
            "max": 44
          },
          "SellPrice":
          {
            "min": 31,
            "max": 41
          }
        },
        {
          "table_id": 107,
          "CostPrice":
          {
            "min": 55,
            "max": 56
          },
          "SellPrice":
          {
            "min": 43,
            "max": 53
          }
        },
        {
          "table_id": 108,
          "CostPrice":
          {
            "min": 58,
            "max": 59
          },
          "SellPrice":
          {
            "min": 46,
            "max": 56
          }
        },
        {
          "table_id": 109,
          "CostPrice":
          {
            "min": 54,
            "max": 55
          },
          "SellPrice":
          {
            "min": 42,
            "max": 52
          }
        },
        {
          "table_id": 110,
          "CostPrice":
          {
            "min": 56,
            "max": 57
          },
          "SellPrice":
          {
            "min": 44,
            "max": 54
          }
        }
      ],
      "UpdateTime":
      {
        "min": 69,
        "max": 129
      },
      "point_id": 11864
    },
    {
      "Name": "11615",
      "Minerals": [
        {
          "table_id": 101,
          "CostPrice":
          {
            "min": 51,
            "max": 52
          },
          "SellPrice":
          {
            "min": 39,
            "max": 49
          }
        },
        {
          "table_id": 102,
          "CostPrice":
          {
            "min": 59,
            "max": 60
          },
          "SellPrice":
          {
            "min": 47,
            "max": 57
          }
        },
        {
          "table_id": 103,
          "CostPrice":
          {
            "min": 42,
            "max": 43
          },
          "SellPrice":
          {
            "min": 30,
            "max": 40
          }
        },
        {
          "table_id": 104,
          "CostPrice":
          {
            "min": 54,
            "max": 55
          },
          "SellPrice":
          {
            "min": 42,
            "max": 52
          }
        },
        {
          "table_id": 105,
          "CostPrice":
          {
            "min": 55,
            "max": 56
          },
          "SellPrice":
          {
            "min": 43,
            "max": 53
          }
        },
        {
          "table_id": 106,
          "CostPrice":
          {
            "min": 58,
            "max": 59
          },
          "SellPrice":
          {
            "min": 46,
            "max": 56
          }
        },
        {
          "table_id": 107,
          "CostPrice":
          {
            "min": 51,
            "max": 52
          },
          "SellPrice":
          {
            "min": 39,
            "max": 49
          }
        },
        {
          "table_id": 108,
          "CostPrice":
          {
            "min": 43,
            "max": 44
          },
          "SellPrice":
          {
            "min": 31,
            "max": 41
          }
        },
        {
          "table_id": 109,
          "CostPrice":
          {
            "min": 59,
            "max": 60
          },
          "SellPrice":
          {
            "min": 47,
            "max": 57
          }
        },
        {
          "table_id": 110,
          "CostPrice":
          {
            "min": 46,
            "max": 47
          },
          "SellPrice":
          {
            "min": 34,
            "max": 44
          }
        }
      ],
      "UpdateTime":
      {
        "min": 109,
        "max": 169
      },
      "point_id": 11615
    },
    {
      "Name": "12130",
      "Minerals": [
        {
          "table_id": 101,
          "CostPrice":
          {
            "min": 44,
            "max": 45
          },
          "SellPrice":
          {
            "min": 32,
            "max": 42
          }
        },
        {
          "table_id": 102,
          "CostPrice":
          {
            "min": 60,
            "max": 61
          },
          "SellPrice":
          {
            "min": 48,
            "max": 58
          }
        },
        {
          "table_id": 103,
          "CostPrice":
          {
            "min": 58,
            "max": 59
          },
          "SellPrice":
          {
            "min": 46,
            "max": 56
          }
        },
        {
          "table_id": 104,
          "CostPrice":
          {
            "min": 45,
            "max": 46
          },
          "SellPrice":
          {
            "min": 33,
            "max": 43
          }
        },
        {
          "table_id": 105,
          "CostPrice":
          {
            "min": 51,
            "max": 52
          },
          "SellPrice":
          {
            "min": 39,
            "max": 49
          }
        },
        {
          "table_id": 106,
          "CostPrice":
          {
            "min": 54,
            "max": 55
          },
          "SellPrice":
          {
            "min": 42,
            "max": 52
          }
        },
        {
          "table_id": 107,
          "CostPrice":
          {
            "min": 55,
            "max": 56
          },
          "SellPrice":
          {
            "min": 43,
            "max": 53
          }
        },
        {
          "table_id": 108,
          "CostPrice":
          {
            "min": 56,
            "max": 57
          },
          "SellPrice":
          {
            "min": 44,
            "max": 54
          }
        },
        {
          "table_id": 109,
          "CostPrice":
          {
            "min": 57,
            "max": 58
          },
          "SellPrice":
          {
            "min": 45,
            "max": 55
          }
        },
        {
          "table_id": 110,
          "CostPrice":
          {
            "min": 54,
            "max": 55
          },
          "SellPrice":
          {
            "min": 42,
            "max": 52
          }
        }
      ],
      "UpdateTime":
      {
        "min": 102,
        "max": 162
      },
      "point_id": 12130
    },
    {
      "Name": "11737",
      "Minerals": [
        {
          "table_id": 101,
          "CostPrice":
          {
            "min": 46,
            "max": 47
          },
          "SellPrice":
          {
            "min": 34,
            "max": 44
          }
        },
        {
          "table_id": 102,
          "CostPrice":
          {
            "min": 45,
            "max": 46
          },
          "SellPrice":
          {
            "min": 33,
            "max": 43
          }
        },
        {
          "table_id": 103,
          "CostPrice":
          {
            "min": 57,
            "max": 58
          },
          "SellPrice":
          {
            "min": 45,
            "max": 55
          }
        },
        {
          "table_id": 104,
          "CostPrice":
          {
            "min": 56,
            "max": 57
          },
          "SellPrice":
          {
            "min": 44,
            "max": 54
          }
        },
        {
          "table_id": 105,
          "CostPrice":
          {
            "min": 54,
            "max": 55
          },
          "SellPrice":
          {
            "min": 42,
            "max": 52
          }
        },
        {
          "table_id": 106,
          "CostPrice":
          {
            "min": 62,
            "max": 63
          },
          "SellPrice":
          {
            "min": 50,
            "max": 60
          }
        },
        {
          "table_id": 107,
          "CostPrice":
          {
            "min": 54,
            "max": 55
          },
          "SellPrice":
          {
            "min": 42,
            "max": 52
          }
        },
        {
          "table_id": 108,
          "CostPrice":
          {
            "min": 57,
            "max": 58
          },
          "SellPrice":
          {
            "min": 45,
            "max": 55
          }
        },
        {
          "table_id": 109,
          "CostPrice":
          {
            "min": 48,
            "max": 49
          },
          "SellPrice":
          {
            "min": 36,
            "max": 46
          }
        },
        {
          "table_id": 110,
          "CostPrice":
          {
            "min": 59,
            "max": 60
          },
          "SellPrice":
          {
            "min": 47,
            "max": 57
          }
        }
      ],
      "UpdateTime":
      {
        "min": 80,
        "max": 140
      },
      "point_id": 11737
    },
    {
      "Name": "11979",
      "Minerals": [
        {
          "table_id": 101,
          "CostPrice":
          {
            "min": 56,
            "max": 57
          },
          "SellPrice":
          {
            "min": 44,
            "max": 54
          }
        },
        {
          "table_id": 102,
          "CostPrice":
          {
            "min": 60,
            "max": 61
          },
          "SellPrice":
          {
            "min": 48,
            "max": 58
          }
        },
        {
          "table_id": 103,
          "CostPrice":
          {
            "min": 48,
            "max": 49
          },
          "SellPrice":
          {
            "min": 36,
            "max": 46
          }
        },
        {
          "table_id": 104,
          "CostPrice":
          {
            "min": 55,
            "max": 56
          },
          "SellPrice":
          {
            "min": 43,
            "max": 53
          }
        },
        {
          "table_id": 105,
          "CostPrice":
          {
            "min": 62,
            "max": 63
          },
          "SellPrice":
          {
            "min": 50,
            "max": 60
          }
        },
        {
          "table_id": 106,
          "CostPrice":
          {
            "min": 47,
            "max": 48
          },
          "SellPrice":
          {
            "min": 35,
            "max": 45
          }
        },
        {
          "table_id": 107,
          "CostPrice":
          {
            "min": 49,
            "max": 50
          },
          "SellPrice":
          {
            "min": 37,
            "max": 47
          }
        },
        {
          "table_id": 108,
          "CostPrice":
          {
            "min": 54,
            "max": 55
          },
          "SellPrice":
          {
            "min": 42,
            "max": 52
          }
        },
        {
          "table_id": 109,
          "CostPrice":
          {
            "min": 57,
            "max": 58
          },
          "SellPrice":
          {
            "min": 45,
            "max": 55
          }
        },
        {
          "table_id": 110,
          "CostPrice":
          {
            "min": 60,
            "max": 61
          },
          "SellPrice":
          {
            "min": 48,
            "max": 58
          }
        }
      ],
      "UpdateTime":
      {
        "min": 94,
        "max": 154
      },
      "point_id": 11979
    },
    {
      "Name": "11956",
      "Minerals": [
        {
          "table_id": 101,
          "CostPrice":
          {
            "min": 49,
            "max": 50
          },
          "SellPrice":
          {
            "min": 37,
            "max": 47
          }
        },
        {
          "table_id": 102,
          "CostPrice":
          {
            "min": 59,
            "max": 60
          },
          "SellPrice":
          {
            "min": 47,
            "max": 57
          }
        },
        {
          "table_id": 103,
          "CostPrice":
          {
            "min": 50,
            "max": 51
          },
          "SellPrice":
          {
            "min": 38,
            "max": 48
          }
        },
        {
          "table_id": 104,
          "CostPrice":
          {
            "min": 57,
            "max": 58
          },
          "SellPrice":
          {
            "min": 45,
            "max": 55
          }
        },
        {
          "table_id": 105,
          "CostPrice":
          {
            "min": 60,
            "max": 61
          },
          "SellPrice":
          {
            "min": 48,
            "max": 58
          }
        },
        {
          "table_id": 106,
          "CostPrice":
          {
            "min": 57,
            "max": 58
          },
          "SellPrice":
          {
            "min": 45,
            "max": 55
          }
        },
        {
          "table_id": 107,
          "CostPrice":
          {
            "min": 51,
            "max": 52
          },
          "SellPrice":
          {
            "min": 39,
            "max": 49
          }
        },
        {
          "table_id": 108,
          "CostPrice":
          {
            "min": 57,
            "max": 58
          },
          "SellPrice":
          {
            "min": 45,
            "max": 55
          }
        },
        {
          "table_id": 109,
          "CostPrice":
          {
            "min": 48,
            "max": 49
          },
          "SellPrice":
          {
            "min": 36,
            "max": 46
          }
        },
        {
          "table_id": 110,
          "CostPrice":
          {
            "min": 44,
            "max": 45
          },
          "SellPrice":
          {
            "min": 32,
            "max": 42
          }
        }
      ],
      "UpdateTime":
      {
        "min": 98,
        "max": 158
      },
      "point_id": 11956
    },
    {
      "Name": "12363",
      "Minerals": [
        {
          "table_id": 101,
          "CostPrice":
          {
            "min": 57,
            "max": 58
          },
          "SellPrice":
          {
            "min": 45,
            "max": 55
          }
        },
        {
          "table_id": 102,
          "CostPrice":
          {
            "min": 59,
            "max": 60
          },
          "SellPrice":
          {
            "min": 47,
            "max": 57
          }
        },
        {
          "table_id": 103,
          "CostPrice":
          {
            "min": 52,
            "max": 53
          },
          "SellPrice":
          {
            "min": 40,
            "max": 50
          }
        },
        {
          "table_id": 104,
          "CostPrice":
          {
            "min": 42,
            "max": 43
          },
          "SellPrice":
          {
            "min": 30,
            "max": 40
          }
        },
        {
          "table_id": 105,
          "CostPrice":
          {
            "min": 51,
            "max": 52
          },
          "SellPrice":
          {
            "min": 39,
            "max": 49
          }
        },
        {
          "table_id": 106,
          "CostPrice":
          {
            "min": 48,
            "max": 49
          },
          "SellPrice":
          {
            "min": 36,
            "max": 46
          }
        },
        {
          "table_id": 107,
          "CostPrice":
          {
            "min": 54,
            "max": 55
          },
          "SellPrice":
          {
            "min": 42,
            "max": 52
          }
        },
        {
          "table_id": 108,
          "CostPrice":
          {
            "min": 46,
            "max": 47
          },
          "SellPrice":
          {
            "min": 34,
            "max": 44
          }
        },
        {
          "table_id": 109,
          "CostPrice":
          {
            "min": 44,
            "max": 45
          },
          "SellPrice":
          {
            "min": 32,
            "max": 42
          }
        },
        {
          "table_id": 110,
          "CostPrice":
          {
            "min": 62,
            "max": 63
          },
          "SellPrice":
          {
            "min": 50,
            "max": 60
          }
        }
      ],
      "UpdateTime":
      {
        "min": 115,
        "max": 175
      },
      "point_id": 12363
    },
    {
      "Name": "12636",
      "Minerals": [
        {
          "table_id": 101,
          "CostPrice":
          {
            "min": 54,
            "max": 55
          },
          "SellPrice":
          {
            "min": 42,
            "max": 52
          }
        },
        {
          "table_id": 102,
          "CostPrice":
          {
            "min": 55,
            "max": 56
          },
          "SellPrice":
          {
            "min": 43,
            "max": 53
          }
        },
        {
          "table_id": 103,
          "CostPrice":
          {
            "min": 62,
            "max": 63
          },
          "SellPrice":
          {
            "min": 50,
            "max": 60
          }
        },
        {
          "table_id": 104,
          "CostPrice":
          {
            "min": 55,
            "max": 56
          },
          "SellPrice":
          {
            "min": 43,
            "max": 53
          }
        },
        {
          "table_id": 105,
          "CostPrice":
          {
            "min": 57,
            "max": 58
          },
          "SellPrice":
          {
            "min": 45,
            "max": 55
          }
        },
        {
          "table_id": 106,
          "CostPrice":
          {
            "min": 49,
            "max": 50
          },
          "SellPrice":
          {
            "min": 37,
            "max": 47
          }
        },
        {
          "table_id": 107,
          "CostPrice":
          {
            "min": 57,
            "max": 58
          },
          "SellPrice":
          {
            "min": 45,
            "max": 55
          }
        },
        {
          "table_id": 108,
          "CostPrice":
          {
            "min": 54,
            "max": 55
          },
          "SellPrice":
          {
            "min": 42,
            "max": 52
          }
        },
        {
          "table_id": 109,
          "CostPrice":
          {
            "min": 58,
            "max": 59
          },
          "SellPrice":
          {
            "min": 46,
            "max": 56
          }
        },
        {
          "table_id": 110,
          "CostPrice":
          {
            "min": 58,
            "max": 59
          },
          "SellPrice":
          {
            "min": 46,
            "max": 56
          }
        }
      ],
      "UpdateTime":
      {
        "min": 112,
        "max": 172
      },
      "point_id": 12636
    },
    {
      "Name": "12584",
      "Minerals": [
        {
          "table_id": 101,
          "CostPrice":
          {
            "min": 58,
            "max": 59
          },
          "SellPrice":
          {
            "min": 46,
            "max": 56
          }
        },
        {
          "table_id": 102,
          "CostPrice":
          {
            "min": 53,
            "max": 54
          },
          "SellPrice":
          {
            "min": 41,
            "max": 51
          }
        },
        {
          "table_id": 103,
          "CostPrice":
          {
            "min": 51,
            "max": 52
          },
          "SellPrice":
          {
            "min": 39,
            "max": 49
          }
        },
        {
          "table_id": 104,
          "CostPrice":
          {
            "min": 53,
            "max": 54
          },
          "SellPrice":
          {
            "min": 41,
            "max": 51
          }
        },
        {
          "table_id": 105,
          "CostPrice":
          {
            "min": 61,
            "max": 62
          },
          "SellPrice":
          {
            "min": 49,
            "max": 59
          }
        },
        {
          "table_id": 106,
          "CostPrice":
          {
            "min": 43,
            "max": 44
          },
          "SellPrice":
          {
            "min": 31,
            "max": 41
          }
        },
        {
          "table_id": 107,
          "CostPrice":
          {
            "min": 56,
            "max": 57
          },
          "SellPrice":
          {
            "min": 44,
            "max": 54
          }
        },
        {
          "table_id": 108,
          "CostPrice":
          {
            "min": 54,
            "max": 55
          },
          "SellPrice":
          {
            "min": 42,
            "max": 52
          }
        },
        {
          "table_id": 109,
          "CostPrice":
          {
            "min": 54,
            "max": 55
          },
          "SellPrice":
          {
            "min": 42,
            "max": 52
          }
        },
        {
          "table_id": 110,
          "CostPrice":
          {
            "min": 59,
            "max": 60
          },
          "SellPrice":
          {
            "min": 47,
            "max": 57
          }
        }
      ],
      "UpdateTime":
      {
        "min": 92,
        "max": 152
      },
      "point_id": 12584
    },
    {
      "Name": "13914",
      "Minerals": [
        {
          "table_id": 101,
          "CostPrice":
          {
            "min": 42,
            "max": 43
          },
          "SellPrice":
          {
            "min": 30,
            "max": 40
          }
        },
        {
          "table_id": 102,
          "CostPrice":
          {
            "min": 48,
            "max": 49
          },
          "SellPrice":
          {
            "min": 36,
            "max": 46
          }
        },
        {
          "table_id": 103,
          "CostPrice":
          {
            "min": 44,
            "max": 45
          },
          "SellPrice":
          {
            "min": 32,
            "max": 42
          }
        },
        {
          "table_id": 104,
          "CostPrice":
          {
            "min": 54,
            "max": 55
          },
          "SellPrice":
          {
            "min": 42,
            "max": 52
          }
        },
        {
          "table_id": 105,
          "CostPrice":
          {
            "min": 46,
            "max": 47
          },
          "SellPrice":
          {
            "min": 34,
            "max": 44
          }
        },
        {
          "table_id": 106,
          "CostPrice":
          {
            "min": 56,
            "max": 57
          },
          "SellPrice":
          {
            "min": 44,
            "max": 54
          }
        },
        {
          "table_id": 107,
          "CostPrice":
          {
            "min": 44,
            "max": 45
          },
          "SellPrice":
          {
            "min": 32,
            "max": 42
          }
        },
        {
          "table_id": 108,
          "CostPrice":
          {
            "min": 43,
            "max": 44
          },
          "SellPrice":
          {
            "min": 31,
            "max": 41
          }
        },
        {
          "table_id": 109,
          "CostPrice":
          {
            "min": 47,
            "max": 48
          },
          "SellPrice":
          {
            "min": 35,
            "max": 45
          }
        },
        {
          "table_id": 110,
          "CostPrice":
          {
            "min": 46,
            "max": 47
          },
          "SellPrice":
          {
            "min": 34,
            "max": 44
          }
        }
      ],
      "UpdateTime":
      {
        "min": 83,
        "max": 143
      },
      "point_id": 13914
    },
    {
      "Name": "13423",
      "Minerals": [
        {
          "table_id": 101,
          "CostPrice":
          {
            "min": 58,
            "max": 59
          },
          "SellPrice":
          {
            "min": 46,
            "max": 56
          }
        },
        {
          "table_id": 102,
          "CostPrice":
          {
            "min": 50,
            "max": 51
          },
          "SellPrice":
          {
            "min": 38,
            "max": 48
          }
        },
        {
          "table_id": 103,
          "CostPrice":
          {
            "min": 52,
            "max": 53
          },
          "SellPrice":
          {
            "min": 40,
            "max": 50
          }
        },
        {
          "table_id": 104,
          "CostPrice":
          {
            "min": 58,
            "max": 59
          },
          "SellPrice":
          {
            "min": 46,
            "max": 56
          }
        },
        {
          "table_id": 105,
          "CostPrice":
          {
            "min": 58,
            "max": 59
          },
          "SellPrice":
          {
            "min": 46,
            "max": 56
          }
        },
        {
          "table_id": 106,
          "CostPrice":
          {
            "min": 50,
            "max": 51
          },
          "SellPrice":
          {
            "min": 38,
            "max": 48
          }
        },
        {
          "table_id": 107,
          "CostPrice":
          {
            "min": 56,
            "max": 57
          },
          "SellPrice":
          {
            "min": 44,
            "max": 54
          }
        },
        {
          "table_id": 108,
          "CostPrice":
          {
            "min": 55,
            "max": 56
          },
          "SellPrice":
          {
            "min": 43,
            "max": 53
          }
        },
        {
          "table_id": 109,
          "CostPrice":
          {
            "min": 55,
            "max": 56
          },
          "SellPrice":
          {
            "min": 43,
            "max": 53
          }
        },
        {
          "table_id": 110,
          "CostPrice":
          {
            "min": 44,
            "max": 45
          },
          "SellPrice":
          {
            "min": 32,
            "max": 42
          }
        }
      ],
      "UpdateTime":
      {
        "min": 60,
        "max": 120
      },
      "point_id": 13423
    },
    {
      "Name": "20025",
      "Minerals": [
        {
          "table_id": 101,
          "CostPrice":
          {
            "min": 59,
            "max": 60
          },
          "SellPrice":
          {
            "min": 47,
            "max": 57
          }
        },
        {
          "table_id": 102,
          "CostPrice":
          {
            "min": 44,
            "max": 45
          },
          "SellPrice":
          {
            "min": 32,
            "max": 42
          }
        },
        {
          "table_id": 103,
          "CostPrice":
          {
            "min": 44,
            "max": 45
          },
          "SellPrice":
          {
            "min": 32,
            "max": 42
          }
        },
        {
          "table_id": 104,
          "CostPrice":
          {
            "min": 61,
            "max": 62
          },
          "SellPrice":
          {
            "min": 49,
            "max": 59
          }
        },
        {
          "table_id": 105,
          "CostPrice":
          {
            "min": 56,
            "max": 57
          },
          "SellPrice":
          {
            "min": 44,
            "max": 54
          }
        },
        {
          "table_id": 106,
          "CostPrice":
          {
            "min": 50,
            "max": 51
          },
          "SellPrice":
          {
            "min": 38,
            "max": 48
          }
        },
        {
          "table_id": 107,
          "CostPrice":
          {
            "min": 46,
            "max": 47
          },
          "SellPrice":
          {
            "min": 34,
            "max": 44
          }
        },
        {
          "table_id": 108,
          "CostPrice":
          {
            "min": 50,
            "max": 51
          },
          "SellPrice":
          {
            "min": 38,
            "max": 48
          }
        },
        {
          "table_id": 109,
          "CostPrice":
          {
            "min": 55,
            "max": 56
          },
          "SellPrice":
          {
            "min": 43,
            "max": 53
          }
        },
        {
          "table_id": 110,
          "CostPrice":
          {
            "min": 46,
            "max": 47
          },
          "SellPrice":
          {
            "min": 34,
            "max": 44
          }
        }
      ],
      "UpdateTime":
      {
        "min": 85,
        "max": 145
      },
      "point_id": 20025
    },
    {
      "Name": "20063",
      "Minerals": [
        {
          "table_id": 101,
          "CostPrice":
          {
            "min": 56,
            "max": 57
          },
          "SellPrice":
          {
            "min": 44,
            "max": 54
          }
        },
        {
          "table_id": 102,
          "CostPrice":
          {
            "min": 48,
            "max": 49
          },
          "SellPrice":
          {
            "min": 36,
            "max": 46
          }
        },
        {
          "table_id": 103,
          "CostPrice":
          {
            "min": 54,
            "max": 55
          },
          "SellPrice":
          {
            "min": 42,
            "max": 52
          }
        },
        {
          "table_id": 104,
          "CostPrice":
          {
            "min": 48,
            "max": 49
          },
          "SellPrice":
          {
            "min": 36,
            "max": 46
          }
        },
        {
          "table_id": 105,
          "CostPrice":
          {
            "min": 46,
            "max": 47
          },
          "SellPrice":
          {
            "min": 34,
            "max": 44
          }
        },
        {
          "table_id": 106,
          "CostPrice":
          {
            "min": 58,
            "max": 59
          },
          "SellPrice":
          {
            "min": 46,
            "max": 56
          }
        },
        {
          "table_id": 107,
          "CostPrice":
          {
            "min": 56,
            "max": 57
          },
          "SellPrice":
          {
            "min": 44,
            "max": 54
          }
        },
        {
          "table_id": 108,
          "CostPrice":
          {
            "min": 47,
            "max": 48
          },
          "SellPrice":
          {
            "min": 35,
            "max": 45
          }
        },
        {
          "table_id": 109,
          "CostPrice":
          {
            "min": 49,
            "max": 50
          },
          "SellPrice":
          {
            "min": 37,
            "max": 47
          }
        },
        {
          "table_id": 110,
          "CostPrice":
          {
            "min": 46,
            "max": 47
          },
          "SellPrice":
          {
            "min": 34,
            "max": 44
          }
        }
      ],
      "UpdateTime":
      {
        "min": 78,
        "max": 138
      },
      "point_id": 20063
    },
    {
      "Name": "20067",
      "Minerals": [
        {
          "table_id": 101,
          "CostPrice":
          {
            "min": 52,
            "max": 53
          },
          "SellPrice":
          {
            "min": 40,
            "max": 50
          }
        },
        {
          "table_id": 102,
          "CostPrice":
          {
            "min": 44,
            "max": 45
          },
          "SellPrice":
          {
            "min": 32,
            "max": 42
          }
        },
        {
          "table_id": 103,
          "CostPrice":
          {
            "min": 47,
            "max": 48
          },
          "SellPrice":
          {
            "min": 35,
            "max": 45
          }
        },
        {
          "table_id": 104,
          "CostPrice":
          {
            "min": 48,
            "max": 49
          },
          "SellPrice":
          {
            "min": 36,
            "max": 46
          }
        },
        {
          "table_id": 105,
          "CostPrice":
          {
            "min": 60,
            "max": 61
          },
          "SellPrice":
          {
            "min": 48,
            "max": 58
          }
        },
        {
          "table_id": 106,
          "CostPrice":
          {
            "min": 48,
            "max": 49
          },
          "SellPrice":
          {
            "min": 36,
            "max": 46
          }
        },
        {
          "table_id": 107,
          "CostPrice":
          {
            "min": 44,
            "max": 45
          },
          "SellPrice":
          {
            "min": 32,
            "max": 42
          }
        },
        {
          "table_id": 108,
          "CostPrice":
          {
            "min": 49,
            "max": 50
          },
          "SellPrice":
          {
            "min": 37,
            "max": 47
          }
        },
        {
          "table_id": 109,
          "CostPrice":
          {
            "min": 51,
            "max": 52
          },
          "SellPrice":
          {
            "min": 39,
            "max": 49
          }
        },
        {
          "table_id": 110,
          "CostPrice":
          {
            "min": 51,
            "max": 52
          },
          "SellPrice":
          {
            "min": 39,
            "max": 49
          }
        }
      ],
      "UpdateTime":
      {
        "min": 92,
        "max": 152
      },
      "point_id": 20067
    },
    {
      "Name": "30000",
      "Minerals": [
        {
          "table_id": 101,
          "CostPrice":
          {
            "min": 46,
            "max": 47
          },
          "SellPrice":
          {
            "min": 34,
            "max": 44
          }
        },
        {
          "table_id": 102,
          "CostPrice":
          {
            "min": 50,
            "max": 51
          },
          "SellPrice":
          {
            "min": 38,
            "max": 48
          }
        },
        {
          "table_id": 103,
          "CostPrice":
          {
            "min": 54,
            "max": 55
          },
          "SellPrice":
          {
            "min": 42,
            "max": 52
          }
        },
        {
          "table_id": 104,
          "CostPrice":
          {
            "min": 62,
            "max": 63
          },
          "SellPrice":
          {
            "min": 50,
            "max": 60
          }
        },
        {
          "table_id": 105,
          "CostPrice":
          {
            "min": 44,
            "max": 45
          },
          "SellPrice":
          {
            "min": 32,
            "max": 42
          }
        },
        {
          "table_id": 106,
          "CostPrice":
          {
            "min": 54,
            "max": 55
          },
          "SellPrice":
          {
            "min": 42,
            "max": 52
          }
        },
        {
          "table_id": 107,
          "CostPrice":
          {
            "min": 48,
            "max": 49
          },
          "SellPrice":
          {
            "min": 36,
            "max": 46
          }
        },
        {
          "table_id": 108,
          "CostPrice":
          {
            "min": 61,
            "max": 62
          },
          "SellPrice":
          {
            "min": 49,
            "max": 59
          }
        },
        {
          "table_id": 109,
          "CostPrice":
          {
            "min": 49,
            "max": 50
          },
          "SellPrice":
          {
            "min": 37,
            "max": 47
          }
        },
        {
          "table_id": 110,
          "CostPrice":
          {
            "min": 53,
            "max": 54
          },
          "SellPrice":
          {
            "min": 41,
            "max": 51
          }
        }
      ],
      "UpdateTime":
      {
        "min": 92,
        "max": 152
      },
      "point_id": 30000
    },
    {
      "Name": "30001",
      "Minerals": [
        {
          "table_id": 101,
          "CostPrice":
          {
            "min": 53,
            "max": 54
          },
          "SellPrice":
          {
            "min": 41,
            "max": 51
          }
        },
        {
          "table_id": 102,
          "CostPrice":
          {
            "min": 61,
            "max": 62
          },
          "SellPrice":
          {
            "min": 49,
            "max": 59
          }
        },
        {
          "table_id": 103,
          "CostPrice":
          {
            "min": 50,
            "max": 51
          },
          "SellPrice":
          {
            "min": 38,
            "max": 48
          }
        },
        {
          "table_id": 104,
          "CostPrice":
          {
            "min": 60,
            "max": 61
          },
          "SellPrice":
          {
            "min": 48,
            "max": 58
          }
        },
        {
          "table_id": 105,
          "CostPrice":
          {
            "min": 62,
            "max": 63
          },
          "SellPrice":
          {
            "min": 50,
            "max": 60
          }
        },
        {
          "table_id": 106,
          "CostPrice":
          {
            "min": 43,
            "max": 44
          },
          "SellPrice":
          {
            "min": 31,
            "max": 41
          }
        },
        {
          "table_id": 107,
          "CostPrice":
          {
            "min": 52,
            "max": 53
          },
          "SellPrice":
          {
            "min": 40,
            "max": 50
          }
        },
        {
          "table_id": 108,
          "CostPrice":
          {
            "min": 46,
            "max": 47
          },
          "SellPrice":
          {
            "min": 34,
            "max": 44
          }
        },
        {
          "table_id": 109,
          "CostPrice":
          {
            "min": 52,
            "max": 53
          },
          "SellPrice":
          {
            "min": 40,
            "max": 50
          }
        },
        {
          "table_id": 110,
          "CostPrice":
          {
            "min": 44,
            "max": 45
          },
          "SellPrice":
          {
            "min": 32,
            "max": 42
          }
        }
      ],
      "UpdateTime":
      {
        "min": 101,
        "max": 161
      },
      "point_id": 30001
    },
    {
      "Name": "30002",
      "Minerals": [
        {
          "table_id": 101,
          "CostPrice":
          {
            "min": 53,
            "max": 54
          },
          "SellPrice":
          {
            "min": 41,
            "max": 51
          }
        },
        {
          "table_id": 102,
          "CostPrice":
          {
            "min": 43,
            "max": 44
          },
          "SellPrice":
          {
            "min": 31,
            "max": 41
          }
        },
        {
          "table_id": 103,
          "CostPrice":
          {
            "min": 50,
            "max": 51
          },
          "SellPrice":
          {
            "min": 38,
            "max": 48
          }
        },
        {
          "table_id": 104,
          "CostPrice":
          {
            "min": 58,
            "max": 59
          },
          "SellPrice":
          {
            "min": 46,
            "max": 56
          }
        },
        {
          "table_id": 105,
          "CostPrice":
          {
            "min": 57,
            "max": 58
          },
          "SellPrice":
          {
            "min": 45,
            "max": 55
          }
        },
        {
          "table_id": 106,
          "CostPrice":
          {
            "min": 50,
            "max": 51
          },
          "SellPrice":
          {
            "min": 38,
            "max": 48
          }
        },
        {
          "table_id": 107,
          "CostPrice":
          {
            "min": 55,
            "max": 56
          },
          "SellPrice":
          {
            "min": 43,
            "max": 53
          }
        },
        {
          "table_id": 108,
          "CostPrice":
          {
            "min": 45,
            "max": 46
          },
          "SellPrice":
          {
            "min": 33,
            "max": 43
          }
        },
        {
          "table_id": 109,
          "CostPrice":
          {
            "min": 58,
            "max": 59
          },
          "SellPrice":
          {
            "min": 46,
            "max": 56
          }
        },
        {
          "table_id": 110,
          "CostPrice":
          {
            "min": 60,
            "max": 61
          },
          "SellPrice":
          {
            "min": 48,
            "max": 58
          }
        }
      ],
      "UpdateTime":
      {
        "min": 70,
        "max": 130
      },
      "point_id": 30002
    }
  ];

  
    marketsData.map(async (market:any) => {
      const minerals = [];
      market.Minerals.map((mineral:any) => {
        minerals.push({
          minerals_reference: +mineral.table_id,
          count_min: mineral.CostPrice.min ?? 0,
          count_max: mineral.CostPrice.max ?? 0,
        });
      });
      
      await prismaClient.markets.create({
        data: {
          Points: {connect:{reference: market.point_id}},
          name: market.Name,
          update_time_min: market.UpdateTime.min,
          update_time_max: market.UpdateTime.max,
          MarketHasMinerals:{
            createMany: {
              data: minerals,
              skipDuplicates: true
            }
          }
        }
      });
    });
  

  await prismaClient.$disconnect();

  console.log('Markets seeded successfully');
}