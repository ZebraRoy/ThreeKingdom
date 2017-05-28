import {
  Actions
} from '../actions';
import {
  Region,
  Gender
} from '../constants';

export function players (
  state = [],
  action
) {
  switch (action.type) {
    case Actions.StartGame: {
      const playerOrder = action.playerOrder;
      return playerOrder.map((playerName) => ({
        name: playerName,
        hp: 0,
        maxHp: 0,
        skills: [],
        generals: [],
        gender: Gender.Undef,
        region: Region.Undef
      }));
    }
    default:
      return state;
  }
}
