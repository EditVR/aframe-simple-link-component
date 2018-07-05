## aframe-simple-link-component

[![Version](http://img.shields.io/npm/v/@editvr/aframe-simple-link-component.svg?style=flat-square)](https://npmjs.org/package/aframe-dialog-popup-component)
[![CircleCI](http://img.shields.io/circleci/project/github/EditVR/aframe-simple-link-component.svg?style=flat-square)](https://npmjs.org/package/@editvr/aframe-dialog-popup-component)
[![License](http://img.shields.io/npm/l/@editvr/aframe-simple-link-component.svg?style=flat-square)](https://npmjs.org/package/aframe-dialog-popup-component)

Provides a component that makes an entity into a clickable link hotspot. Simple alternative to using `<a-link>`.

For [A-Frame](https://aframe.io).

### API

| Property | Description | Default Value |
| -------- | ----------- | ------------- |
|          |             |               |

### Installation

#### Browser

Install and use by directly including the [browser files](dist):

```html
<head>
  <title>My A-Frame Scene</title>
  <script src="https://aframe.io/releases/0.8.2/aframe.min.js"></script>
  <script src="https://unpkg.com/@editvr/aframe-simple-link-component/dist/aframe-simple-link-component.min.js"></script>
</head>

<body>
  <a-scene>
    <a-entity simple-link="foo: bar"></a-entity>
  </a-scene>
</body>
```

#### npm

Install via npm:

```bash
npm install @editvr/aframe-simple-link-component
```

Then require and use.

```js
require('aframe');
require('@editvr/aframe-simple-link-component');
```
