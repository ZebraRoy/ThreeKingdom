import {
  Actions
} from '../actions';
import {
  FullDeck
} from '../card/deck';

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
    default:
      return state;
  }
}
