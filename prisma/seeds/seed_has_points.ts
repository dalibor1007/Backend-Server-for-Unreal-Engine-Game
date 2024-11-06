import { PointType, PrismaClient } from '@prisma/client';

export async function seedHasPoints(prisma: PrismaClient) {
  const hasPoints = [
    {
      point_reference: 11659,
      points: [ 11852, 11722, 11661 ],
    },
    {
      point_reference: 11994,
      points: [ 12122, 11864 ],
    },
    {
      point_reference: 12258,
      points: [ 12322, 12130 ],
    },
    {
      point_reference: 11082,
      points: [ 10953 ],
    },
    {
      point_reference: 11084,
      points: [ 11277, 11214, 10953 ],
    },
    {
      point_reference: 11024,
      points: [ 11087, 11026, 10895 ],
    },
    {
      point_reference: 11243,
      points: [ 11502, 11247, 11241 ],
    },
    {
      point_reference: 10562,
      points: [ 10564, 10559, 10823, 10304 ],
    },
    {
      point_reference: 10310,
      points: [ 10308, 20042 ],
    },
    {
      point_reference: 10436,
      points: [ 10304, 10308 ],
    },
    {
      point_reference: 10569,
      points: [ 10698, 10572, 10566, 10308 ],
    },
    {
      point_reference: 10564,
      points: [ 10694, 10566, 10304, 10562 ],
    },
    {
      point_reference: 10559,
      points: [ 10557, 10689, 10562 ],
    },
    {
      point_reference: 10566,
      points: [ 10696, 10569, 10564 ],
    },
    {
      point_reference: 10694,
      points: [ 10823, 10696, 10564 ],
    },
    {
      point_reference: 10572,
      points: [ 10574, 10569 ],
    },
    {
      point_reference: 10574,
      points: [ 10576, 10572 ],
    },
    {
      point_reference: 10576,
      points: [ 10574, 20047 ],
    },
    {
      point_reference: 10557,
      points: [ 10616, 10559 ],
    },
    {
      point_reference: 10689,
      points: [ 10949, 10559 ],
    },
    {
      point_reference: 10616,
      points: [ 10674, 10557 ],
    },
    {
      point_reference: 10674,
      points: [ 10672, 10997, 10616 ],
    },
    {
      point_reference: 10672,
      points: [ 10674 ],
    },
    {
      point_reference: 10997,
      points: [ 11123, 11384, 10935, 10674 ],
    },
    {
      point_reference: 10696,
      points: [ 10698, 10566, 10694 ],
    },
    {
      point_reference: 10823,
      points: [ 10953, 10951, 10562, 10694 ],
    },
    {
      point_reference: 10698,
      points: [ 10765, 10569, 10696 ],
    },
    {
      point_reference: 10765,
      points: [ 10895, 10897, 10698 ],
    },
    {
      point_reference: 10895,
      points: [ 11024, 11026, 10897, 10765 ],
    },
    {
      point_reference: 10897,
      points: [ 10899, 10895, 10765 ],
    },
    {
      point_reference: 10899,
      points: [ 10902, 10897 ],
    },
    {
      point_reference: 10902,
      points: [ 10904, 10899 ],
    },
    {
      point_reference: 10904,
      points: [ 10902, 20075 ],
    },
    {
      point_reference: 11123,
      points: [ 11384, 11316, 10997 ],
    },
    {
      point_reference: 10935,
      points: [ 11387, 11197, 10938, 10997 ],
    },
    {
      point_reference: 11384,
      points: [ 11446, 11387, 11123, 10997 ],
    },
    {
      point_reference: 10938,
      points: [ 11201, 10941, 10935 ],
    },
    {
      point_reference: 10941,
      points: [ 10944, 10938 ],
    },
    {
      point_reference: 10944,
      points: [ 11201, 10947, 10941 ],
    },
    {
      point_reference: 10947,
      points: [ 11207, 10949, 10944 ],
    },
    {
      point_reference: 10949,
      points: [ 11209, 10951, 10689, 10947 ],
    },
    {
      point_reference: 10951,
      points: [ 10953, 10823, 10949 ],
    },
    {
      point_reference: 11209,
      points: [ 11277, 11207, 10949 ],
    },
    {
      point_reference: 10953,
      points: [ 11082, 11084, 10823, 10951 ],
    },
    {
      point_reference: 11026,
      points: [ 11222, 10895, 11024 ],
    },
    {
      point_reference: 11087,
      points: [ 11283, 11285, 11024 ],
    },
    {
      point_reference: 11222,
      points: [ 11285, 11417, 11354, 11026 ],
    },
    {
      point_reference: 11214,
      points: [ 11283, 11344, 11084 ],
    },
    {
      point_reference: 11285,
      points: [ 11477, 11087, 11222 ],
    },
    {
      point_reference: 11283,
      points: [ 11477, 11087, 11214 ],
    },
    {
      point_reference: 11207,
      points: [ 11336, 11204, 10947, 11209 ],
    },
    {
      point_reference: 11277,
      points: [ 11084, 11209 ],
    },
    {
      point_reference: 11204,
      points: [ 11201, 11207 ],
    },
    {
      point_reference: 11336,
      points: [ 11466, 11207 ],
    },
    {
      point_reference: 11201,
      points: [ 11197, 10938, 10944, 11204 ],
    },
    {
      point_reference: 11197,
      points: [ 11390, 10935, 11201 ],
    },
    {
      point_reference: 11502,
      points: [ 11827, 11243 ],
    },
    {
      point_reference: 11247,
      points: [ 11376, 11701, 11249, 11243 ],
    },
    {
      point_reference: 11376,
      points: [ 11505, 11247 ],
    },
    {
      point_reference: 11249,
      points: [ 11316, 11509, 11247 ],
    },
    {
      point_reference: 11505,
      points: [ 11698, 11376 ],
    },
    {
      point_reference: 11698,
      points: [ 11827, 11895, 11505 ],
    },
    {
      point_reference: 11509,
      points: [ 11701, 11446, 11704, 11249 ],
    },
    {
      point_reference: 11316,
      points: [ 11446, 11123, 11249 ],
    },
    {
      point_reference: 11701,
      points: [ 11895, 11247, 11509 ],
    },
    {
      point_reference: 11704,
      points: [ 11897, 11895, 11836, 11509 ],
    },
    {
      point_reference: 11387,
      points: [ 11390, 10935, 11384 ],
    },
    {
      point_reference: 11446,
      points: [ 11509, 11316, 11384 ],
    },
    {
      point_reference: 11390,
      points: [ 11197, 11387 ],
    },
    {
      point_reference: 11466,
      points: [ 11661, 11468, 11336 ],
    },
    {
      point_reference: 11661,
      points: [ 11659, 11791, 11466 ],
    },
    {
      point_reference: 11468,
      points: [ 11406, 11466 ],
    },
    {
      point_reference: 11406,
      points: [ 11344, 11468 ],
    },
    {
      point_reference: 11344,
      points: [ 11474, 11214, 11406 ],
    },
    {
      point_reference: 11474,
      points: [ 11604, 11344 ],
    },
    {
      point_reference: 11604,
      points: [ 11602, 11864, 11474 ],
    },
    {
      point_reference: 11864,
      points: [ 11994, 11604 ],
    },
    {
      point_reference: 11602,
      points: [ 11665, 11604 ],
    },
    {
      point_reference: 11665,
      points: [ 11728, 11602 ],
    },
    {
      point_reference: 11477,
      points: [ 11607, 11283, 11285 ],
    },
    {
      point_reference: 11607,
      points: [ 11737, 11477, 11545 ],
    },
    {
      point_reference: 11417,
      points: [ 11742, 11354, 11222, 11545 ],
    },
    {
      point_reference: 11354,
      points: [ 11356, 11222, 11417 ],
    },
    {
      point_reference: 11742,
      points: [ 11873, 11740, 11417 ],
    },
    {
      point_reference: 11356,
      points: [ 11487, 11354 ],
    },
    {
      point_reference: 11487,
      points: [ 11615, 11619, 11356 ],
    },
    {
      point_reference: 11615,
      points: [ 11683, 11746, 11487 ],
    },
    {
      point_reference: 11619,
      points: [ 11683, 11878, 11487 ],
    },
    {
      point_reference: 11683,
      points: [ 11878, 11746, 11615, 11619 ],
    },
    {
      point_reference: 11878,
      points: [ 12008, 11873, 11619, 11683 ],
    },
    {
      point_reference: 11746,
      points: [ 11873, 11615, 11683 ],
    },
    {
      point_reference: 12008,
      points: [ 12138, 11878 ],
    },
    {
      point_reference: 11740,
      points: [ 11737, 11545, 11742 ],
    },
    {
      point_reference: 11873,
      points: [ 12006, 11878, 11742, 11746 ],
    },
    {
      point_reference: 12006,
      points: [ 12004, 11873 ],
    },
    {
      point_reference: 12004,
      points: [ 12002, 12006 ],
    },
    {
      point_reference: 12002,
      points: [ 12130, 12004 ],
    },
    {
      point_reference: 12130,
      points: [ 12258, 12002 ],
    },
    {
      point_reference: 11737,
      points: [ 11607, 11740 ],
    },
    {
      point_reference: 12122,
      points: [ 12251, 11994 ],
    },
    {
      point_reference: 11728,
      points: [ 11791, 11665 ],
    },
    {
      point_reference: 11791,
      points: [ 11921, 11924, 11661, 11728 ],
    },
    {
      point_reference: 11924,
      points: [ 11921, 12055, 11791 ],
    },
    {
      point_reference: 11921,
      points: [ 12117, 11791, 11924 ],
    },
    {
      point_reference: 12055,
      points: [ 12117, 12251, 11924 ],
    },
    {
      point_reference: 12117,
      points: [ 12249, 11921, 12055 ],
    },
    {
      point_reference: 11722,
      points: [ 11656, 11786, 11659 ],
    },
    {
      point_reference: 11656,
      points: [ 11719, 11722 ],
    },
    {
      point_reference: 11786,
      points: [ 11852, 11849, 11722 ],
    },
    {
      point_reference: 11719,
      points: [ 11783, 11656 ],
    },
    {
      point_reference: 11852,
      points: [ 11916, 11659, 11786 ],
    },
    {
      point_reference: 11783,
      points: [ 11849, 11846, 11719 ],
    },
    {
      point_reference: 11849,
      points: [ 11913, 11979, 11786, 11783 ],
    },
    {
      point_reference: 11846,
      points: [ 11910, 11783 ],
    },
    {
      point_reference: 11913,
      points: [ 11976, 12043, 11849 ],
    },
    {
      point_reference: 11916,
      points: [ 11979, 11852 ],
    },
    {
      point_reference: 11979,
      points: [ 12043, 11849, 11916 ],
    },
    {
      point_reference: 11910,
      points: [ 11976, 12103, 11846 ],
    },
    {
      point_reference: 12043,
      points: [ 12106, 11979, 11913 ],
    },
    {
      point_reference: 12106,
      points: [ 12170, 12043 ],
    },
    {
      point_reference: 11976,
      points: [ 11910, 11913, 12040 ],
    },
    {
      point_reference: 11827,
      points: [ 11956, 12024, 11502, 11698 ],
    },
    {
      point_reference: 11836,
      points: [ 11900, 11904, 11773, 11704 ],
    },
    {
      point_reference: 11895,
      points: [ 12024, 11698, 11701, 11704 ],
    },
    {
      point_reference: 11904,
      points: [ 12032, 12035, 11836 ],
    },
    {
      point_reference: 12035,
      points: [ 12163, 12103, 11904 ],
    },
    {
      point_reference: 12032,
      points: [ 12163, 11900, 11904 ],
    },
    {
      point_reference: 12103,
      points: [ 12170, 12363, 11910, 12040, 12035 ],
    },
    {
      point_reference: 11900,
      points: [ 11897, 11836, 12032 ],
    },
    {
      point_reference: 12163,
      points: [ 12294, 12420, 12035, 12032 ],
    },
    {
      point_reference: 11897,
      points: [ 12090, 12024, 11704, 11900 ],
    },
    {
      point_reference: 12090,
      points: [ 12217, 11897 ],
    },
    {
      point_reference: 11956,
      points: [ 12217, 11827 ],
    },
    {
      point_reference: 12024,
      points: [ 12217, 11897, 11895, 11827 ],
    },
    {
      point_reference: 12217,
      points: [ 12347, 11956, 12024, 12090 ],
    },
    {
      point_reference: 12347,
      points: [ 12477, 12217 ],
    },
    {
      point_reference: 12477,
      points: [ 12607, 12347 ],
    },
    {
      point_reference: 12607,
      points: [ 12676, 12736, 12477 ],
    },
    {
      point_reference: 12736,
      points: [ 12804, 12607 ],
    },
    {
      point_reference: 12420,
      points: [ 12548, 12294, 12163 ],
    },
    {
      point_reference: 12548,
      points: [ 12676, 12420 ],
    },
    {
      point_reference: 12676,
      points: [ 12617, 12804, 12607, 12548 ],
    },
    {
      point_reference: 12294,
      points: [ 12424, 12163, 12420, 12166 ],
    },
    {
      point_reference: 12424,
      points: [ 12617, 12294 ],
    },
    {
      point_reference: 12617,
      points: [ 12745, 12676, 12424 ],
    },
    {
      point_reference: 12745,
      points: [ 12804, 12873, 12617 ],
    },
    {
      point_reference: 12363,
      points: [ 12166, 12103 ],
    },
    {
      point_reference: 12170,
      points: [ 12103, 12106 ],
    },
    {
      point_reference: 12249,
      points: [ 12251, 12312, 12117 ],
    },
    {
      point_reference: 12312,
      points: [ 12380, 12440, 12180, 12249 ],
    },
    {
      point_reference: 12180,
      points: [ 12178, 12312 ],
    },
    {
      point_reference: 12178,
      points: [ 12240, 12180 ],
    },
    {
      point_reference: 12240,
      points: [ 12368, 12178 ],
    },
    {
      point_reference: 12368,
      points: [ 12564, 12240 ],
    },
    {
      point_reference: 12564,
      points: [ 12759, 12368 ],
    },
    {
      point_reference: 12759,
      points: [ 12891, 12564 ],
    },
    {
      point_reference: 12251,
      points: [ 12380, 12055, 12249, 12122 ],
    },
    {
      point_reference: 12380,
      points: [ 12508, 12312, 12251 ],
    },
    {
      point_reference: 12508,
      points: [ 12636, 12506, 12380 ],
    },
    {
      point_reference: 12506,
      points: [ 12636, 12440, 12508 ],
    },
    {
      point_reference: 12636,
      points: [ 12639, 12508, 12506 ],
    },
    {
      point_reference: 12440,
      points: [ 12312, 12506 ],
    },
    {
      point_reference: 12322,
      points: [ 12385, 12258 ],
    },
    {
      point_reference: 12385,
      points: [ 12391, 12452, 12449, 12322 ],
    },
    {
      point_reference: 12449,
      points: [ 12452, 12710, 12512, 12385 ],
    },
    {
      point_reference: 12391,
      points: [ 12781, 12455, 12385 ],
    },
    {
      point_reference: 12512,
      points: [ 12576, 12449 ],
    },
    {
      point_reference: 12576,
      points: [ 12639, 12512 ],
    },
    {
      point_reference: 12639,
      points: [ 12771, 12636, 12576 ],
    },
    {
      point_reference: 12771,
      points: [ 12838, 12639 ],
    },
    {
      point_reference: 12455,
      points: [ 12452, 12715, 12391 ],
    },
    {
      point_reference: 12452,
      points: [ 12584, 12646, 12385, 12449, 12455 ],
    },
    {
      point_reference: 12715,
      points: [ 12781, 12646, 12584, 12455 ],
    },
    {
      point_reference: 12584,
      points: [ 12715, 12452 ],
    },
    {
      point_reference: 12646,
      points: [ 12710, 12452, 12715 ],
    },
    {
      point_reference: 12710,
      points: [ 12781, 12449, 12646 ],
    },
    {
      point_reference: 12781,
      points: [ 12784, 12912, 12975, 12391, 12715, 12710 ],
    },
    {
      point_reference: 12135,
      points: [ 12138, 12133 ],
    },
    {
      point_reference: 12138,
      points: [ 12269, 12267, 12008, 12135 ],
    },
    {
      point_reference: 12269,
      points: [ 12530, 12267, 12138 ],
    },
    {
      point_reference: 12267,
      points: [ 12397, 12265, 12138, 12269 ],
    },
    {
      point_reference: 12265,
      points: [ 12133, 12267 ],
    },
    {
      point_reference: 12397,
      points: [ 12530, 12527, 12267 ],
    },
    {
      point_reference: 12530,
      points: [ 12658, 12269, 12397 ],
    },
    {
      point_reference: 12527,
      points: [ 12655, 12397 ],
    },
    {
      point_reference: 12658,
      points: [ 12655, 12786, 12530 ],
    },
    {
      point_reference: 12655,
      points: [ 12784, 12527, 12658 ],
    },
    {
      point_reference: 12786,
      points: [ 12914, 12658 ],
    },
    {
      point_reference: 12804,
      points: [ 12932, 12676, 12736, 12745 ],
    },
    {
      point_reference: 12873,
      points: [ 12932, 13067, 12745 ],
    },
    {
      point_reference: 12932,
      points: [ 13127, 12804, 12873 ],
    },
    {
      point_reference: 13067,
      points: [ 13197, 13127, 12873 ],
    },
    {
      point_reference: 13127,
      points: [ 13257, 12932, 13067 ],
    },
    {
      point_reference: 13197,
      points: [ 13327, 13257, 13067 ],
    },
    {
      point_reference: 13257,
      points: [ 13387, 13127, 13197 ],
    },
    {
      point_reference: 13327,
      points: [ 13387, 13265, 13457, 13197 ],
    },
    {
      point_reference: 13265,
      points: [ 13528, 13327 ],
    },
    {
      point_reference: 13387,
      points: [ 13517, 13257, 13327 ],
    },
    {
      point_reference: 12891,
      points: [ 13023, 12759 ],
    },
    {
      point_reference: 13023,
      points: [ 13026, 12891 ],
    },
    {
      point_reference: 13026,
      points: [ 13095, 13023 ],
    },
    {
      point_reference: 13095,
      points: [ 13162, 13543, 13026 ],
    },
    {
      point_reference: 13162,
      points: [ 13418, 13165, 13095 ],
    },
    {
      point_reference: 13165,
      points: [ 13168, 13296, 13423, 13162 ],
    },
    {
      point_reference: 13168,
      points: [ 13107, 13296, 13165 ],
    },
    {
      point_reference: 13296,
      points: [ 13423, 13555, 13165, 13168 ],
    },
    {
      point_reference: 13555,
      points: [ 13423, 13296 ],
    },
    {
      point_reference: 12838,
      points: [ 12904, 12771 ],
    },
    {
      point_reference: 12904,
      points: [ 12971, 12838 ],
    },
    {
      point_reference: 12971,
      points: [ 13037, 12904 ],
    },
    {
      point_reference: 13037,
      points: [ 12975, 12971 ],
    },
    {
      point_reference: 12784,
      points: [ 12914, 12655, 12781 ],
    },
    {
      point_reference: 12912,
      points: [ 13107, 12781 ],
    },
    {
      point_reference: 12975,
      points: [ 13107, 13037, 12781 ],
    },
    {
      point_reference: 12914,
      points: [ 13107, 12784, 12786 ],
    },
    {
      point_reference: 13107,
      points: [ 13168, 12914, 12912, 12975 ],
    },
    {
      point_reference: 13517,
      points: [ 13457, 13649, 13387 ],
    },
    {
      point_reference: 13649,
      points: [ 13589, 13781, 13517 ],
    },
    {
      point_reference: 13457,
      points: [ 13589, 13327, 13517 ],
    },
    {
      point_reference: 13781,
      points: [ 13914, 13649 ],
    },
    {
      point_reference: 13589,
      points: [ 13656, 13649, 13457 ],
    },
    {
      point_reference: 13656,
      points: [ 13719, 13790, 13528, 13589 ],
    },
    {
      point_reference: 13719,
      points: [ 13914, 13656 ],
    },
    {
      point_reference: 13528,
      points: [ 13530, 13793, 13265, 13656 ],
    },
    {
      point_reference: 13790,
      points: [ 13793, 13914, 13656 ],
    },
    {
      point_reference: 13914,
      points: [ 13790, 13781, 13719 ],
    },
    {
      point_reference: 13530,
      points: [ 13535, 13796, 13528 ],
    },
    {
      point_reference: 13535,
      points: [ 13799, 13539, 13530 ],
    },
    {
      point_reference: 13539,
      points: [ 13802, 13543, 13535 ],
    },
    {
      point_reference: 13543,
      points: [ 13742, 13095, 13539 ],
    },
    {
      point_reference: 13793,
      points: [ 13796, 13528, 13790 ],
    },
    {
      point_reference: 13796,
      points: [ 13799, 13530, 13793 ],
    },
    {
      point_reference: 13799,
      points: [ 13802, 13535, 13796 ],
    },
    {
      point_reference: 13802,
      points: [ 13742, 13539, 13799 ],
    },
    {
      point_reference: 13742,
      points: [ 13681, 13543, 13802 ],
    },
    {
      point_reference: 13681,
      points: [ 13418, 13742 ],
    },
    {
      point_reference: 13418,
      points: [ 13423, 13162, 13681 ],
    },
    {
      point_reference: 13423,
      points: [ 13555, 13165, 13296, 13418 ],
    },
    {
      point_reference: 11241,
      points: [ 11243 ],
    },
    {
      point_reference: 11773,
      points: [ 11836 ],
    },
    {
      point_reference: 20025,
      points: [ 20063, 20067 ],
    },
    {
      point_reference: 20063,
      points: [ 20025, 20042, 20075 ],
    },
    {
      point_reference: 20067,
      points: [ 20025, 20047, 20075 ],
    },
    {
      point_reference: 20042,
      points: [ 20063, 10310 ],
    },
    {
      point_reference: 20047,
      points: [ 20067, 10576 ],
    },
    {
      point_reference: 20075,
      points: [ 20063, 20067, 10904 ],
    },
    {
      point_reference: 30000,
      points: [],
    },
    {
      point_reference: 30001,
      points: [],
    },
    {
      point_reference: 30002,
      points: [],
    },
    {
      point_reference: 30003,
      points: [],
    },
    {
      point_reference: 30004,
      points: [],
    },
    {
      point_reference: 30005,
      points: [],
    },
    {
      point_reference: 10304,
      points: [ 10436, 10564, 10562 ],
    },
    {
      point_reference: 10308,
      points: [ 10436, 10310, 10569 ],
    },
    {
      point_reference: 11545,
      points: [ 11607, 11740, 11417 ],
    },
    {
      point_reference: 12040,
      points: [ 11976, 12103 ],
    },
    {
      point_reference: 12166,
      points: [ 12294, 12363 ],
    },
    {
      point_reference: 12133,
      points: [ 12135, 12265 ],
    }
  ];
  const arrPoints = [];
  hasPoints.map(items =>{
    items.points.map(point =>{
      arrPoints.push({
        point_reference: items.point_reference,
        related_point_reference: point
      })
    })
  })

  await prisma.pointHasPoints.createMany({
    data: arrPoints
  });

  console.log('Points seeded successfully');
}