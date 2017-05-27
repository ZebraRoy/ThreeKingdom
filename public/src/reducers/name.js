import {
  Actions
} from '../actions';

export function name (state = '', action) {
  switch (action.type) {
    case Actions.ConfirmName:
      return action.name;
    default:
      return state;
  }
}
