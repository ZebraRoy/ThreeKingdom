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
  combineReducers
} from 'redux';

export default combineReducers({
  deck,
  players,
  users,
  gameSetting
});
