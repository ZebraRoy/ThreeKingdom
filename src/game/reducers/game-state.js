import {
  GameState
} from '../constants';
import {
  Actions
} from '../Actions'

export function gameState (state = GameState.WaitingPlayer, action) {
  switch (action.type) {
    case Actions.StartGame:
      return GameState.Prepare;
    default:
      return state;
  }
}
