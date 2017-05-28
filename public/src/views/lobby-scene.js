import {
  createElement,
  connect
} from '../../vendor/helium';
import {
  Actions
} from '../actions';

export function LobbyScene ({ width, height, users, isHost, onStartGame }) {
  const children = users.map((user, index) => {
    return createElement('Text', {
      text: user.name,
      style: {
        fill: 'white',
        fontSize: '16px'
      },
      y: 20 * index
    });
  });
  return createElement(
    'Container',
    null,
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
