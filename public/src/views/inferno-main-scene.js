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
  let display = 'none';
  switch (gameScene) {
    case GameScene.Naming:
      child = createElement(ConnectNamingScene);
      display = 'block';
      break;
    case GameScene.ChoosingAction:
      child = createElement(ConnectChoosingActionScene);
      display = 'block';
      break;
  }
  return createElement(
    'div',
    {
      style: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 2,
        display
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
