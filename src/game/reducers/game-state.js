import {
  GameState
} from '../constants';

export function gameState (state = GameState.WaitingPlayer, action) {
  switch (action.type) {
    default:
      return state;
  }
}
