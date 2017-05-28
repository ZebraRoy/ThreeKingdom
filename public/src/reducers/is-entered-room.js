import {
  Actions
} from '../actions';

export function isEnteredRoom (state = false, action) {
  switch (action.type) {
    case Actions.SendedConfirmName:
      return true;
    default:
      return state;
  }
}
