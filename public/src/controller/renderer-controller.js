export function RendererController (store, renderer) {

  let unsubscribe;
  function resize () {
    const state = store.getState();
    const viewport = state.viewport;
    const {
      width,
      height,
      resolution
    } = viewport;
    renderer.resize(width / resolution, height / resolution);
  }

  return {
    start: function start () {
      if (unsubscribe) {
        unsubscribe();
      }
      unsubscribe = store.subscribe(resize);
    },
    stop: function stop () {
      if (unsubscribe) {
        unsubscribe();
        unsubscribe = null;
      }
    }
  };
}
