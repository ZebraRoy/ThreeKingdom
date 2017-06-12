import {
  Actions
} from '../actions';
import {
  FullDeck
} from '../card/deck';
import {
  shuffle
} from '../helper';

const InitHandCount = 4;
const DefaultDeck = FullDeck.map(function mapId ({ id }) {
  return id;
});

export function deck (
  state = {
    remainingDeck: [],
    discardPool: [],
    playerHand: [],
    playerJudge: [],
    playerEquipment: [],
    playerCardToken: []
  },
  action
) {
  switch (action.type) {
    case Actions.InitPlayer: {
      const playerPool = action.playerPool;
      const remainingDeck = shuffle(DefaultDeck.map((card) => (card.id)));
      const playerHand = playerPool.map((generalsChosen, index) => {
        const hand = [];
        const startIndex = index * InitHandCount;
        const endIndex = startIndex + InitHandCount;
        for (let i = startIndex; i < endIndex; i++) {
          hand.push(remainingDeck[i]);
        }
        return hand;
      });
      remainingDeck.splice(0, playerPool.length * InitHandCount);
      return {
        remainingDeck: remainingDeck,
        discardPool: [],
        playerHand: playerHand,
        playerJudge: [],
        playerEquipment: [],
        playerCardToken: []
      };
    }
    default:
      return state;
  }
}
