'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _foreach = require('./foreach');

Object.keys(_foreach).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _foreach[key];
    }
  });
});

var _showifHideif = require('./showif-hideif');

Object.keys(_showifHideif).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _showifHideif[key];
    }
  });
});

var _switch = require('./switch');

Object.keys(_switch).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _switch[key];
    }
  });
});

var _register = require('./register');

Object.keys(_register).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _register[key];
    }
  });
});