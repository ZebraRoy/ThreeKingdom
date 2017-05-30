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

"flowState": {
    "currentState": "Dealing",
    "nextState": "Folding",
    "decisionQueue": [
        {
            "playerIndex": 1,
            "event": "dealng",
            "reply": [],
            "eventParam": [],
            "waiting": []
        }
    ]
}

// player 1 play Attack
"flowState": {
    "currentState": "Dealing",
    "nextState": "Folding",
    "decisionQueue": [
        {
            "playerIndex": 1,
            "event": "dealng",
            "reply": ["Attack", 0],
            "eventParam": [],
            "waiting": [
                {
                    "playerIndex": 0,
                    "event": "beingAttack",
                    "eventParam": [1],
                    "reply": [],
                    waiting: []
                }
            ]
        }
    ]
}

// player 0 no Dodge and dying
"flowState": {
    "currentState": "Dealing",
    "nextState": "Folding",
    "decisionQueue": [
        {
            "playerIndex": 1,
            "event": "dealng",
            "reply": ["Attack", 0],
            "eventParam": [],
            "waiting": [
                {
                    "playerIndex": 0,
                    "event": "beingAttack",
                    "eventParam": [1],
                    "reply": ["noDodge"],
                    "waiting": [
                        {
                            "playerIndex": 1,
                            "event": "playerDying",
                            "eventParam": [0],
                            "reply": [],
                            "waiting": []
                        },
                        {
                            "playerIndex": 2,
                            "event": "playerDying",
                            "eventParam": [0],
                            "reply": [],
                            "waiting": []
                        },
                        {
                            "playerIndex": 3,
                            "event": "playerDying",
                            "eventParam": [0],
                            "reply": [],
                            "waiting": []
                        },
                        {
                            "playerIndex": 4,
                            "event": "playerDying",
                            "eventParam": [0],
                            "reply": [],
                            "waiting": []
                        },
                        {
                            "playerIndex": 0,
                            "event": "playerDying",
                            "eventParam": [0],
                            "reply": [],
                            "waiting": []
                        }
                    ]
                }
            ]
        }
    ]
}

// player 1 give up using peach

"flowState": {
    "currentState": "Dealing",
    "nextState": "Folding",
    "decisionQueue": [
        {
            "playerIndex": 1,
            "event": "dealng",
            "reply": ["Attack", 0],
            "eventParam": [],
            "waiting": [
                {
                    "playerIndex": 0,
                    "event": "beingAttack",
                    "eventParam": [1],
                    "reply": ["noDodge"],
                    "waiting": [
                        {
                            "playerIndex": 1,
                            "event": "playerDying",
                            "eventParam": [0],
                            "reply": ["noSave"],
                            "waiting": []
                        },
                        {
                            "playerIndex": 2,
                            "event": "playerDying",
                            "eventParam": [0],
                            "reply": [],
                            "waiting": []
                        },
                        {
                            "playerIndex": 3,
                            "event": "playerDying",
                            "eventParam": [0],
                            "reply": [],
                            "waiting": []
                        },
                        {
                            "playerIndex": 4,
                            "event": "playerDying",
                            "eventParam": [0],
                            "reply": [],
                            "waiting": []
                        },
                        {
                            "playerIndex": 0,
                            "event": "playerDying",
                            "eventParam": [0],
                            "reply": [],
                            "waiting": []
                        }
                    ]
                }
            ]
        }
    ]
}

// player 2 try to using skill 要咩冇咩, pick player 1 card 1. The showing part edited a showingCard area in "deck"

"flowState": {
    "currentState": "Dealing",
    "nextState": "Folding",
    "decisionQueue": [
        {
            "playerIndex": 1,
            "event": "dealng",
            "reply": ["Attack", 0],
            "eventParam": [],
            "waiting": [
                {
                    "playerIndex": 0,
                    "event": "beingAttack",
                    "eventParam": [1],
                    "reply": ["noDodge"],
                    "waiting": [
                        {
                            "playerIndex": 1,
                            "event": "playerDying",
                            "eventParam": [0],
                            "reply": ["noSave"],
                            "waiting": []
                        },
                        {
                            "playerIndex": 2,
                            "event": "playerDying",
                            "eventParam": [0],
                            "reply": ["skills:要咩冇咩", 1, 3], // pick player 1 card 3
                            "waiting": [
                                {
                                    "playerIndex": 2,
                                    "event": "skills:要咩冇咩",
                                    "eventParam": [1],
                                    "reply": [],
                                    "waiting": []
                                }
                            ]
                        },
                        {
                            "playerIndex": 3,
                            "event": "playerDying",
                            "eventParam": [0],
                            "reply": [],
                            "waiting": []
                        },
                        {
                            "playerIndex": 4,
                            "event": "playerDying",
                            "eventParam": [0],
                            "reply": [],
                            "waiting": []
                        },
                        {
                            "playerIndex": 0,
                            "event": "playerDying",
                            "eventParam": [0],
                            "reply": [],
                            "waiting": []
                        }
                    ]
                }
            ]
        }
    ]
}

// player 2 found a peach, using it. Triggered player 1 skills

"flowState": {
    "currentState": "Dealing",
    "nextState": "Folding",
    "decisionQueue": [
        {
            "playerIndex": 1,
            "event": "dealng",
            "reply": ["Attack", 0],
            "eventParam": [],
            "waiting": [
                {
                    "playerIndex": 0,
                    "event": "beingAttack",
                    "eventParam": [1],
                    "reply": ["noDodge"],
                    "waiting": [
                        {
                            "playerIndex": 1,
                            "event": "playerDying",
                            "eventParam": [0],
                            "reply": ["noSave"],
                            "waiting": []
                        },
                        {
                            "playerIndex": 2,
                            "event": "playerDying",
                            "eventParam": [0],
                            "reply": ["skills:要咩冇咩", 1, 3], // pick player 1 card 3
                            "waiting": [
                                {
                                    "playerIndex": 2,
                                    "event": "skills:要咩冇咩",
                                    "eventParam": [1],
                                    "reply": ["use"],
                                    "waiting": [
                                        {
                                            "playerIndex": 1,
                                            "event": "skills:屯田",
                                            "eventParam": [],
                                            "reply": [],
                                            "waiting": []
                                       }
                                    ]
                                }
                            ]
                        },
                        {
                            "playerIndex": 3,
                            "event": "playerDying",
                            "eventParam": [0],
                            "reply": [],
                            "waiting": []
                        },
                        {
                            "playerIndex": 4,
                            "event": "playerDying",
                            "eventParam": [0],
                            "reply": [],
                            "waiting": []
                        },
                        {
                            "playerIndex": 0,
                            "event": "playerDying",
                            "eventParam": [0],
                            "reply": [],
                            "waiting": []
                        }
                    ]
                }
            ]
        }
    ]
}

// player 1 choose to use 屯田

"flowState": {
    "currentState": "Dealing",
    "nextState": "Folding",
    "decisionQueue": [
        {
            "playerIndex": 1,
            "event": "dealng",
            "reply": ["Attack", 0],
            "eventParam": [],
            "waiting": [
                {
                    "playerIndex": 0,
                    "event": "beingAttack",
                    "eventParam": [1],
                    "reply": ["noDodge"],
                    "waiting": [
                        {
                            "playerIndex": 1,
                            "event": "playerDying",
                            "eventParam": [0],
                            "reply": ["noSave"],
                            "waiting": []
                        },
                        {
                            "playerIndex": 2,
                            "event": "playerDying",
                            "eventParam": [0],
                            "reply": ["skills:要咩冇咩", 1, 3], // pick player 1 card 3
                            "waiting": [
                                {
                                    "playerIndex": 2,
                                    "event": "skills:要咩冇咩",
                                    "eventParam": [1],
                                    "reply": ["use"],
                                    "waiting": [
                                        {
                                            "playerIndex": 1,
                                            "event": "skills:屯田",
                                            "eventParam": [],
                                            "reply": ["use"],
                                            "waiting": [
                                                {
                                                    "playerIndex": 'engine',
                                                    "event": "judge:屯田",
                                                    "eventParam": [],
                                                    "reply": [],
                                                    "waiting": []
                                                }
                                            ]
                                       }
                                    ]
                                }
                            ]
                        },
                        {
                            "playerIndex": 3,
                            "event": "playerDying",
                            "eventParam": [0],
                            "reply": [],
                            "waiting": []
                        },
                        {
                            "playerIndex": 4,
                            "event": "playerDying",
                            "eventParam": [0],
                            "reply": [],
                            "waiting": []
                        },
                        {
                            "playerIndex": 0,
                            "event": "playerDying",
                            "eventParam": [0],
                            "reply": [],
                            "waiting": []
                        }
                    ]
                }
            ]
        }
    ]
}

// game engine auto generate judge result

"flowState": {
    "currentState": "Dealing",
    "nextState": "Folding",
    "decisionQueue": [
        {
            "playerIndex": 1,
            "event": "dealng",
            "reply": ["Attack", 0],
            "eventParam": [],
            "waiting": [
                {
                    "playerIndex": 0,
                    "event": "beingAttack",
                    "eventParam": [1],
                    "reply": ["noDodge"],
                    "waiting": [
                        {
                            "playerIndex": 1,
                            "event": "playerDying",
                            "eventParam": [0],
                            "reply": ["noSave"],
                            "waiting": []
                        },
                        {
                            "playerIndex": 2,
                            "event": "playerDying",
                            "eventParam": [0],
                            "reply": ["skills:要咩冇咩", 1, 3], // pick player 1 card 3
                            "waiting": [
                                {
                                    "playerIndex": 2,
                                    "event": "skills:要咩冇咩",
                                    "eventParam": [1],
                                    "reply": ["use"],
                                    "waiting": [
                                        {
                                            "playerIndex": 1,
                                            "event": "skills:屯田",
                                            "eventParam": [],
                                            "reply": ["use"],
                                            "waiting": [
                                                {
                                                    "playerIndex": 'engine',
                                                    "event": "judge:屯田",
                                                    "eventParam": [],
                                                    "reply": [13], // card number 13 as the result
                                                    "waiting": [
                                                        {
                                                            "playerIndex": 3,
                                                            "event": "skills:鬼道",
                                                            "eventParam": [],
                                                            "reply": [],
                                                            "waiting": []
                                                        }
                                                    ]
                                                }
                                            ]
                                       }
                                    ]
                                }
                            ]
                        },
                        {
                            "playerIndex": 3,
                            "event": "playerDying",
                            "eventParam": [0],
                            "reply": [],
                            "waiting": []
                        },
                        {
                            "playerIndex": 4,
                            "event": "playerDying",
                            "eventParam": [0],
                            "reply": [],
                            "waiting": []
                        },
                        {
                            "playerIndex": 0,
                            "event": "playerDying",
                            "eventParam": [0],
                            "reply": [],
                            "waiting": []
                        }
                    ]
                }
            ]
        }
    ]
}


"flowState": {
    "currentState": "Dealing",
    "nextState": "Folding",
    "decisionQueue": [
        {
            "playerIndex": 1,
            "event": "dealng",
            "reply": ["Attack", 0],
            "eventParam": [],
            "waiting": [
                {
                    "playerIndex": 0,
                    "event": "beingAttack",
                    "eventParam": [1],
                    "reply": ["noDodge"],
                    "waiting": [
                        {
                            "playerIndex": 1,
                            "event": "playerDying",
                            "eventParam": [0],
                            "reply": ["noSave"],
                            "waiting": []
                        },
                        {
                            "playerIndex": 2,
                            "event": "playerDying",
                            "eventParam": [0],
                            "reply": ["skills:要咩冇咩", 1, 3], // pick player 1 card 3
                            "waiting": [
                                {
                                    "playerIndex": 2,
                                    "event": "skills:要咩冇咩",
                                    "eventParam": [1],
                                    "reply": ["use"],
                                    "waiting": [
                                        {
                                            "playerIndex": 1,
                                            "event": "skills:屯田",
                                            "eventParam": [],
                                            "reply": ["use"],
                                            "waiting": [
                                                {
                                                    "playerIndex": 'engine',
                                                    "event": "judge:屯田",
                                                    "eventParam": [],
                                                    "reply": [13], // card number 13 as the result
                                                    "waiting": [
                                                        {
                                                            "playerIndex": 3,
                                                            "event": "skills:鬼道",
                                                            "eventParam": [],
                                                            "reply": ["change", 14], // change the judge card to 14
                                                            "waiting": [
                                                                {
                                                                    "playerIndex": 3,
                                                                    "event": "skills:死諫",
                                                                    "eventParam": [],
                                                                    "reply": [],
                                                                    "waiting": []
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                       }
                                    ]
                                }
                            ]
                        },
                        {
                            "playerIndex": 3,
                            "event": "playerDying",
                            "eventParam": [0],
                            "reply": [],
                            "waiting": []
                        },
                        {
                            "playerIndex": 4,
                            "event": "playerDying",
                            "eventParam": [0],
                            "reply": [],
                            "waiting": []
                        },
                        {
                            "playerIndex": 0,
                            "event": "playerDying",
                            "eventParam": [0],
                            "reply": [],
                            "waiting": []
                        }
                    ]
                }
            ]
        }
    ]
}

```
