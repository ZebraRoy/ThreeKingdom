import {
  Actions
} from '../actions';

export function ViewportController (store, interval = 200) {
  let intervalTimer;
  let _innerHeight;
  let _innerWidth;
  let _resolution;

  function resize () {
    const innerWidth = window.innerWidth;
    const innerHeight = window.innerHeight;
    const resolution = Math.round(window.devicePixelRatio);
    if (
      innerWidth !== _innerWidth ||
      innerHeight !== _innerHeight ||
      _resolution !== resolution
    ) {
      _innerWidth = innerWidth;
      _innerHeight = innerHeight;
      _resolution = resolution;
      store.dispatch({
        type: Actions.Resize,
        width: innerWidth,
        height: innerHeight,
        resolution
      })
    }
  }

  return {
    start: function start () {
      window.addEventListener('resize', resize);
      if (intervalTimer) {
        clearInterval(intervalTimer);
      }
      intervalTimer = setInterval(resize, interval);
      resize();
    },
    stop: function stop () {
      window.removeEventListener('resize', resize);
      if (intervalTimer) {
        clearInterval(intervalTimer);
        intervalTimer = null;
      }
    }
  };
}
