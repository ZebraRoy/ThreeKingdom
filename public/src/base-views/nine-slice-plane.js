export class NineSlicePlane {
  constructor ({ texture, leftWidth, topHeight, rightWidth, bottomHeight }) {
    const el = new PIXI.mesh.NineSlicePlane(texture, leftWidth, topHeight, rightWidth, bottomHeight);

    this.el = el;
  }

  setAttribute (key, value) {
    this.el[key] = value;
  }

  removeAttribute () {
  }

  updateChildren (children) {
    this.el.children = [];
    for (let i = 0, len = children.length; i < len; i++) {
      this.el.addChild(children[i].tagInstance.el);
    }
  }
}
