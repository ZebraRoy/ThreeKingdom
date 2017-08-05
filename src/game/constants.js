export const GameState = {
  WaitingPlayer: 0,
  Prepare: 1,
  Gaming: 2,
  EndGame: 3
};

export const Region = {
  Undef: -1,
  Red: 0,
  Green: 1,
  Blue: 3,
  Grey: 4,
  Independent: 5
};

export const Gender = {
  Undef: -1,
  Male: 0,
  Female: 1
};

export const FlowState = {
  Starting: 'starting',
  Preparing: 'preparing',
  Judging: 'judging',
  Drawing: 'drawing',
  Dealing: 'dealing',
  Folding: 'folding',
  Ending: 'ending'
};

export const FlowStateSuffix = {
  Start: 'start',
  End: 'end'
};

export const EventType = {
  Drawing: "drawing",
  Dealing: 'dealing'
}
