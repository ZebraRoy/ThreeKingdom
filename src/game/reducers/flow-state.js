import {
  FlowState,
  FlowStateSuffix
} from '../constants';

import {
  Actions
} from '../Actions';

function getState(flowState, suffix = '') {
  let state = flowState;
  if(suffix != null || suffix != '') {
    state += ':' + suffix;
  }
  return state;
}

function decisionQueue (state = [], action){
  switch (action.type) {
    case Actions.InitPlayer:
      return state;
    default:
      return state;
  };
}

export function flowState (
  state = {
    currentState: getState(FlowState.Ending, FlowStateSuffix.End),
    nextState: getState(FlowState.Starting, FlowStateSuffix.Start),
    decisionQueue: []
  },
  action) {
  switch (action.type) {
    case Actions.InitPlayer:{
        return {
          currentState: getState(FlowState.Starting, FlowStateSuffix.Start),
          nextState: getState(FlowState.Starting),
          decisionQueue: decisionQueue(state.decisionQueue, action)
        };
    }
    default:
      return state;
  };
}
