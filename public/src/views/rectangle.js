import {
  createElement
} from '../../vendor/helium';

const canvas = document.createElement('canvas');
canvas.width = 8;
canvas.height = 8;
const ctx = canvas.getContext('2d');
ctx.fillStyle = '#fff';
ctx.lineWidth = 0;
ctx.fillRect(0, 0, 8, 8);
const texture = PIXI.Texture.fromCanvas(canvas);

export function Rectangle ({ width = 0, height = 0, x = 0, y = 0, alpha = 1, color = 0xffffff }) {
  return createElement(
    'Sprite',
    {
      x,
      y,
      width,
      height,
      alpha,
      tint: color,
      texture
    }
  );
}
