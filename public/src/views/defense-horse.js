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

const DefaultHeight = 24;

export function DefenseHorse ({
  width = 0,
  height = 0,
  x = 0,
  y = 0,
  cardId = -1
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
  if (cardId !== -1) {
    const card = FullDeck.find((cardInDeck) => (cardInDeck.id === cardId));
    if (card) {
      const suitWidth = getValue(14.4, height, DefaultHeight);
      const imageWidth = getValue(16.2, height, DefaultHeight);
      const numberText = getValueText(card.value);
      const numberWidth = getTextWidth(numberText, style);
      const iconY = getValue(3, height, DefaultHeight);
      const imageY = getValue(3, height, DefaultHeight);
      const numberPadding = getValue(2, height, DefaultHeight);
      const imagePadding = getValue(4, height, DefaultHeight);
      const wholeWidth = suitWidth + numberWidth + numberPadding + imageWidth + imagePadding;
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
          'Sprite',
          {
            x: margin + suitWidth + numberPadding + numberWidth + imagePadding,
            y: imageY,
            width: imageWidth,
            height: imageWidth,
            texture: PIXI.Texture.fromImage('assets/image/horse-plus-one.png')
          }
        )
      );
    }
  } else {
    children.push(
      createElement(
        'Text',
        {
          text: '坐騎',
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
