import {
  Actions
} from '../actions';

export function viewport (
  state = {
    width: 0,
    height: 0,
    resolution: 1
  },
  action
) {
  switch (action.type) {
    case Actions.Resize: {
      const {
        width = 0,
        height = 0,
        resolution = 1
      } = action;
      return {
        width: width * resolution,
        height: height * resolution,
        resolution
      };
    }
    default:
      return state;
  }
}
