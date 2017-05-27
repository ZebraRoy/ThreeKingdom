import {
  game
} from './reducers/index';
import {
  ViewportController
} from './controller/viewport-controller';
import {
  RendererController
} from './controller/renderer-controller';
import {
  importPixiBaseView
} from '../vendor/helium';

export class Game {
  constructor () {
    const store = Redux.createStore(game);
    const socket = window.io();

    this.store = store;
    this.socket = socket;
  }

  start () {
    importPixiBaseView();
    const store = this.store;
    const viewportController = ViewportController(store);
    viewportController.start(); // ensure the viewport has been initialize
    const state = store.getState();
    const viewport = state.viewport;
    const {
      width,
      height,
      resolution
    } = viewport;
    const renderer = PIXI.autoDetectRenderer(width / resolution, height / resolution, {
      autoResize: true,
      resolution
    });
    document.body.appendChild(renderer.view);
    const rendererController = RendererController(store, renderer);
    rendererController.start();
    this.renderer = renderer;
  }
}
