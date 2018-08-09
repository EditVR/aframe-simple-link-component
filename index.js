/* global AFRAME */

if (typeof AFRAME === 'undefined') {
  throw new Error(
    'Component attempted to register before AFRAME was available.'
  );
}

/**
 * Simple Link component for A-Frame.
 */
AFRAME.registerComponent('simple-link', {
  schema: {
    active: { default: true, type: 'boolean' },
    href: { default: '', type: 'string' },
    title: { default: '', type: 'string' },
    radius: { default: 1, type: 'number' },
    font: { default: 'kelsonsans', type: 'string' },
    color: { default: '#fff', type: 'color' },
    titleColor: { default: '#fff', type: 'color' },
    image: { default: '', type: 'asset' },
    on: { default: 'click' }
  },

  /**
   * Set if component needs multiple instancing.
   */
  multiple: false,

  /**
   * Called once when component is attached. Generally for initial setup.
   */
  init() {
    this.navigate = this.navigate.bind(this);
    const { el } = this;

    el.setAttribute('geometry', {
      primitive: 'circle',
      radius: this.data.radius
    });
    if (this.data.image) {
      el.setAttribute('material', {
        src: this.data.image,
        color: this.data.color
      });
    }

    const textEl = document.createElement('a-entity');

    textEl.setAttribute('text', {
      color: this.data.textColor,
      align: 'center',
      font: this.data.font,
      value: this.data.title || this.data.href,
      width: 4
    });
    textEl.setAttribute('position', '0 1.5 0');
    el.appendChild(textEl);
  },

  /**
   * Called when component is attached and when component data changes.
   * Generally modifies the entity based on the data.
   */
  update(oldData) {
    const { data } = this;
    if (data.on !== oldData.on) {
      this.updateEventListener();
    }
  },

  /**
   * Called when a component is removed (e.g., via removeAttribute).
   * Generally undoes all modifications to the entity.
   */
  remove() {
    this.removeEventListener();
  },

  /**
   * Called on each scene tick.
   */
  // tick: function (t) { },

  /**
   * Called when entity pauses.
   * Use to stop or remove any dynamic or background behavior such as events.
   */
  pause() {},

  /**
   * Called when entity resumes.
   * Use to continue or add any dynamic or background behavior such as events.
   */
  play() {
    this.updateEventListener();
  },

  updateEventListener() {
    const { el } = this;
    if (!el.isPlaying) {
      return;
    }
    this.removeEventListener();
    el.addEventListener(this.data.on, this.navigate);
  },

  removeEventListener() {
    const {
      data: { on }
    } = this;
    if (on) {
      this.el.removeEventListener(on, this.navigate);
    }
  },

  /**
   * Called when the link is clicked.
   *
   */
  navigate() {
    if (this.data.active) {
      window.location = this.data.href;
    }
  }
});
