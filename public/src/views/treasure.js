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
  FullDeck
} from '../../../src/game/card/deck';
import {
  EquipmentType
} from '../../../src/game/card/constants';

const DefaultHeight = 24;
const TreasureName = new Map();
TreasureName.set(EquipmentType.WoodHorse, '木牛');
TreasureName.set(EquipmentType.JadeSeal, '玉璽');

export function Treasure ({
  width = 0,
  height = 0,
  x = 0,
  y = 0,
  cardId = -1,
  cardInTreasure = []
}) {
  const fontFamily = '\"微軟正黑體\", Arial, Helvetica, sans-serif';
  const fontSize = getValue(9, height, DefaultHeight);
  const textY = getValue(5, height, DefaultHeight);
  const style = {
    fontSize,
    fontFamily,
    fill: 'white',
    fontWeight: 'bold'
  };
  const children = [];
  const cardInTreasureLength = cardInTreasure.length;
  const isHasCard = cardInTreasure.length > 0;
  if (cardId !== -1) {
    const card = FullDeck.find((cardInDeck) => (cardInDeck.id === cardId));
    if (card) {
      const suitWidth = getValue(14.4, height, DefaultHeight);
      const imageWidth = isHasCard ? 45 : 31.25;
      const imageHeight = getValue(14.4, height, DefaultHeight);
      const realImageWidth = imageWidth * imageHeight / 18;
      const numberText = getValueText(card.value);
      const numberWidth = getTextWidth(numberText, style);
      const iconY = getValue(3, height, DefaultHeight);
      const imageY = getValue(4, height, DefaultHeight);
      const numberPadding = getValue(2, height, DefaultHeight);
      const imagePadding = getValue(4, height, DefaultHeight);
      const wholeWidth = suitWidth + numberWidth + numberPadding + realImageWidth + imagePadding;
      const margin = (width - wholeWidth) / 2 - getValue(2, height, DefaultHeight);
      const treasureName = TreasureName.get(card.effectType);
      const textY = getValue(5, height, DefaultHeight);
      const textX = margin + suitWidth + numberPadding + numberWidth + imagePadding + getValue(3, height, DefaultHeight);
      const circleWidth = getValue(10.8, height, DefaultHeight);
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
          'NineSlicePlane',
          {
            x: margin + suitWidth + numberPadding + numberWidth + imagePadding,
            y: imageY,
            width: imageWidth,
            height: 18,
            scale: {
              x: imageHeight / 18,
              y: imageHeight / 18
            },
            texture: PIXI.Texture.fromImage('assets/image/treasure-bg.png'),
            leftWidth: 9,
            rightWidth: 9,
            topHeight: 9,
            bottomHeight: 9
          }
        ),
        createElement(
          'Text',
          {
            text: treasureName,
            y: textY,
            x: textX,
            style
          }
        ),
        createElement(
          'Sprite',
          {
            width: circleWidth,
            height: circleWidth,
            visible: isHasCard,
            y: getValue(6, height, DefaultHeight),
            x: margin + suitWidth + numberPadding + numberWidth + imagePadding + getValue(22, height, DefaultHeight),
            texture: PIXI.Texture.fromImage('assets/image/treasure-card-no.png')
          }
        ),
        createElement(
          'Text',
          {
            text: cardInTreasureLength,
            visible: isHasCard,
            style: {
              fill: 'black',
              fontSize,
              fontFamily,
              fontWeight: 'bold'
            },
            y: getValue(5, height, DefaultHeight),
            x: margin + suitWidth + numberPadding + numberWidth + imagePadding + getValue(22, height, DefaultHeight) + circleWidth / 2,
            anchor: {
              x: 0.5,
              y: 0
            }
          }
        )
      );
    }
  } else {
    children.push(
      createElement(
        'Text',
        {
          text: '寶物',
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
