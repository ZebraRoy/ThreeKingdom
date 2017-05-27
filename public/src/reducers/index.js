import {
  gameScene
} from './game-scene';
import {
  viewport
} from './viewport';

const game = Redux.combineReducers({
  gameScene,
  viewport
});

export {
  game
};
