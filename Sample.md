Below is the sample for the flow state:
Case:
舊sp cathy救鄧艾桃
咁鄧艾判田
張角用最後手牌改判
trigger田豐拆牌
拆左孫尚香拎兩張牌

player 0 :孫尚香
player 1 :鄧艾
player 2 :舊 sp cathy
player 3 :田豐
player 4 :張角

player 0  瀕死
"flowState": {
    "currentState": "Dealing"
    "nextState": "Folding"
    "decisionQueue": [ // decision queue stack, when whole queue is completed, step to next state
      { // a simple decision model demo
        playerIndex: 0,
        isCompleted: false, 
        event: 'dying', 
        waiting: [
          {
            playerIndex: 0,
            isCompleted: false,
            event: 'Use:peach',
            waiting: []
          },
          {
            playerIndex: 0,
            isCompleted: false,
            event: 'Use:wine',
            waiting: []
          },
          {
            playerIndex: 1,
            isCompleted: false,
            event: 'Use:peach',
            waiting: []
          },
          {
            playerIndex: 2,
            isCompleted: false,
            event: 'Use:peach',
            waiting: []
          },
          {
            playerIndex: 2,
            isCompleted: false,
            event: 'Skill:cathy Skill',
            waiting: []
          },
          {
            playerIndex: 3,
            isCompleted: false,
            event: 'Use:peach',
            waiting: []
          },
          {
            playerIndex: 4,
            isCompleted: false,
            event: 'Use:peach',
            waiting: []
          },
        ]
      }
    ]
  }
  
  前面唔用桃去到cathy 用skill 求桃,舊sp cathy救鄧艾桃 ,咁鄧艾判田
  "flowState": {
    "currentState": "Dealing"
    "nextState": "Folding"
    "decisionQueue": [ // decision queue stack, when whole queue is completed, step to next state
      { // a simple decision model demo
        playerIndex: 0,
        isCompleted: false, 
        event: 'dying', 
        waiting: [
          {
            playerIndex: 0,
            isCompleted: true,
            event: 'Use:peach',
            waiting: []
          },
          {
            playerIndex: 0,
            isCompleted: true,
            event: 'Use:wine',
            waiting: []
          },
          {
            playerIndex: 1,
            isCompleted: true,
            event: 'Use:peach',
            waiting: []
          },
          {
            playerIndex: 2,
            isCompleted: true,
            event: 'Use:peach',
            waiting: []
          },
          {
            playerIndex: 2,
            isCompleted: false,
            event: 'Skill:要個樣無個樣;player1',
            waiting: [
            {
              playerIndex: 1,
              isCompleted: false,
              event: 'skill:判田',
              waiting: [
              {
                playerIndex: 4,
                isCompleted: false,
                event: 'skill:改判',
                waiting: []
              },]
            },]
          },
          {
            playerIndex: 3,
            isCompleted: false,
            event: 'Use:peach',
            waiting: []
          },
          {
            playerIndex: 4,
            isCompleted: false,
            event: 'Use:peach',
            waiting: []
          }
        ]
      }
    ]
  }
