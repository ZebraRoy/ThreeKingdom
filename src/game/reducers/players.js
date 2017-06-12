import {
  Actions
} from '../actions';
import {
  Region,
  Gender
} from '../constants';
import {
  GeneralDeck
} from '../card/general-deck';
export function players (
  state = [],
  action
) {
  switch (action.type) {
    case Actions.StartGame: {
      const playerOrder = action.playerOrder;
      return playerOrder.map((playerName) => ({
        name: playerName,
        hp: 0,
        maxHp: 0,
        skills: [],
        generals: [],
        gender: Gender.Undef,
        region: Region.Undef
      }));
    }
    case Actions.InitPlayer: {
      const playerList = state.slice();
      const playerPool = action.playerPool;
      return playerPool.map((generalsChosen, index) => {
        const player = playerList[index];
        const master = GeneralDeck.find((general)=>(general.name === generalsChosen[0]));
        const slave = GeneralDeck.find((general)=>(general.name === generalsChosen[1]));
        const skills = [];
        //TODO: master / slave skill validation
        skills.push(master.skills);
        skills.push(slave.skills);
        return {
          name: player.playerName,
          hp: master.maxHp + slave.maxHp,
          maxHp: master.maxHp + slave.maxHp,
          skills: skills,
          generals: generalsChosen,
          gender: Gender.Undef,
          region: Region.Undef
        };
      });
    }
    default:
      return state;
  }
}
