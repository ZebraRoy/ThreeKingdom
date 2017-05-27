import {
  GameScene
} from '../constants';
import {
  Actions
} from '../actions';

export function gameScene (state = GameScene.Naming, action) {
  switch (action.type) {
    case Actions.ConfirmName:
      if (state === GameScene.Naming) {
        return GameScene.ChoosingAction;
      }
      return state;
    case Actions.CreateGame:
      return GameScene.CreatingGame;
    default:
      return state;
  }
}
