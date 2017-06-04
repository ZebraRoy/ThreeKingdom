import {
  createElement,
  connect
} from '../../vendor/helium';
import {
  Actions
} from '../actions';
import {
  ConnectPlayerPanel
} from './player-panel';
import {
  getValue
} from '../helpers';

const DefaultWidth = 1152;
const PanelPosition = [
  {
    x: 927,
    y: 308
  },
  {
    x: 927,
    y: 55
  },
  {
    x: 694,
    y: 5
  },
  {
    x: 463,
    y: 5
  },
  {
    x: 234,
    y: 5
  },
  {
    x: 2,
    y: 55
  },
  {
    x: 2,
    y: 308
  }
];

export function LobbyScene ({ width, x, y, users, userName, isHost, onStartGame }) {
  const maxUser = 7;
  const children = [];
  const playerPanelWidth = getValue(234, width, DefaultWidth);
  const playerPanelHeight = getValue(259.976, width, DefaultWidth);
  const currentUser = users.find((user) => (user.name === userName));
  let selfIndex = 0;
  if (currentUser) {
    selfIndex = users.indexOf(currentUser);
  }
  for (let i = selfIndex + 1; i <= selfIndex + maxUser; i++) {
    const index = i % (maxUser + 1);
    let seatIndex = i - selfIndex - 1;
    if (selfIndex < 0) {
      selfIndex += maxUser;
    }
    const x = getValue(PanelPosition[seatIndex].x, width, DefaultWidth);
    const y = getValue(PanelPosition[seatIndex].y, width, DefaultWidth);
    let name = '';
    if (users[index]) {
      name = users[index].name;
    }
    children.push(
      createElement(
        ConnectPlayerPanel,
        {
          name,
          x,
          y,
          position: index + 1,
          width: playerPanelWidth,
          height: playerPanelHeight
        }
      )
    );
  }
  return createElement(
    'Container',
    {
      x,
      y
    },
    children
  );
}

const ConnectLobbyScene = connect(function mapStateToProps (state) {
  return {
    isHost: state.isHost,
    users: state.users,
    userName: state.name
  };
}, function mapDispatchToProp (dispatch) {
  return {
    onStartGame: () => {
      dispatch({
        type: Actions.StartGame
      });
    }
  }
})(LobbyScene);

export {
  ConnectLobbyScene
};
