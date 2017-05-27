export class TextField {
  constructor () {
    const el = new PIXI.Sprite();
    const input = document.createElement('input');
    this.isFocus = false;
    input.style.position = 'fixed';
    input.style.display = 'none';
    input.style.zIndex = 2;
    document.body.appendChild(input);

    input.addEventListener('blur', () => {
      input.style.display = 'none';
      this.isFocus = false;
      if (el.blur) {
        el.blur();
      }
    });
    input.addEventListener('change', () => {
      if (el.change) {
        el.change(input.value);
      }
    });
    el.interactive = true;
    el.fontSize = 16;
    el.color = '#000';
    el.pointertap = () => {
      this.isFocus = true;
      this.updateInput();
      input.style.display = 'block';
      input.focus();
      if (el.focus) {
        el.focus();
      }
    };

    this.el = el;
    this.input = input;
  }

  updateInput () {
    const el = this.el;
    const input = this.input;
    el.updateTransform();
    input.style.width = el.worldTransform.a + 'px';
    input.style.height = el.worldTransform.d + 'px';
    input.style.top = el.worldTransform.ty + 'px';
    input.style.left = el.worldTransform.tx + 'px';
    input.style.fontSize = el.fontSize + 'px';
    input.style.color = el.color;
  }

  setAttribute (key, value) {
    this.el[key] = value;
    if (this.isFocus) {
      this.updateInput();
    }
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
