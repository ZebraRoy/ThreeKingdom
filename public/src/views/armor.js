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
const ArmorName = new Map();
ArmorName.set(EquipmentType.EightTrigrams, '八卦陣');
ArmorName.set(EquipmentType.RenWangShield, '仁王盾');
ArmorName.set(EquipmentType.RattanArmour, '藤甲');
ArmorName.set(EquipmentType.SliverLionHelmet, '白銀獅子');
ArmorName.set(EquipmentType.FireArmor, '明光鎧');
ArmorName.set(EquipmentType.HeartShield, '護心鏡');

export function Armor ({
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
    fill: 'white'
  };
  const children = [];
  if (cardId !== -1) {
    const card = FullDeck.find((cardInDeck) => (cardInDeck.id === cardId));
    if (card) {
      const suitWidth = getValue(14.4, height, DefaultHeight);
      const numberText = getValueText(card.value);
      const numberWidth = getTextWidth(numberText, style);
      const armorText = ArmorName.get(card.effectType);
      const iconY = getValue(4, height, DefaultHeight);
      if (armorText) {
        const armorTextWidth = getTextWidth(armorText, style);
        const numberPadding = getValue(2, height, DefaultHeight);
        const armorTextPadding = getValue(4, height, DefaultHeight);
        const wholeWidth = suitWidth + numberWidth + numberPadding + armorTextPadding + armorTextWidth;
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
              text: armorText,
              style,
              y: textY,
              x: margin + suitWidth + numberPadding + numberWidth + armorTextPadding
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
          text: '防具',
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
