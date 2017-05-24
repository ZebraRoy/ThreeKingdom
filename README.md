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
    // expected response:
    // messageName: "joinGameReply"
    // param: isSuccess ("boolean")
  }
);
```
Ready
```
socket.on(
  "ready",
  function (gameId) {
    // set the ready state of the user to be true
    // expected response: no response
  }
);
```
Cancel ready
```
socket.on(
  "cancelReady",
  function (gameId) {
    // set the ready state of the user to be false
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
Whatever the store update, it should push the data into client with filters.
Current data structure of the store should contains following items.
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
  "gameState": 0, // the game state. WaitingPlayer -> StartGame -> Prepare -> Gaming -> EndGame
  "gameSetting": {
    "maxPlayer": 10, // the maximum number of player. May be able to modify by player in the future
    "isMute": false // the game is allow talking or not. May be able to modify by player in the future
  }
}
```
