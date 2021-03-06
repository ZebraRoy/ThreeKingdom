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
  gameId
} from './game-id';
import {
  generalDeck
} from './general-deck';
import {
  flowState
} from './flow-state';
import {
  roundState
} from './round-state';
import {
  decisionFlowStateReducer
} from './decision-flow-state';
import {
  combineReducers
} from 'redux';

export default combineReducers(
  {
      deck,
      players,
      users,
      gameSetting,
      gameState,
      gameId,
      generalDeck,
      flowState,
      roundState
  }
  );
