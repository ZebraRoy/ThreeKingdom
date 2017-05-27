import {
  GameScene
} from '../constants';
import {
  Actions
} from '../actions';

export function gameScene (state = GameScene.Init, action) {
  switch (action.type) {
    case Actions.CreateGame:
      return GameScene.CreatingGame;
    default:
      return state;
  }
}
