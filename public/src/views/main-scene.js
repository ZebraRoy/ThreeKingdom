import {
  createElement,
  connect
} from '../../vendor/helium';
import {
  GameScene
} from '../constants';

export function MainScene ({ width = 0, height = 0, resolution = 1, gameScene = GameScene.Naming }) {
  return createElement(
    'Container',
    {
      scale: {
        x: 1 / resolution,
        y: 1 / resolution
      }
    }
  );
}

const ConnectMainScene = connect(function mapStateToProps (state) {
  const {
    width = 0,
    height = 0,
    resolution = 1
  } = state.viewport;
  return {
    width,
    height,
    resolution,
    gameScene: state.gameScene
  };
})(MainScene);

export {
  ConnectMainScene
};
