```
// This example is a simple player 1 attack player 2

// waiting player 1 input
{
  "players": [
    {
      hp: 2,
      generals: ['孫尚香', '孫權'],
      maxHp: 3,
      ...
    },
    {
      hp: 3,
      generals: ['鄧艾', '曹操'],
      maxHp: 3,
    },
    ...
  ],
  "roundState": {
    "hardIndex": 1,
    "softIndex": -1,
    "nextRoundIndex": 2,
    "isNextRoundSoft": false
  },
  "flowState": {
    "currentState": "dealing",
    "nextState": "dealing:end",
    "decisionQueue": [
      {
        "playerIndex": 1, // waiting which player
        "event": "dealing",
        "eventArgs": []
      }
    ]
  },
  ...
}

// player 1 replied play card, attack the player 0
{
  "players": [
    {
      hp: 2,
      generals: ['孫尚香', '孫權'],
      maxHp: 3,
      ...
    },
    {
      hp: 3,
      generals: ['鄧艾', '曹操'],
      maxHp: 3,
    },
    ...
  ],
  "roundState": {
    "hardIndex": 1,
    "softIndex": -1,
    "nextRoundIndex": 2,
    "isNextRoundSoft": false
  },
  "flowState": {
    "currentState": "dealing",
    "nextState": "dealing:end",
    "decisionQueue": [
      {
        "playerIndex": 1,
        "event": "dealing",
        "eventArgs": []
      },
      {
        "playerIndex": 1,
        "event": "playCard",
        "eventArgs": [13, 0] // first arguments is the card in use, second is the target
      }
    ]
  },
  ...
}

// waiting player 0 reply
{
  "players": [
    {
      hp: 2,
      generals: ['孫尚香', '孫權'],
      maxHp: 3,
      ...
    },
    {
      hp: 3,
      generals: ['鄧艾', '曹操'],
      maxHp: 3,
    },
    ...
  ],
  "roundState": {
    "hardIndex": 1,
    "softIndex": -1,
    "nextRoundIndex": 2,
    "isNextRoundSoft": false
  },
  "flowState": {
    "currentState": "dealing",
    "nextState": "dealing:end",
    "decisionQueue": [
      {
        "playerIndex": 1,
        "event": "dealing",
        "eventArgs": []
      },
      {
        "playerIndex": 1,
        "event": "playCard",
        "eventArgs": [13, 0] // first arguments is the card in use, second is the target
      },
      {
        "playerIndex": 0,
        "event": "beingAttack",
        "eventArgs": [13, 1]
      }
    ]
  },
  ...
}

// player 0 reply no dodge, -1hp. Server detected no any other event will be triggered, completed the beingAttack event
{
  "players": [
    {
      hp: 1,
      generals: ['孫尚香', '孫權'],
      maxHp: 3,
      ...
    },
    {
      hp: 3,
      generals: ['鄧艾', '曹操'],
      maxHp: 3,
    },
    ...
  ],
  "roundState": {
    "hardIndex": 1,
    "softIndex": -1,
    "nextRoundIndex": 2,
    "isNextRoundSoft": false
  },
  "flowState": {
    "currentState": "dealing",
    "nextState": "dealing:end",
    "decisionQueue": [
      {
        "playerIndex": 1,
        "event": "dealing",
        "eventArgs": []
      },
      {
        "playerIndex": 1,
        "event": "playCard",
        "eventArgs": [13, 0] // first arguments is the card in use, second is the target
      },
      {
        "playerIndex": 0,
        "event": "beingAttack",
        "eventArgs": [13, 1]
      },
      {
        "playerIndex": 0,
        "event": "beingAttack".reverse(),
        "eventArgs": []
      }
    ]
  },
  ...
}

// Server detected no any event will be triggered. Completed the playCard event
{
  "players": [
    {
      hp: 1,
      generals: ['孫尚香', '孫權'],
      maxHp: 3,
      ...
    },
    {
      hp: 3,
      generals: ['鄧艾', '曹操'],
      maxHp: 3,
    },
    ...
  ],
  "roundState": {
    "hardIndex": 1,
    "softIndex": -1,
    "nextRoundIndex": 2,
    "isNextRoundSoft": false
  },
  "flowState": {
    "currentState": "dealing",
    "nextState": "dealing:end",
    "decisionQueue": [
      {
        "playerIndex": 1,
        "event": "dealing",
        "eventArgs": []
      },
      {
        "playerIndex": 1,
        "event": "playCard",
        "eventArgs": [13, 0] // first arguments is the card in use, second is the target
      },
      {
        "playerIndex": 0,
        "event": "beingAttack",
        "eventArgs": [13, 1]
      },
      {
        "playerIndex": 0,
        "event": "beingAttack".reverse(),
        "eventArgs": []
      },
      {
        "playerIndex": 1,
        "event": "playCard".reverse(),
        "eventArgs": []
      }
    ]
  },
  ...
}

// Server detected no any event will be triggered. Completed the first dealing event
{
  "players": [
    {
      hp: 1,
      generals: ['孫尚香', '孫權'],
      maxHp: 3,
      ...
    },
    {
      hp: 3,
      generals: ['鄧艾', '曹操'],
      maxHp: 3,
    },
    ...
  ],
  "roundState": {
    "hardIndex": 1,
    "softIndex": -1,
    "nextRoundIndex": 2,
    "isNextRoundSoft": false
  },
  "flowState": {
    "currentState": "dealing",
    "nextState": "dealing:end",
    "decisionQueue": [
      {
        "playerIndex": 1,
        "event": "dealing",
        "eventArgs": []
      },
      {
        "playerIndex": 1,
        "event": "playCard",
        "eventArgs": [13, 0] // first arguments is the card in use, second is the target
      },
      {
        "playerIndex": 0,
        "event": "beingAttack",
        "eventArgs": [13, 1]
      },
      {
        "playerIndex": 0,
        "event": "beingAttack".reverse(),
        "eventArgs": []
      },
      {
        "playerIndex": 1,
        "event": "playCard".reverse(),
        "eventArgs": []
      },
      {
        "playerIndex": 1,
        "event": "dealing".reverse(),
        "eventArgs": []
      }
    ]
  },
  ...
}

// waiting player 1 for next input
{
  "players": [
    {
      hp: 1,
      generals: ['孫尚香', '孫權'],
      maxHp: 3,
      ...
    },
    {
      hp: 3,
      generals: ['鄧艾', '曹操'],
      maxHp: 3,
    },
    ...
  ],
  "roundState": {
    "hardIndex": 1,
    "softIndex": -1,
    "nextRoundIndex": 2,
    "isNextRoundSoft": false
  },
  "flowState": {
    "currentState": "dealing",
    "nextState": "dealing:end",
    "decisionQueue": [
      {
        "playerIndex": 1,
        "event": "dealing",
        "eventArgs": []
      },
      {
        "playerIndex": 1,
        "event": "playCard",
        "eventArgs": [13, 0] // first arguments is the card in use, second is the target
      },
      {
        "playerIndex": 0,
        "event": "beingAttack",
        "eventArgs": [13, 1]
      },
      {
        "playerIndex": 0,
        "event": "beingAttack".reverse(),
        "eventArgs": []
      },
      {
        "playerIndex": 1,
        "event": "playCard".reverse(),
        "eventArgs": []
      },
      {
        "playerIndex": 1,
        "event": "dealing".reverse(),
        "eventArgs": []
      },
      {
        "playerIndex": 1,
        "event": "dealing",
        "eventArgs": []
      }
    ]
  },
  ...
}
```
