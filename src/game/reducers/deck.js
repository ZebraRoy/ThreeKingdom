import {
  Actions
} from '../actions';

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

export function deck (state, action) {
  switch (action.type) {
    case Actions.Shuffle: {
      const newState = JSON.parse(JSON.stringify(state));
      shuffle(newState);
      return newState;
    }
    case Actions.DiscardCardOnDeck:
    case Actions.DrawCard: {
      const newState = JSON.parse(JSON.stringify(state));
      newState.splice(0, action.drawAmount);
      return newState;
    }
    case Actions.PlaceCardOnDeck: {
      const newState = JSON.parse(JSON.stringify(state));
      newState.splice(0, action.drawAmount);
      for (let len = action.heads, i = len - 1; i >= 0; i--) {
        newState.unshift(action.heads[i]);
      }
      for (let len = action.tails, i = 0; i < len; i++) {
        newState.push(action.tails[i]);
      }
      return newState;
    }
    default:
      return state;
  }
}
