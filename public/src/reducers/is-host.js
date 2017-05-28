import {
  Actions
} from '../actions';

export function isHost (state = false, action) {
  switch (action.type) {
    case Actions.CreateGame:
      return true;
    case Actions.UpdateGame: {
      const gameInstance = action.gameInstance;
      const users = gameInstance.users;
      const name = action.name;
      const me = users.find((user) => (user.name === name));
      if (me) {
        return me.isHost;
      }
      return state;
    }
    default:
      return state;
  }
}
