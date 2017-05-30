Below is the sample for the flow state:
```
//Case:
//舊sp cathy救鄧艾桃
//咁鄧艾判田
//張角用最後手牌改判
//trigger田豐拆牌
//拆左孫尚香拎兩張牌

//player 0 :孫尚香
//player 1 :鄧艾
//player 2 :舊 sp cathy
//player 3 :張角 + 田豐
//player 4 :曹仁

// player 1 Dealing

// player 1 Dealing

"flowState": {
    "currentState": "Dealing",
    "nextState": "Folding",
    "event": [
        {
            "playerIndex": 1,
            "event": "dealng",
            "reply": [],
            "eventParam": [],
            "nextEvent": []
        }
    ]
}

// player 1 play Attack
"flowState": {
    "currentState": "Dealing",
    "nextState": "Folding",
    "event": [
        {
            "playerIndex": 1,
            "event": "dealng",
            "reply": ["Attack", 0],
            "eventParam": [],
            "nextEvent": [
                {
                    "playerIndex": 0,
                    "event": "beingAttack",
                    "eventParam": [1],
                    "reply": []
                }
            ]
        }
    ]
}

// player 0 no Dodge and dying
"flowState": {
    "currentState": "Dealing",
    "nextState": "Folding",
    "event": [
        {
            "playerIndex": 0,
            "event": "beingAttack",
            "eventParam": [1],
            "reply": ["noDodge"],
            "nextEvent": [
                {
                    "playerIndex": 1,
                    "event": "playerDying",
                    "eventParam": [0],
                    "reply": []
                }
            ]
        }
    ]
}

//Ask players to use peach or not 
//player 1 reject to save
"flowState": {
    "currentState": "Dealing",
    "nextState": "Folding",
    "event": [
        {
           "playerIndex": 1,
           "event": "playerDying",
           "eventParam": [0],
           "reply": ["noSave"],
            "nextEvent": [
                {
                    "playerIndex": 2,
                    "event": "playerDying",
                    "eventParam": [0],
                    "reply": []
                }
            ]
        }
    ]
}

// player 2 try to using skill 要咩冇咩, pick player 1 card 1. The showing part edited a showingCard area in "deck"
"flowState": {
    "currentState": "Dealing",
    "nextState": "Folding",
    "event": [
        {
           "playerIndex": 2,
           "event": "playerDying",
           "eventParam": [0],
           "reply": ["skills:要咩冇咩", 1, 3], // pick player 1 card 3
            "nextEvent": [
                {
                    "playerIndex": 1,
                    "event": "Show card [3]", // give card 3 to player 1 
                    "eventParam": [1],
                    "reply": []
                }
            ]
        }
    ]
}


```
