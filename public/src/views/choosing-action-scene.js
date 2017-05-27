import {
  connect
} from 'inferno-redux';
import createElement from 'inferno-create-element';
import {
  Actions
} from '../actions';

export function ChoosingActionScene ({ onCreateGame, onJoinGame }) {
  return createElement(
    'div',
    {
      className: 'infernoForm'
    },
    createElement(
      'button',
      {
        onClick: onCreateGame
      },
      'Create Game'
    ),
    createElement(
      'form',
      {
        id: 'joinGame',
        onSubmit: onJoinGame
      },
      createElement(
        'input',
        {
          type: 'text',
          name: 'gamId',
          placeholder: 'Game ID',
          defaultValue: name
        }
      ),
      createElement(
        'button',
        {
          type: 'submit'
        },
        'Confirm'
      )
    )
  );
}

const ConnectChoosingActionScene = connect(null, function mapDispatchToProps (dispatch) {
  return {
    onCreateGame: () => {
      dispatch({
        type: Actions.CreateGame
      });
    },
    onJoinGame: (e) => {
      e.preventDefault();
      dispatch({
        type: Actions.JoinGame,
        gameId: document.forms.joinGame.gameId.value
      });
      return false;
    }
  };
})(ChoosingActionScene);

export {
  ConnectChoosingActionScene
};
