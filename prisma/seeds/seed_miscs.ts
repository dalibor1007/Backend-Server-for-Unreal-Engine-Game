import { MiscType, PrismaClient } from '@prisma/client';

export async function seedMiscs(prisma: PrismaClient) {
  const miscs = [
    {
      name: "101",
      module_type: MiscType.SHIELD,
      effect_value: 1.5,
      module_level: 0,
      repair_per_hp: 0.46000000834465027,
      level_required: 0,
      total_hp: 150,
      cost_price: 3500,
      money_type: 0,
      static_mesh: "None",
      reference: 101,
      item_name: "Shield booster",
      icon: "Texture2D'/Game/Assets/Hangar/miscIcons/T_Icon_ShieldBoost.T_Icon_ShieldBoost'",
      description: ""
    },
    {
      name: "102",
      module_type: MiscType.HULL,
      effect_value: 50,
      module_level: 2,
      repair_per_hp: 0.5,
      level_required: 0,
      total_hp: 50,
      cost_price: 5000,
      money_type: 0,
      static_mesh: "None",
      reference: 102,
      item_name: "Hull booster",
      icon: "Texture2D'/Game/Assets/Hangar/miscIcons/T_Icon_HullBoost.T_Icon_HullBoost'",
      description: ""
    },
    {
      name: "103",
      module_type: MiscType.SHIELD,
      effect_value: 1.2999999523162842,
      module_level: 1,
      repair_per_hp: 1.2000000476837158,
      level_required: 0,
      total_hp: 75,
      cost_price: 4500,
      money_type: 0,
      static_mesh: "None",
      reference: 103,
      item_name: "Jump booster",
      icon: "Texture2D'/Game/Assets/Hangar/miscIcons/T_Icon_JumpBoost.T_Icon_JumpBoost'",
      description: ""
    },
    {
      name: "104",
      module_type: MiscType.CARGO,
      effect_value: 50,
      module_level: 0,
      repair_per_hp: 0.60000002384185791,
      level_required: 0,
      total_hp: 100,
      cost_price: 3000,
      money_type: 0,
      static_mesh: "None",
      reference: 104,
      item_name: "Cargo pod",
      icon: "Texture2D'/Game/Assets/Hangar/miscIcons/T_Icon_CargoPod.T_Icon_CargoPod'",
      description: ""
    },
    {
      name: "105",
      module_type: MiscType.SHIELD,
      effect_value: 2,
      module_level: 1,
      repair_per_hp: 8.3299999237060547,
      level_required: 0,
      total_hp: 300,
      cost_price: 50000,
      money_type: 0,
      static_mesh: "None",
      reference: 105,
      item_name: "Shield booster",
      icon: "Texture2D'/Game/Assets/Hangar/miscIcons/T_Icon_ShieldBoost.T_Icon_ShieldBoost'",
      description: ""
    },
    {
      name: "106",
      module_type: MiscType.HULL,
      effect_value: 75,
      module_level: 0,
      repair_per_hp: 42,
      level_required: 0,
      total_hp: 75,
      cost_price: 65000,
      money_type: 0,
      static_mesh: "None",
      reference: 106,
      item_name: "Hull booster",
      icon: "Texture2D'/Game/Assets/Hangar/miscIcons/T_Icon_HullBoost.T_Icon_HullBoost'",
      description: ""
    },
    {
      name: "107",
      module_type: MiscType.SHIELD,
      effect_value: 1.7000000476837158,
      module_level: 2,
      repair_per_hp: 20.329999923706055,
      level_required: 0,
      total_hp: 150,
      cost_price: 55000,
      money_type: 0,
      static_mesh: "None",
      reference: 107,
      item_name: "Jump booster",
      icon: "Texture2D'/Game/Assets/Hangar/miscIcons/T_Icon_JumpBoost.T_Icon_JumpBoost'",
      description: ""
    },
    {
      name: "108",
      module_type: MiscType.CARGO,
      effect_value: 75,
      module_level: 1,
      repair_per_hp: 14.25,
      level_required: 0,
      total_hp: 200,
      cost_price: 40000,
      money_type: 0,
      static_mesh: "None",
      reference: 108,
      item_name: "Cargo pod",
      icon: "Texture2D'/Game/Assets/Hangar/miscIcons/T_Icon_CargoPod.T_Icon_CargoPod'",
      description: ""
    },
    {
      name: "109",
      module_type: MiscType.SHIELD,
      effect_value: 2.2000000476837158,
      module_level: 0,
      repair_per_hp: 11.800000190734863,
      level_required: 0,
      total_hp: 500,
      cost_price: 115000,
      money_type: 0,
      static_mesh: "None",
      reference: 109,
      item_name: "Shield booster",
      icon: "Texture2D'/Game/Assets/Hangar/miscIcons/T_Icon_ShieldBoost.T_Icon_ShieldBoost'",
      description: ""
    },
    {
      name: "110",
      module_type: MiscType.HULL,
      effect_value: 100,
      module_level: 2,
      repair_per_hp: 63,
      level_required: 0,
      total_hp: 100,
      cost_price: 145000,
      money_type: 0,
      static_mesh: "None",
      reference: 110,
      item_name: "Hull booster",
      icon: "Texture2D'/Game/Assets/Hangar/miscIcons/T_Icon_HullBoost.T_Icon_HullBoost'",
      description: ""
    },
    {
      name: "111",
      module_type: MiscType.SHIELD,
      effect_value: 2,
      module_level: 0,
      repair_per_hp: 24.399999618530273,
      level_required: 0,
      total_hp: 250,
      cost_price: 125000,
      money_type: 0,
      static_mesh: "None",
      reference: 111,
      item_name: "Jump booster",
      icon: "Texture2D'/Game/Assets/Hangar/miscIcons/T_Icon_JumpBoost.T_Icon_JumpBoost'",
      description: ""
    },
    {
      name: "112",
      module_type: MiscType.CARGO,
      effect_value: 100,
      module_level: 2,
      repair_per_hp: 19,
      level_required: 0,
      total_hp: 300,
      cost_price: 100000,
      money_type: 0,
      static_mesh: "None",
      reference: 112,
      item_name: "Cargo pod",
      icon: "Texture2D'/Game/Assets/Hangar/miscIcons/T_Icon_CargoPod.T_Icon_CargoPod'",
      description: ""
    }
  ];

  await prisma.miscs.createMany({
    data: miscs,
  });

  console.log('Miscs seeded successfully');
}