import {
  Actions
} from '../actions';
import {
  GeneralDeck
} from '../card/general-deck';
import {
  shuffle
} from '../helper';

const GeneralCount = 7;

export function generalDeck (
  state = {
    remainingDeck: shuffle(GeneralDeck.map((general) => (general.name))),
    discardPool: [],
    playerPool: []
  },
  action
) {
  switch (action.type) {
    case Actions.StartGame: {
      const remainingDeck = state.remainingDeck.slice();
      const playerOrder = action.playerOrder;
      const playerPool = playerOrder.map((playerName, index) => {
        const pool = [];
        const startIndex = index * GeneralCount;
        const endIndex = startIndex + GeneralCount;
        for (let i = startIndex; i < endIndex; i++) {
          pool.push(remainingDeck[i]);
        }
        return pool;
      });
      remainingDeck.splice(0, playerOrder.length * GeneralCount);
      return {
        remainingDeck: remainingDeck,
        discardPool: state.discardPool,
        playerPool
      };
    }
    default:
      return state;
  }
}