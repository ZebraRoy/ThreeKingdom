import {
  deck
} from './deck';
import {
  players
} from './players';
import {
  users
} from './users';

export default Redux.combineReducers({
  deck,
  players,
  users
});
