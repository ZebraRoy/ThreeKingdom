# ThreeKingdom
ThreeKingdom demo of helium

# API
Expected userName is unqiue user id

Create game

```
socket.on(
  "createGame",
  function (hostName) {
    // create the game instance and notify the game change to the host. Also, bind the hostName to this socket
    // expected response:
    // messageName: "createGameReply"
    // param: gameId ("string")
  }
)
```
Join game
```
socket.on(
  "joinGame",
  function (userName, gameId) {
    // add the user to the room and notify the game change to the user. Also, bind the userName to this socket
    // expected response: no response
  }
);
```
Start the game
```
socket.on(
  "startGame",
  function (gameId) {
    // Check the player is the host and change the game state
    // expected response: no response
  }
);
```

# Store
Whatever the store update, it should push the data into client with filters. Current data structure of the store should contains following items. The message name is "gameUpdate"
```
{
  "users": [
    {
      "name": "Roy", // the unique identify of the player. Used for any reconnection
      "isHost": true // The user is host or not. Only useful for start game
    }
  ],
  "deck": { // the whole deck of the game. It should contains all card in the game. It should know all card position.
    "remainingDeck": [], // an array of the remaining deck, should be erase before push to players
    "discardPool": [], // an array of the discard pool. Visible to all player
    "playerHand": // player hands area
    [
      [] // player 1 hand, only visible for player one. other player should only receive the length of his hand
    ],
    "playerJudge": // player judge area
    [
      [] // player 1 judge area, visible for all player
    ],
    "playerEquipment": // player equipment area
    [
      [] // player 1 equipment area, visible for all player
    ],
    "playerCardToken": // player token
    [
      [ // player 1 tokens
        {
          type: Token.Type.Farmland, // token type
          card: 13 // card enum
        }
      ]
    ]
  },
  "players": [ // the player of the game. Storing the game related data of the user
    [
      {
        hp: 3, // the hp of the player
        skills: [], // the skill
        generals: [], // generals
        gender: 'M', // gender: M, F, U
        maxHp: 3, // max hp
        region: -1 // enums of the region
      }
    ]
  ],
  "roundState": {
    "hardIndex": 0, // the current round index. Will not affected by any skills, shou from 0 to 7
    "softIndex": -1, // -1 if it is using hard index not soft index. Use for one more round functional card or similar skills
    "nextRoundIndex": 1, // the next round index. Will be used when current round end. Should be set when each round start
    "isNextRoundSoft": false // Use for indicate the next round is soft round or hard round. It is affected by one more round functional card or similar skills
  },
  "flowState": {
    "currentState": "Drawing:start", // Starting -> Preparing -> Judging -> Drawing -> Dealing -> Folding -> Ending. Depend on the skills player owned, may added sub-state, such as Starting:end, Preparing:start
    "nextState": "Drawing", // next state. May be affected by some functional card or general skills, ex: acedia functional card
    "decisionQueue": [ // decision queue stack, when whole queue is completed, step to next state
      { // a simple decision model demo
        playerIndex: 0, // the decision is waiting which index player
        isCompleted: true, // this decision is completed or not. The whole event is completed when this attribute is completed and waiting is completed
        event: 'Drawing:start', // what is the decision event
        waiting: [ // this event is waiting for which event complete. This event will be completed only when this waiting list completed
          {
            playerIndex: 2,
            isCompleted: false,
            event: 'Skills:SpringDrawCard',
            waiting: []
          }
        ]
      },
      {
        playerIndex: 1,
        isCompleted: false,
        event: 'Drawing:start',
        waiting: []
      }
    ]
  },
  "gameState": 0, // the whole game state, such as waiting player or ended game. WaitingPlayer -> Prepare -> Gaming -> EndGame
  "gameSetting": {
    "maxPlayer": 10, // the maximum number of player. May be able to modify by player in the future
    "isMute": false // the game is allow talking or not. May be able to modify by player in the future
  }
}
```
Whatever a new room connected or new user connected. Send the game list for that user. The event name is "gameList"
```
[id, id, id, id];
```
