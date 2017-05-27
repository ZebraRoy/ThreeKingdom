import {
  gameScene
} from './game-scene';
import {
  viewport
} from './viewport';
import {
  name
} from './name';
import {
  isNameConfirmed
} from './is-name-confirmed';

const game = Redux.combineReducers({
  gameScene,
  viewport,
  name,
  isNameConfirmed
});

export {
  game
};
