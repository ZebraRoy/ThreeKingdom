import {
  Actions
} from '../actions';

export function players (state = [], action) {
  switch (action.type) {
    case Actions.UpdateGame: {
      const gameInstance = action.gameInstance;
      return gameInstance.players;
    }
    default:
      return state;
  }
}
