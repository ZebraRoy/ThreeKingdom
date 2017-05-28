import {
  Actions
} from '../actions';

export function users (state = [], action) {
  switch (action.type) {
    case Actions.UpdateGame: {
      const gameInstance = action.gameInstance;
      return gameInstance.users;
    }
    default:
      return state;
  }
}
