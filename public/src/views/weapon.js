import {
  createElement
} from '../../vendor/helium';
import {
  getValue,
  getSuitImagePath,
  getTextWidth,
  getValueText
} from '../helpers';
import {
  EquipmentType
} from '../../../src/game/card/constants';
import {
  FullDeck
} from '../../../src/game/card/deck';

const DefaultHeight = 24;
const WeaponName = new Map();
WeaponName.set(EquipmentType.CrossBow, '諸葛連弩');
WeaponName.set(EquipmentType.BlueBlade, '青紅劍');
WeaponName.set(EquipmentType.Double, '雌雄雙股劍');
WeaponName.set(EquipmentType.Axe, '貫石斧');
WeaponName.set(EquipmentType.Halberd, '丈八蛇矛');
WeaponName.set(EquipmentType.Bow, '麒麟弓');
WeaponName.set(EquipmentType.FrostBlade, '寒冰劍');
WeaponName.set(EquipmentType.Fan, '朱雀羽扇');
WeaponName.set(EquipmentType.SixBlade, '吳六劍');
WeaponName.set(EquipmentType.Trident, '三尖兩刃刀');
WeaponName.set(EquipmentType.Dragon, '青龍偃月刀');
WeaponName.set(EquipmentType.Sky, '方天畫戟');

//const DefaultId = FullDeck.find((card) => (card.effectType === EquipmentType.Sky && card.type === CardType.Equipment)).id;

export function Weapon ({
  width = 0,
  height = 0,
  x = 0,
  y = 0,
  cardId = -1
}) {
  const fontFamily = '\"微軟正黑體\", Arial, Helvetica, sans-serif';
  const fontSize = getValue(9, height, DefaultHeight);
  const textY = getValue(6, height, DefaultHeight);
  const style = {
    fontSize,
    fontFamily,
    fill: 'white',
    fontWeight: 'bold'
  };
  const children = [];
  if (cardId !== -1) {
    const card = FullDeck.find((cardInDeck) => (cardInDeck.id === cardId));
    if (card) {
      const suitWidth = getValue(14.4, height, DefaultHeight);
      const numberText = getValueText(card.value);
      const numberWidth = getTextWidth(numberText, style);
      const weaponText = WeaponName.get(card.effectType);
      const iconY = getValue(4, height, DefaultHeight);
      if (weaponText) {
        const weaponTextWidth = getTextWidth(weaponText, style);
        const numberPadding = getValue(2, height, DefaultHeight);
        const weaponTextPadding = getValue(4, height, DefaultHeight);
        const wholeWidth = suitWidth + numberWidth + numberPadding + weaponTextPadding + weaponTextWidth;
        const margin = (width - wholeWidth) / 2 - getValue(3, height, DefaultHeight);
        children.push(
          createElement(
            'Sprite',
            {
              width: suitWidth,
              height: suitWidth,
              y: iconY,
              x: margin,
              texture: PIXI.Texture.fromImage(getSuitImagePath(card.suit))
            }
          ),
          createElement(
            'Text',
            {
              text: numberText,
              style,
              y: textY,
              x: margin + suitWidth + numberPadding
            }
          ),
          createElement(
            'Text',
            {
              text: weaponText,
              style,
              y: textY,
              x: margin + suitWidth + numberPadding + numberWidth + weaponTextPadding
            }
          )
        );
      }
    }
  } else {
    children.push(
      createElement(
        'Text',
        {
          text: '武器',
          style: {
            fill: '#BF5C19',
            fontWeight: 'bold',
            fontSize
          },
          anchor: {
            x: 0.5,
            y: 0
          },
          x: width / 2,
          y: textY
        }
      )
    );
  }
  return createElement(
    'Container',
    {
      x,
      y
    },
    children
  )
}
