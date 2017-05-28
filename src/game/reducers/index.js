import {
  deck
} from './deck';
import {
  players
} from './players';
import {
  users
} from './users';
import {
  gameSetting
} from './game-setting';
import {
  gameState
} from './game-state';
import {
  combineReducers
} from 'redux';

export default combineReducers({
  deck,
  players,
  users,
  gameSetting,
  gameState
});
