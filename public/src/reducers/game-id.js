import {
  Actions
} from '../actions';

export function gameId (state = -1, action) {
  switch (action.type) {
    case Actions.JoinGame:
      return action.gameId;
    default:
      return state;
  }
}
