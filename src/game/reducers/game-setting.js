import {
  Actions
} from '../actions';

export function gameSetting (
  state = {
    userCount: 1
  },
  action
) {
  switch (action.type) {
    case Actions.CreateGame:
      return {
        userCount: action.userCount
      };
    default:
      return state;
  }
}
