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

export function MainScene ({ width = 0, height = 0, resolution = 1, gameScene = GameScene.Naming }) {
  let child;
  switch (gameScene) {
    case GameScene.Room:
      child = createElement(ConnectLobbyScene, {
        width,
        height
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
