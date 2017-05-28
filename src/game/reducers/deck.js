import {
  Actions
} from '../actions';
import {
  FullDeck
} from '../card/deck';

const DefaultDeck = FullDeck.map(function mapId ({ id }) {
  return id;
});

function shuffle (array) {
  let counter = array.length;
  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

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
