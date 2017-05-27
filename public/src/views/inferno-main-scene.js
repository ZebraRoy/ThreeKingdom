import {
  connect
} from 'inferno-redux';
import createElement from 'inferno-create-element';
import {
  GameScene
} from '../constants';
import {
  ConnectNamingScene
} from './naming-scene';
import {
  ConnectChoosingActionScene
} from './choosing-action-scene';

export function InfernoMainScene ({ gameScene = GameScene.Naming }) {
  let child;
  switch (gameScene) {
    case GameScene.Naming:
      child = createElement(ConnectNamingScene);
      break;
    case GameScene.ChoosingAction:
      child = createElement(ConnectChoosingActionScene);
      break;
  }
  return createElement(
    'div',
    {
      style: {
        width: '100%',
        height: '100%'
      }
    },
    child
  );
}

const ConnectInfernoMainScene = connect(function mapStateToProps (state) {
  return {
    gameScene: state.gameScene
  };
})(InfernoMainScene);

export {
  ConnectInfernoMainScene
};
