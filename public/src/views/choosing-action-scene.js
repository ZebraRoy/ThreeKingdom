import {
  connect
} from 'inferno-redux';
import createElement from 'inferno-create-element';
import {
  Actions
} from '../actions';

export function ChoosingActionScene ({ gameList, onCreateGame, onJoinGame }) {
  return createElement(
    'div',
    {
      className: 'inferno-form'
    },
    createElement(
      'form',
      {
        name: 'joinGame',
        onSubmit: (e) => {
          e.preventDefault();
          if (gameList.indexOf(document.forms.joinGame.gameId.value) !== -1) {
            onJoinGame(e);
          }
          return false;
        }
      },
      createElement(
        'button',
        {
          onClick: onCreateGame,
          className: 'helium-button',
          type: 'button'
        },
        'Create Game'
      ),
      createElement(
        'div',
        {
          className: 'split-line-container'
        },
        createElement(
          'span',
          {
            className: 'split-line'
          }
        ),
        createElement(
          'span',
          {
            className: 'or'
          },
          'OR'
        ),
        createElement(
          'span',
          {
            className: 'split-line'
          }
        )
      ),
      createElement(
        'input',
        {
          type: 'text',
          name: 'gameId',
          placeholder: 'Join Game ID',
          defaultValue: name,
          className: 'helium-input'
        }
      ),
      createElement(
        'button',
        {
          type: 'submit',
          className: 'helium-button'
        },
        'Confirm'
      )
    )
  );
}

const ConnectChoosingActionScene = connect(function mapStateToProps (state) {
  return {
    gameList: state.gameList
  };
}, function mapDispatchToProps (dispatch) {
  return {
    onCreateGame: () => {
      dispatch({
        type: Actions.CreateGame
      });
    },
    onJoinGame: () => {
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
