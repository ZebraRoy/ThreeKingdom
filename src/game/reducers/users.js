import {
  Actions
} from '../actions';

export function users (
  state = [],
  action
) {
  switch (action.type) {
    case Actions.AddPlayer: {
      const newState = state.slice();
      newState.push(action.playerName);
      return newState;
    }
    default:
      return state;
  }
}
