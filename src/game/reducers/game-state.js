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
    case Actions.InitPlayer:
      return GameState.Gaming;
    default:
      return state;
  }
}
