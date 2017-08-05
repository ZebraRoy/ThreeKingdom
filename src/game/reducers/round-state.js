import {
  Actions
} from '../Actions'

export function roundState (
  state = {
    hardIndex: -1,
    softIndex: -1,
    nextRoundIndex: -1,
    isNextRoundSoft: false
  }, action) {
  switch (action.type) {
    case Actions.InitPlayer: {
      return {
        hardIndex: 0,
        softIndex: -1,
        nextRoundIndex: 1,
        isNextRoundSoft: false
      };
    }
    default:
      return state;
  }
}
