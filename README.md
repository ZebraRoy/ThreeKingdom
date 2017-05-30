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
      "isReady": false, // the user is ready or not. Has no effect on host
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
  // the current turn status related to game information
  "gameStatus":{
    "turnState": 0, // the current turn state, 0:pre-processing -> 1:processing -> 2:post-processing
    "turnPlayer": "bob", // player id of current player turn
    "decisionPlayer": "vincent" // player id of current player making decision
  },
  "gameState": 0, // the game state. Waiting, TurnStarting -> Preparing -> Determining -> Drawing -> Dealing -> Folding -> Ending -> TurnEnding
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
