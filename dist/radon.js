'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = radon;

var _settings = require('./settings');

function radon(atomics) {

  var radiumObject = {};

  if (atomics.small) {
    atomics.small.forEach(function (sm) {
      for (var i in sm) {
        radiumObject[i] = sm[i];
      }
    });
  }

  var AllSelectors = Object.assign({}, _settings.radiumSelectors.breakpoints, _settings.radiumSelectors.pseudo);

  Object.keys(atomics).filter(function (size) {
    return size !== 'small';
  }).forEach(function (size) {
    if (!AllSelectors[size]) {
      throw new Error(size + ' has not been defined');
    } else {
      (function () {
        var mediaQueryObject = {};
        atomics[size].forEach(function (atomic) {
          for (var i in atomic) {
            mediaQueryObject[i] = atomic[i];
          }
        });
        radiumObject[AllSelectors[size]] = mediaQueryObject;
      })();
    }
  });

  return radiumObject;
}