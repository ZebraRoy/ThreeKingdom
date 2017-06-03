import {
  createElement,
  connect
} from '../../vendor/helium';
import {
  GameScene
} from '../constants';
import {
  ConnectLobbyScene
} from './lobby-scene';

const DefaultWidth = 1152;
const DefaultHeight = 768;

export function MainScene ({ width = 0, height = 0, resolution = 1, gameScene = GameScene.Naming }) {
  let child;
  const ratio = Math.min(width / DefaultWidth, height / DefaultHeight);
  const sceneHeight = DefaultHeight * ratio;
  const sceneWidth = DefaultWidth * ratio;
  const sceneX = (width - sceneWidth) / 2;
  const sceneY = (height - sceneHeight) / 2;

  switch (gameScene) {
    case GameScene.Room:
      child = createElement(ConnectLobbyScene, {
        width: sceneWidth,
        height: sceneHeight,
        x: sceneX,
        y: sceneY
      });
      break;
  }

  return createElement(
    'Container',
    {
      scale: {
        x: 1 / resolution,
        y: 1 / resolution
      }
    },
    child
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
