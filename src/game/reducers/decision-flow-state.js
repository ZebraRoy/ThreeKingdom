import {
  roundState
} from './round-state'

import {
  flowState
} from './flow-state'

export function decisionFlowStateReducer(state = {}, action) {
  return {
    roundState: roundState(state.roundState, action),
    flowState: flowState(state.flowState, action)
  }
}
