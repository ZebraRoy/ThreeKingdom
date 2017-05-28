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
  isEnteredRoom
} from './is-entered-room';
import {
  gameId
} from './game-id';
import {
  isHost
} from './is-host';
import {
  gameList
} from './game-list';

const game = Redux.combineReducers({
  gameScene,
  viewport,
  name,
  isEnteredRoom,
  gameId,
  isHost,
  gameList
});

export {
  game
};
