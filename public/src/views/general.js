import {
  createElement,
  Component
} from '../../vendor/helium';
import {
  getValue
} from '../helpers';

const DefaultWidth = 81;

export class General extends Component {

  componentWillMount () {
    this.graphics = new PIXI.Graphics();
  }

  render ({
    x = 0,
    y = 0,
    width = 0,
    name = '暗將'
  }) {
    const graphics = this.graphics;
    graphics.clear();
    graphics.beginFill();
    graphics.drawRect(0, 0, getValue(81, width, DefaultWidth), getValue(108, width, DefaultWidth));
    graphics.endFill();
    let texture;
    if (name !== '') {
      texture = PIXI.Texture.fromImage('assets/image/generals/' + name + '.jpg');
    }
    return createElement(
      'Container',
      {
        x,
        y,
        mask: graphics
      },
      [
        createElement(
          'Inject',
          {
            el: graphics
          }
        ),
        createElement(
          'Sprite',
          {
            x: getValue(40.5, width, DefaultWidth),
            y: getValue(-10, width, DefaultWidth),
            anchor: {
              x: 0.5,
              y: 0
            },
            width: getValue(131, width, DefaultWidth),
            height: getValue(190, width, DefaultWidth),
            texture
          }
        )
      ]
    );
  }
}
