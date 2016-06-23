'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Whitespace = function Whitespace() {
  var unit = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];

  _classCallCheck(this, Whitespace);

  var range = [0, 0.5, 1, 2, 4];

  range = range.map(function (number) {
    return number * unit + 'rem';
  });

  var i = 0;
  while (i < range.length) {
    this['p' + i] = { padding: range[i] };
    this['pt' + i] = { paddingTop: range[i] };
    this['pb' + i] = { paddingBottom: range[i] };
    this['pl' + i] = { paddingLeft: range[i] };
    this['pr' + i] = { paddingRight: range[i] };

    this['m' + i] = { margin: range[i] };
    this['mt' + i] = { marginTop: range[i] };
    this['mb' + i] = { marginBottom: range[i] };
    this['ml' + i] = { marginLeft: range[i] };
    this['mr' + i] = { marginRight: range[i] };
    i++;
  }
};

exports.default = Whitespace;