import {
  Suit,
  CardType,
  BasicType,
  FunctionalType,
  EquipmentType
} from './constants';

let id = 0;

function addId ({ suit, value, type, effectType, isGiveable }) {
  return {
    id: id++,
    suit,
    value,
    type,
    effectType,
    isGiveable
  };
}

export const BasicDeck = [
  {
    suit: Suit.Spade,
    value: 1,
    type: CardType.Functional,
    effectType: FunctionalType.Lightning,
    isGiveable: false
  },
  {
    suit: Suit.Spade,
    value: 1,
    type: CardType.Functional,
    effectType: FunctionalType.Duel,
    isGiveable: false
  },
  {
    suit: Suit.Spade,
    value: 2,
    type: CardType.Equipment,
    effectType: EquipmentType.Double,
    isGiveable: false
  },
  {
    suit: Suit.Spade,
    value: 2,
    type: CardType.Equipment,
    effectType: EquipmentType.EightTrigrams,
    isGiveable: false
  },
  {
    suit: Suit.Spade,
    value: 2,
    type: CardType.Equipment,
    effectType: EquipmentType.FrostBlade,
    isGiveable: false
  },
  {
    suit: Suit.Spade,
    value: 3,
    type: CardType.Functional,
    effectType: FunctionalType.Steal,
    isGiveable: false
  },
  {
    suit: Suit.Spade,
    value: 3,
    type: CardType.Functional,
    effectType: FunctionalType.Dismantle,
    isGiveable: false
  },
  {
    suit: Suit.Spade,
    value: 4,
    type: CardType.Functional,
    effectType: FunctionalType.Steal,
    isGiveable: false
  },
  {
    suit: Suit.Spade,
    value: 4,
    type: CardType.Functional,
    effectType: FunctionalType.Dismantle,
    isGiveable: false
  },
  {
    suit: Suit.Spade,
    value: 5,
    type: CardType.Basic,
    effectType: BasicType.Attack,
    isGiveable: false
  },
  {
    suit: Suit.Spade,
    value: 5,
    type: CardType.Equipment,
    effectType: EquipmentType.DefenseHorse,
    isGiveable: false
  },
  {
    suit: Suit.Spade,
    value: 6,
    type: CardType.Basic,
    effectType: BasicType.LightningAttack,
    isGiveable: false
  },
  {
    suit: Suit.Spade,
    value: 6,
    type: CardType.Equipment,
    effectType: EquipmentType.BlueBlade,
    isGiveable: false
  },
  {
    suit: Suit.Spade,
    value: 7,
    type: CardType.Basic,
    effectType: BasicType.LightningAttack,
    isGiveable: false
  },
  {
    suit: Suit.Spade,
    value: 7,
    type: CardType.Basic,
    effectType: BasicType.Attack,
    isGiveable: false
  },
  {
    suit: Suit.Spade,
    value: 8,
    type: CardType.Basic,
    effectType: BasicType.Attack,
    isGiveable: false
  },
  {
    suit: Suit.Spade,
    value: 8,
    type: CardType.Basic,
    effectType: BasicType.Attack,
    isGiveable: false
  },
  {
    suit: Suit.Spade,
    value: 9,
    type: CardType.Basic,
    effectType: BasicType.Attack,
    isGiveable: false
  },
  {
    suit: Suit.Spade,
    value: 9,
    type: CardType.Basic,
    effectType: BasicType.Wine,
    isGiveable: false
  },
  {
    suit: Suit.Spade,
    value: 10,
    type: CardType.Functional,
    effectType: FunctionalType.RationsDepleted,
    isGiveable: false
  },
  {
    suit: Suit.Spade,
    value: 10,
    type: CardType.Basic,
    effectType: BasicType.Attack,
    isGiveable: false
  },
  {
    suit: Suit.Spade,
    value: 11,
    type: CardType.Functional,
    effectType: FunctionalType.Negate,
    isGiveable: false
  },
  {
    suit: Suit.Spade,
    value: 11,
    type: CardType.Basic,
    effectType: BasicType.Attack,
    isGiveable: false
  },
  {
    suit: Suit.Spade,
    value: 12,
    type: CardType.Equipment,
    effectType: EquipmentType.Halberd,
    isGiveable: false
  },
  {
    suit: Suit.Spade,
    value: 12,
    type: CardType.Functional,
    effectType: FunctionalType.IronChain,
    isGiveable: false
  },
  {
    suit: Suit.Spade,
    value: 13,
    type: CardType.Equipment,
    effectType: EquipmentType.OffenseHorse,
    isGiveable: false
  },
  {
    suit: Suit.Spade,
    value: 13,
    type: CardType.Functional,
    effectType: FunctionalType.Barbarians,
    isGiveable: false
  },
  {
    suit: Suit.Heart,
    value: 1,
    type: CardType.Functional,
    effectType: FunctionalType.RainingArrows,
    isGiveable: false
  },
  {
    suit: Suit.Heart,
    value: 1,
    type: CardType.Functional,
    effectType: FunctionalType.PeachGarden,
    isGiveable: false
  },
  {
    suit: Suit.Heart,
    value: 2,
    type: CardType.Functional,
    effectType: FunctionalType.Blaze,
    isGiveable: false
  },
  {
    suit: Suit.Heart,
    value: 2,
    type: CardType.Basic,
    effectType: BasicType.Dodge,
    isGiveable: false
  },
  {
    suit: Suit.Heart,
    value: 3,
    type: CardType.Functional,
    effectType: FunctionalType.Blaze,
    isGiveable: false
  },
  {
    suit: Suit.Heart,
    value: 3,
    type: CardType.Functional,
    effectType: FunctionalType.Harvest,
    isGiveable: false
  },
  {
    suit: Suit.Heart,
    value: 4,
    type: CardType.Basic,
    effectType: BasicType.FireAttack,
    isGiveable: false
  },
  {
    suit: Suit.Heart,
    value: 4,
    type: CardType.Basic,
    effectType: BasicType.Peach,
    isGiveable: false
  },
  {
    suit: Suit.Heart,
    value: 5,
    type: CardType.Equipment,
    effectType: EquipmentType.Bow,
    isGiveable: false
  },
  {
    suit: Suit.Heart,
    value: 5,
    type: CardType.Equipment,
    effectType: EquipmentType.OffenseHorse,
    isGiveable: false
  },
  {
    suit: Suit.Heart,
    value: 6,
    type: CardType.Functional,
    effectType: FunctionalType.Acedia,
    isGiveable: false
  },
  {
    suit: Suit.Heart,
    value: 6,
    type: CardType.Basic,
    effectType: BasicType.Peach,
    isGiveable: false
  },
  {
    suit: Suit.Heart,
    value: 7,
    type: CardType.Functional,
    effectType: FunctionalType.Draw2,
    isGiveable: false
  },
  {
    suit: Suit.Heart,
    value: 7,
    type: CardType.Basic,
    effectType: BasicType.Peach,
    isGiveable: false
  },
  {
    suit: Suit.Heart,
    value: 8,
    type: CardType.Functional,
    effectType: FunctionalType.Draw2,
    isGiveable: false
  },
  {
    suit: Suit.Heart,
    value: 8,
    type: CardType.Basic,
    effectType: BasicType.Peach,
    isGiveable: false
  },
  {
    suit: Suit.Heart,
    value: 9,
    type: CardType.Functional,
    effectType: FunctionalType.Alliance,
    isGiveable: false
  },
  {
    suit: Suit.Heart,
    value: 9,
    type: CardType.Basic,
    effectType: BasicType.Peach,
    isGiveable: false
  },
  {
    suit: Suit.Heart,
    value: 10,
    type: CardType.Basic,
    effectType: BasicType.Attack,
    isGiveable: false
  },
  {
    suit: Suit.Heart,
    value: 10,
    type: CardType.Basic,
    effectType: BasicType.Peach,
    isGiveable: false
  },
  {
    suit: Suit.Heart,
    value: 11,
    type: CardType.Functional,
    effectType: FunctionalType.Amass,
    isGiveable: false
  },
  {
    suit: Suit.Heart,
    value: 11,
    type: CardType.Basic,
    effectType: BasicType.Dodge,
    isGiveable: false
  },
  {
    suit: Suit.Heart,
    value: 12,
    type: CardType.Functional,
    effectType: FunctionalType.Dismantle,
    isGiveable: false
  },
  {
    suit: Suit.Heart,
    value: 12,
    type: CardType.Basic,
    effectType: BasicType.Attack,
    isGiveable: false
  },
  {
    suit: Suit.Heart,
    value: 12,
    type: CardType.Basic,
    effectType: BasicType.Peach,
    isGiveable: false
  },
  {
    suit: Suit.Heart,
    value: 13,
    type: CardType.Basic,
    effectType: BasicType.Dodge,
    isGiveable: false
  },
  {
    suit: Suit.Heart,
    value: 13,
    type: CardType.Equipment,
    effectType: EquipmentType.DefenseHorse,
    isGiveable: false
  },
  {
    suit: Suit.Club,
    value: 1,
    type: CardType.Equipment,
    effectType: EquipmentType.SliverLionHelmet,
    isGiveable: false
  },
  {
    suit: Suit.Club,
    value: 1,
    type: CardType.Functional,
    effectType: FunctionalType.Duel,
    isGiveable: false
  },
  {
    suit: Suit.Club,
    value: 2,
    type: CardType.Basic,
    effectType: BasicType.Attack,
    isGiveable: false
  },
  {
    suit: Suit.Club,
    value: 2,
    type: CardType.Equipment,
    effectType: EquipmentType.RattanArmour,
    isGiveable: false
  },
  {
    suit: Suit.Club,
    value: 2,
    type: CardType.Equipment,
    effectType: EquipmentType.RenWangShield,
    isGiveable: false
  },
  {
    suit: Suit.Club,
    value: 3,
    type: CardType.Functional,
    effectType: FunctionalType.Ascertain,
    isGiveable: false
  },
  {
    suit: Suit.Club,
    value: 3,
    type: CardType.Basic,
    effectType: BasicType.Attack,
    isGiveable: false
  },
  {
    suit: Suit.Club,
    value: 4,
    type: CardType.Functional,
    effectType: FunctionalType.Ascertain,
    isGiveable: false
  },
  {
    suit: Suit.Club,
    value: 4,
    type: CardType.Basic,
    effectType: BasicType.Attack,
    isGiveable: false
  },
  {
    suit: Suit.Club,
    value: 5,
    type: CardType.Equipment,
    effectType: EquipmentType.DefenseHorse,
    isGiveable: false
  },
  {
    suit: Suit.Club,
    value: 5,
    type: CardType.Basic,
    effectType: BasicType.Attack,
    isGiveable: false
  },
  {
    suit: Suit.Club,
    value: 6,
    type: CardType.Basic,
    effectType: BasicType.LightningAttack,
    isGiveable: false
  },
  {
    suit: Suit.Club,
    value: 6,
    type: CardType.Functional,
    effectType: FunctionalType.Acedia,
    isGiveable: false
  },
  {
    suit: Suit.Club,
    value: 7,
    type: CardType.Basic,
    effectType: BasicType.LightningAttack,
    isGiveable: false
  },
  {
    suit: Suit.Club,
    value: 7,
    type: CardType.Functional,
    effectType: FunctionalType.Barbarians,
    isGiveable: false
  },
  {
    suit: Suit.Club,
    value: 8,
    type: CardType.Basic,
    effectType: BasicType.LightningAttack,
    isGiveable: false
  },
  {
    suit: Suit.Club,
    value: 8,
    type: CardType.Basic,
    effectType: BasicType.Attack,
    isGiveable: false
  },
  {
    suit: Suit.Club,
    value: 9,
    type: CardType.Basic,
    effectType: BasicType.Wine,
    isGiveable: false
  },
  {
    suit: Suit.Club,
    value: 9,
    type: CardType.Basic,
    effectType: BasicType.Attack,
    isGiveable: false
  },
  {
    suit: Suit.Club,
    value: 10,
    type: CardType.Functional,
    effectType: FunctionalType.RationsDepleted,
    isGiveable: false
  },
  {
    suit: Suit.Club,
    value: 10,
    type: CardType.Basic,
    effectType: BasicType.Attack,
    isGiveable: false
  },
  {
    suit: Suit.Club,
    value: 11,
    type: CardType.Basic,
    effectType: BasicType.Attack,
    isGiveable: false
  },
  {
    suit: Suit.Club,
    value: 11,
    type: CardType.Basic,
    effectType: BasicType.Attack,
    isGiveable: false
  },
  {
    suit: Suit.Club,
    value: 12,
    type: CardType.Functional,
    effectType: FunctionalType.Duress,
    isGiveable: false
  },
  {
    suit: Suit.Club,
    value: 12,
    type: CardType.Functional,
    effectType: FunctionalType.IronChain,
    isGiveable: false
  },
  {
    suit: Suit.Club,
    value: 13,
    type: CardType.Functional,
    effectType: FunctionalType.NegateKingdom,
    isGiveable: false
  },
  {
    suit: Suit.Club,
    value: 13,
    type: CardType.Functional,
    effectType: FunctionalType.IronChain,
    isGiveable: false
  },
  {
    suit: Suit.Diamond,
    value: 1,
    type: CardType.Equipment,
    effectType: EquipmentType.Fan,
    isGiveable: false
  },
  {
    suit: Suit.Diamond,
    value: 1,
    type: CardType.Equipment,
    effectType: EquipmentType.CrossBow,
    isGiveable: false
  },
  {
    suit: Suit.Diamond,
    value: 2,
    type: CardType.Basic,
    effectType: BasicType.Dodge,
    isGiveable: false
  },
  {
    suit: Suit.Diamond,
    value: 2,
    type: CardType.Basic,
    effectType: BasicType.Peach,
    isGiveable: false
  },
  {
    suit: Suit.Diamond,
    value: 3,
    type: CardType.Basic,
    effectType: BasicType.Dodge,
    isGiveable: false
  },
  {
    suit: Suit.Diamond,
    value: 3,
    type: CardType.Functional,
    effectType: FunctionalType.Steal,
    isGiveable: false
  },
  {
    suit: Suit.Diamond,
    value: 4,
    type: CardType.Basic,
    effectType: BasicType.FireAttack,
    isGiveable: false
  },
  {
    suit: Suit.Diamond,
    value: 4,
    type: CardType.Functional,
    effectType: FunctionalType.Amass,
    isGiveable: false
  },
  {
    suit: Suit.Diamond,
    value: 5,
    type: CardType.Basic,
    effectType: BasicType.FireAttack,
    isGiveable: false
  },
  {
    suit: Suit.Diamond,
    value: 5,
    type: CardType.Equipment,
    effectType: EquipmentType.Axe,
    isGiveable: false
  },
  {
    suit: Suit.Diamond,
    value: 6,
    type: CardType.Basic,
    effectType: BasicType.Dodge,
    isGiveable: false
  },
  {
    suit: Suit.Diamond,
    value: 6,
    type: CardType.Equipment,
    effectType: EquipmentType.SixBlade,
    isGiveable: false
  },
  {
    suit: Suit.Diamond,
    value: 7,
    type: CardType.Basic,
    effectType: BasicType.Dodge,
    isGiveable: false
  },
  {
    suit: Suit.Diamond,
    value: 7,
    type: CardType.Basic,
    effectType: BasicType.Dodge,
    isGiveable: false
  },
  {
    suit: Suit.Diamond,
    value: 8,
    type: CardType.Basic,
    effectType: BasicType.Dodge,
    isGiveable: false
  },
  {
    suit: Suit.Diamond,
    value: 8,
    type: CardType.Basic,
    effectType: BasicType.Dodge,
    isGiveable: false
  },
  {
    suit: Suit.Diamond,
    value: 9,
    type: CardType.Basic,
    effectType: BasicType.Dodge,
    isGiveable: false
  },
  {
    suit: Suit.Diamond,
    value: 9,
    type: CardType.Basic,
    effectType: BasicType.Wine,
    isGiveable: false
  },
  {
    suit: Suit.Diamond,
    value: 10,
    type: CardType.Basic,
    effectType: BasicType.Dodge,
    isGiveable: false
  },
  {
    suit: Suit.Diamond,
    value: 10,
    type: CardType.Basic,
    effectType: BasicType.Attack,
    isGiveable: false
  },
  {
    suit: Suit.Diamond,
    value: 11,
    type: CardType.Basic,
    effectType: BasicType.Dodge,
    isGiveable: false
  },
  {
    suit: Suit.Diamond,
    value: 11,
    type: CardType.Basic,
    effectType: BasicType.Attack,
    isGiveable: false
  },
  {
    suit: Suit.Diamond,
    value: 12,
    type: CardType.Equipment,
    effectType: EquipmentType.Trident,
    isGiveable: false
  },
  {
    suit: Suit.Diamond,
    value: 12,
    type: CardType.Basic,
    effectType: BasicType.Attack,
    isGiveable: false
  },
  {
    suit: Suit.Diamond,
    value: 12,
    type: CardType.Functional,
    effectType: FunctionalType.NegateKingdom,
    isGiveable: false
  },
  {
    suit: Suit.Diamond,
    value: 13,
    type: CardType.Equipment,
    effectType: EquipmentType.OffenseHorse,
    isGiveable: false
  },
  {
    suit: Suit.Diamond,
    value: 13,
    type: CardType.Basic,
    effectType: BasicType.Dodge,
    isGiveable: false
  }
].map(addId);

export const PotentialExpansionDeck = [
  {
    suit: Suit.Spade,
    value: 1,
    type: CardType.Functional,
    effectType: FunctionalType.OneMoreRound,
    isGiveable: true
  },
  {
    suit: Suit.Spade,
    value: 2,
    type: CardType.Equipment,
    effectType: EquipmentType.FireArmor,
    isGiveable: false
  },
  {
    suit: Suit.Spade,
    value: 3,
    type: CardType.Functional,
    effectType: FunctionalType.BlazeTogether,
    isGiveable: true
  },
  {
    suit: Suit.Spade,
    value: 4,
    type: CardType.Basic,
    effectType: BasicType.Attack,
    isGiveable: false
  },
  {
    suit: Suit.Spade,
    value: 5,
    type: CardType.Equipment,
    effectType: EquipmentType.Dragon,
    isGiveable: false
  },
  {
    suit: Suit.Spade,
    value: 6,
    type: CardType.Basic,
    effectType: BasicType.Wine,
    isGiveable: true
  },
  {
    suit: Suit.Spade,
    value: 7,
    type: CardType.Basic,
    effectType: BasicType.Attack,
    isGiveable: false
  },
  {
    suit: Suit.Spade,
    value: 8,
    type: CardType.Basic,
    effectType: BasicType.Attack,
    isGiveable: false
  },
  {
    suit: Suit.Spade,
    value: 9,
    type: CardType.Basic,
    effectType: BasicType.LightningAttack,
    isGiveable: false
  },
  {
    suit: Suit.Spade,
    value: 10,
    type: CardType.Basic,
    effectType: BasicType.LightningAttack,
    isGiveable: false
  },
  {
    suit: Suit.Spade,
    value: 11,
    type: CardType.Basic,
    effectType: BasicType.LightningAttack,
    isGiveable: true
  },
  {
    suit: Suit.Spade,
    value: 12,
    type: CardType.Functional,
    effectType: FunctionalType.ChainTogether,
    isGiveable: false
  },
  {
    suit: Suit.Spade,
    value: 13,
    type: CardType.Functional,
    effectType: FunctionalType.Negate,
    isGiveable: false
  },
  {
    suit: Suit.Heart,
    value: 1,
    type: CardType.Functional,
    effectType: FunctionalType.Banquet,
    isGiveable: false
  },
  {
    suit: Suit.Heart,
    value: 2,
    type: CardType.Functional,
    effectType: FunctionalType.Exile,
    isGiveable: false
  },
  {
    suit: Suit.Heart,
    value: 3,
    type: CardType.Equipment,
    effectType: EquipmentType.OffenseHorse,
    isGiveable: true
  },
  {
    suit: Suit.Heart,
    value: 4,
    type: CardType.Basic,
    effectType: BasicType.Dodge,
    isGiveable: false
  },
  {
    suit: Suit.Heart,
    value: 5,
    type: CardType.Basic,
    effectType: BasicType.Dodge,
    isGiveable: false
  },
  {
    suit: Suit.Heart,
    value: 6,
    type: CardType.Basic,
    effectType: BasicType.Dodge,
    isGiveable: false
  },
  {
    suit: Suit.Heart,
    value: 7,
    type: CardType.Basic,
    effectType: BasicType.Dodge,
    isGiveable: false
  },
  {
    suit: Suit.Heart,
    value: 8,
    type: CardType.Basic,
    effectType: BasicType.Peach,
    isGiveable: false
  },
  {
    suit: Suit.Heart,
    value: 9,
    type: CardType.Basic,
    effectType: BasicType.Peach,
    isGiveable: false
  },
  {
    suit: Suit.Heart,
    value: 10,
    type: CardType.Basic,
    effectType: BasicType.Attack,
    isGiveable: false
  },
  {
    suit: Suit.Heart,
    value: 11,
    type: CardType.Basic,
    effectType: BasicType.Attack,
    isGiveable: false
  },
  {
    suit: Suit.Heart,
    value: 12,
    type: CardType.Functional,
    effectType: FunctionalType.BlazeTogether,
    isGiveable: true
  },
  {
    suit: Suit.Heart,
    value: 13,
    type: CardType.Functional,
    effectType: FunctionalType.Disarm,
    isGiveable: false
  },
  {
    suit: Suit.Club,
    value: 1,
    type: CardType.Equipment,
    effectType: EquipmentType.JadeSeal,
    isGiveable: false
  },
  {
    suit: Suit.Club,
    value: 2,
    type: CardType.Equipment,
    effectType: EquipmentType.HeartShield,
    isGiveable: true
  },
  {
    suit: Suit.Club,
    value: 3,
    type: CardType.Functional,
    effectType: FunctionalType.ShowYourself,
    isGiveable: false
  },
  {
    suit: Suit.Club,
    value: 4,
    type: CardType.Basic,
    effectType: BasicType.Attack,
    isGiveable: false
  },
  {
    suit: Suit.Club,
    value: 5,
    type: CardType.Basic,
    effectType: BasicType.LightningAttack,
    isGiveable: true
  },
  {
    suit: Suit.Club,
    value: 6,
    type: CardType.Basic,
    effectType: BasicType.Attack,
    isGiveable: false
  },
  {
    suit: Suit.Club,
    value: 7,
    type: CardType.Basic,
    effectType: BasicType.Attack,
    isGiveable: false
  },
  {
    suit: Suit.Club,
    value: 8,
    type: CardType.Basic,
    effectType: BasicType.Attack,
    isGiveable: false
  },
  {
    suit: Suit.Club,
    value: 9,
    type: CardType.Basic,
    effectType: BasicType.Wine,
    isGiveable: false
  },
  {
    suit: Suit.Club,
    value: 10,
    type: CardType.Functional,
    effectType: FunctionalType.ChainTogether,
    isGiveable: false
  },
  {
    suit: Suit.Club,
    value: 11,
    type: CardType.Functional,
    effectType: FunctionalType.BlazeTogether,
    isGiveable: true
  },
  {
    suit: Suit.Club,
    value: 12,
    type: CardType.Functional,
    effectType: FunctionalType.Disarm,
    isGiveable: false
  },
  {
    suit: Suit.Club,
    value: 13,
    type: CardType.Functional,
    effectType: FunctionalType.NegateKingdom,
    isGiveable: false
  },
  {
    suit: Suit.Diamond,
    value: 1,
    type: CardType.Functional,
    effectType: FunctionalType.OneMoreRound,
    isGiveable: true
  },
  {
    suit: Suit.Diamond,
    value: 2,
    type: CardType.Basic,
    effectType: BasicType.Peach,
    isGiveable: false
  },
  {
    suit: Suit.Diamond,
    value: 3,
    type: CardType.Basic,
    effectType: BasicType.Peach,
    isGiveable: true
  },
  {
    suit: Suit.Diamond,
    value: 4,
    type: CardType.Functional,
    effectType: FunctionalType.OneMoreRound,
    isGiveable: true
  },
  {
    suit: Suit.Diamond,
    value: 5,
    type: CardType.Equipment,
    effectType: EquipmentType.WoodHorse,
    isGiveable: false
  },
  {
    suit: Suit.Diamond,
    value: 6,
    type: CardType.Basic,
    effectType: BasicType.Dodge,
    isGiveable: false
  },
  {
    suit: Suit.Diamond,
    value: 7,
    type: CardType.Basic,
    effectType: BasicType.Dodge,
    isGiveable: false
  },
  {
    suit: Suit.Diamond,
    value: 8,
    type: CardType.Basic,
    effectType: BasicType.FireAttack,
    isGiveable: false
  },
  {
    suit: Suit.Diamond,
    value: 9,
    type: CardType.Basic,
    effectType: BasicType.FireAttack,
    isGiveable: false
  },
  {
    suit: Suit.Diamond,
    value: 10,
    type: CardType.Functional,
    effectType: FunctionalType.Exile,
    isGiveable: true
  },
  {
    suit: Suit.Diamond,
    value: 11,
    type: CardType.Functional,
    effectType: FunctionalType.NegateKingdom,
    isGiveable: false
  },
  {
    suit: Suit.Diamond,
    value: 12,
    type: CardType.Equipment,
    effectType: EquipmentType.Sky,
    isGiveable: false
  },
  {
    suit: Suit.Diamond,
    value: 13,
    type: CardType.Basic,
    effectType: BasicType.Dodge,
    isGiveable: false
  }
].map(addId);

export const FullDeck = BasicDeck.concat(PotentialExpansionDeck);
