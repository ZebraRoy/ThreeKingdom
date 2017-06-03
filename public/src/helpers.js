import {
  Suit
} from '../../src/game/card/constants';

const SuitMap = new Map();
SuitMap.set(Suit.Spade, 'assets/image/sym-spade.png');
SuitMap.set(Suit.Heart, 'assets/image/sym-heart.png');
SuitMap.set(Suit.Club, 'assets/image/sym-club.png');
SuitMap.set(Suit.Diamond, 'assets/image/sym-diamond.png');

export function getValue (valueInDefault, currentValue, defaultValue) {
  const ratio = currentValue / defaultValue;
  return Math.floor(valueInDefault * ratio);
}

const textEl = new PIXI.Text();

export function getTextWidth (text, style) {
  textEl.style = style;
  textEl.text = text;
  return textEl.width;
}

export function getValueText (value) {
  if (value === 1) {
    return 'A';
  } else if (value === 11) {
    return 'J';
  } else if (value === 12) {
    return 'Q';
  } else if (value === 13) {
    return 'K';
  }
  return value;
}

export function getSuitImagePath (suit) {
  return SuitMap.get(suit);
}
