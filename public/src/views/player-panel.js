import {
  createElement,
  connect
} from '../../vendor/helium';
import {
  Gender,
  Region
} from '../../../src/game/constants';
import {
  getValue
} from '../helpers';
import {
  Rectangle
} from './rectangle';
import {
  Weapon
} from './weapon';
import {
  Armor
} from './armor';

const DefaultWidth = 234;

export function PlayerPanel ({ width = 0, x = 0, y = 0, name = '', maxHp = 0, hp = 0, position = 1 }) {
  const fontFamily = '\"微軟正黑體\", Arial, Helvetica, sans-serif';
  const mainGeneralText = '主 | SP Vincent';
  const viceGeneralText = '副 | SP Vincent';
  const generalTextStyle = {
    fill: 'white',
    fontFamily,
    fontWeight: 'bold',
    fontSize: getValue(8, width, DefaultWidth)
  };
  return createElement(
    'Container',
    {
      x,
      y
    },
    [
      createElement(
        'Sprite',
        {
          texture: PIXI.Texture.fromImage('assets/image/panel-enemy.png'),
          width,
          height: width
        }
      ),
      createElement(
        'Sprite',
        {
          texture: PIXI.Texture.fromImage('assets/image/region-purple.png'),
          width: getValue(54, width, DefaultWidth),
          height: getValue(54, width, DefaultWidth)
        }
      ),
      createElement(
        'Sprite',
        {
          texture: PIXI.Texture.fromImage('assets/image/chain.png'),
          anchor: {
            x: 0.5,
            y: 0
          },
          x: width / 2,
          y: getValue(102.43, width, DefaultWidth),
          width: getValue(203.1, width, DefaultWidth),
          height: getValue(41.4, width, DefaultWidth)
        }
      ),
      createElement(
        Rectangle,
        {
          color: 0x000000,
          alpha: 0.5,
          x: getValue(36, width, DefaultWidth),
          y: getValue(54.5, width, DefaultWidth),
          width: getValue(70, width, DefaultWidth),
          height: getValue(15, width, DefaultWidth)
        }
      ),
      createElement(
        Rectangle,
        {
          color: 0x000000,
          alpha: 0.5,
          x: getValue(119, width, DefaultWidth),
          y: getValue(54.5, width, DefaultWidth),
          width: getValue(70, width, DefaultWidth),
          height: getValue(15, width, DefaultWidth)
        }
      ),
      createElement(
        Rectangle,
        {
          color: 0xffffff,
          alpha: 0.5,
          x: getValue(36.5, width, DefaultWidth),
          y: getValue(140, width, DefaultWidth),
          anchor: {
            x: 0,
            y: 1
          },
          width: getValue(80.5, width, DefaultWidth),
          height: getValue(16, width, DefaultWidth)
        }
      ),
      createElement(
        Rectangle,
        {
          color: 0xffffff,
          alpha: 0.5,
          x: getValue(120, width, DefaultWidth),
          y: getValue(140, width, DefaultWidth),
          anchor: {
            x: 0,
            y: 1
          },
          width: getValue(80.5, width, DefaultWidth),
          height: getValue(16, width, DefaultWidth)
        }
      ),
      createElement(
        'Text',
        {
          text: position + ' | ' + name,
          x: getValue(43, width, DefaultWidth),
          y: getValue(31, width, DefaultWidth),
          style: {
            fill: 'white',
            fontFamily,
            fontWeight: 'bold',
            fontSize: getValue(11, width, DefaultWidth)
          }
        }
      ),
      createElement(
        'Text',
        {
          text: mainGeneralText,
          x: getValue(38, width, DefaultWidth),
          y: getValue(57, width, DefaultWidth),
          style: generalTextStyle
        }
      ),
      createElement(
        'Text',
        {
          text: viceGeneralText,
          x: getValue(122, width, DefaultWidth),
          y: getValue(57, width, DefaultWidth),
          style: generalTextStyle
        }
      ),
      createElement(
        'Text',
        {
          text: '12',
          x: getValue(151, width, DefaultWidth),
          y: getValue(32, width, DefaultWidth),
          anchor: {
            x: 0.5,
            y: 0
          },
          style: {
            fill: 'white',
            fontFamily,
            fontWeight: 'bold',
            fontSize: getValue(9, width, DefaultWidth)
          }
        }
      ),
      createElement(
        'Text',
        {
          text: hp + '/' + maxHp,
          x: getValue(197, width, DefaultWidth),
          y: getValue(32, width, DefaultWidth),
          anchor: {
            x: 1,
            y: 0
          },
          style: {
            fill: 'white',
            fontFamily,
            fontWeight: 'bold',
            fontSize: getValue(9, width, DefaultWidth)
          }
        }
      ),
      createElement(
        Weapon,
        {
          x: getValue(36.5, width, DefaultWidth),
          y: getValue(158.5, width, DefaultWidth),
          width: getValue(80.5, width, DefaultWidth),
          height: getValue(24, width, DefaultWidth)
        }
      ),
      createElement(
        Armor,
        {
          x: getValue(120, width, DefaultWidth),
          y: getValue(158.5, width, DefaultWidth),
          width: getValue(80.5, width, DefaultWidth),
          height: getValue(24, width, DefaultWidth)
        }
      )
    ]
  );
}

const ConnectPlayerPanel = connect(
  function mapStateToProps (state, { name = '' }) {
    const player = state.players.find((item) => (item.name === name));
    if (player) {
      const {
        hp = 0,
        maxHp = 0,
        generals = [],
        gender = Gender.Undef,
        region = Region.Undef
      } = player;
      const position = state.players.indexOf(player) + 1;
      return {
        hp,
        maxHp,
        generals,
        gender,
        region,
        position
      };
    }
    return null;
  }
)(PlayerPanel);

export {
  ConnectPlayerPanel
};
