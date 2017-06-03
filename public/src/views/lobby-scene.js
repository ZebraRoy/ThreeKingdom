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

export function LobbyScene ({ width, x, y, users, isHost, onStartGame }) {
  const maxUser = 7;
  const children = [];
  const playerPanelWidth = getValue(234, width, DefaultWidth);
  const playerPanelHeight = getValue(259.976, width, DefaultWidth)
  for (let i = 0; i < maxUser; i++) {
    let name = '';
    if (i < users.length) {
      name = users[i].name;
    }
    const x = playerPanelWidth * i;
    children.push(
      createElement(
        ConnectPlayerPanel,
        {
          name,
          x,
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
    users: state.users
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
