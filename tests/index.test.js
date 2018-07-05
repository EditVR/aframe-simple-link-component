/* global assert, setup, suite, test */
require('aframe');
require('../index.js');
const { entityFactory } = require('./helpers');

suite('simple-link component', () => {
  let el;

  setup(done => {
    el = entityFactory();
    el.addEventListener('componentinitialized', evt => {
      if (evt.detail.name !== 'simple-link') {
        return;
      }
      done();
    });
    el.setAttribute('simple-link', {});
  });

  suite('foo property', () => {
    test('is good', () => {
      assert.equal(1, 1);
    });
  });
});
