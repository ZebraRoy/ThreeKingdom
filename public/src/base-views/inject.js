export class Inject {
  constructor () {
    const el = new PIXI.Container();
    this.el = el;
  }

  setAttribute (key, value) {
    if (key === 'el') {
      this.el.addChild(value);
    }
  }

  removeAttribute () {
  }

  updateChildren () {
  }
}
