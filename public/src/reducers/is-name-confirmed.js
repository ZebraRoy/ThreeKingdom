import {
  Actions
} from '../actions';

export function isNameConfirmed (state = false, action) {
  switch (action.type) {
    case Actions.ConfirmName:
      return true;
    default:
      return state;
  }
}
