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
  SocketController
} from './controller/socket-controller';
import {
  importPixiBaseView,
  registerBaseView,
  Provider,
  createElement,
  HOM,
  render,
  patchAnimation
} from '../vendor/helium';
import {
  TextField
} from './base-views/text-field';
import {
  ConnectMainScene
} from './views/main-scene';
import {
  ConnectInfernoMainScene
} from './views/inferno-main-scene';
import {
  render as infernoRender
} from 'inferno';
import infernoCreateElement from 'inferno-create-element';
import {
  Provider as InfernoProvider
} from 'inferno-redux';

export class Game {
  constructor () {
    const store = Redux.createStore(game);
    const socket = window.io();

    this.store = store;
    this.socket = socket;
  }

  start () {
    importPixiBaseView();
    registerBaseView('TextField', TextField);
    const store = this.store;
    const viewportController = ViewportController(store);
    viewportController.start(); // ensure the viewport has been initialize
    const state = store.getState();
    const viewport = state.viewport;
    const infernoStage = document.getElementById('inferno-stage');
    const heliumStage = document.getElementById('helium-stage');
    const {
      width,
      height,
      resolution
    } = viewport;
    const renderer = PIXI.autoDetectRenderer(width / resolution, height / resolution, {
      autoResize: true,
      resolution
    });
    heliumStage.appendChild(renderer.view);
    const rendererController = RendererController(store, renderer);
    const socketController = SocketController(store);
    rendererController.start();
    const input = createElement(
      Provider,
      {
        store: store
      },
      createElement(
        ConnectMainScene
      )
    );
    const root = new HOM('Container');
    const draw = function draw () {
      patchAnimation(Date.now());
      renderer.render(root.tagInstance.el);
      requestAnimationFrame(draw);
    };
    render(input, root);
    infernoRender(infernoCreateElement(
      InfernoProvider,
      {
        store
      },
      createElement(ConnectInfernoMainScene)
    ), infernoStage);
    draw();
    socketController.start();
    this.renderer = renderer;
  }
}
