import {
  connect
} from 'inferno-redux';
import createElement from 'inferno-create-element';
import {
  Actions
} from '../actions';

export function NamingScene ({ name, onSubmit }) {
  return createElement(
    'div',
    {
      className: 'infernoForm'
    },
    createElement(
      'form',
      {
        id: 'naming',
        onSubmit
      },
      createElement(
        'input',
        {
          type: 'text',
          name: 'name',
          required: 'required',
          placeholder: 'Name',
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

const ConnectNamingScene = connect(function mapStateToProps (state) {
  return {
    name: state.name
  };
}, function mapDispatchToProps (dispatch) {
  return {
    onSubmit: (e) => {
      e.preventDefault();
      dispatch({
        type: Actions.ConfirmName,
        name: document.forms.naming.name.value
      });
      return false;
    }
  };
})(NamingScene);

export {
  ConnectNamingScene
};
