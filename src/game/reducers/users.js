import {
  Actions
} from '../actions';

export function users (
  state = [],
  action
) {
  switch (action.type) {
    case Actions.CreateGame: {
      const hostName = action.playerName;
      const newState = JSON.parse(JSON.stringify(state));
      newState.push({
        name: hostName,
        isHost: true
      });
      return newState;
    }
    case Actions.JoinGame: {
      const playerName = action.playerName;
      const me = state.find((user) => (user.name === playerName));
      if (me) {
        return state;
      }
      const newState = JSON.parse(JSON.stringify(state));
      newState.push({
        name: playerName,
        isHost: false
      });
      return newState;
    }
    default:
      return state;
  }
}
