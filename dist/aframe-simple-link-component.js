/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* global AFRAME */
if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.');
}
/**
 * Simple Link component for A-Frame.
 */


AFRAME.registerComponent('simple-link', {
  schema: {
    active: {
      default: true,
      type: 'boolean'
    },
    href: {
      default: '',
      type: 'string'
    },
    title: {
      default: '',
      type: 'string'
    },
    radius: {
      default: 1,
      type: 'number'
    },
    font: {
      default: 'kelsonsans',
      type: 'string'
    },
    color: {
      default: '#fff',
      type: 'color'
    },
    titleColor: {
      default: '#fff',
      type: 'color'
    },
    image: {
      default: '',
      type: 'asset'
    },
    on: {
      default: 'click'
    }
  },

  /**
   * Set if component needs multiple instancing.
   */
  multiple: false,

  /**
   * Called once when component is attached. Generally for initial setup.
   */
  init: function init() {
    this.navigate = this.navigate.bind(this);
    var el = this.el;
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

    var textEl = document.createElement('a-entity');
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
  update: function update(oldData) {
    var data = this.data;

    if (data.on !== oldData.on) {
      this.updateEventListener();
    }
  },

  /**
   * Called when a component is removed (e.g., via removeAttribute).
   * Generally undoes all modifications to the entity.
   */
  remove: function remove() {
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
  pause: function pause() {},

  /**
   * Called when entity resumes.
   * Use to continue or add any dynamic or background behavior such as events.
   */
  play: function play() {
    this.updateEventListener();
  },
  updateEventListener: function updateEventListener() {
    var el = this.el;

    if (!el.isPlaying) {
      return;
    }

    this.removeEventListener();
    el.addEventListener(this.data.on, this.navigate);
  },
  removeEventListener: function removeEventListener() {
    var on = this.data.on;

    if (on) {
      this.el.removeEventListener(on, this.navigate);
    }
  },

  /**
   * Called when the link is clicked.
   *
   */
  navigate: function navigate() {
    if (this.data.active) {
      window.location = this.data.href;
    }
  }
});

/***/ })
/******/ ]);