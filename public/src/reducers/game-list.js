import {
  Actions
} from '../actions';

export function gameList (state = [], action) {
  switch (action.type) {
    case Actions.UpdateGameList:
      return action.gameList;
    default:
      return state;
  }
}
