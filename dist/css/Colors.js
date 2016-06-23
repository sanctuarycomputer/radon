'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _settings = require('../settings');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Colors = function () {
  function Colors() {
    var _this = this;

    _classCallCheck(this, Colors);

    Object.keys(_settings.colors).forEach(function (color) {
      _this[color] = { color: _settings.colors[color] };
      _this['bg' + _this.capFirstLetter(color)] = { backgroundColor: _settings.colors[color] };
      _this['border' + _this.capFirstLetter(color)] = { borderColor: _settings.colors[color] };
    });
  }

  _createClass(Colors, [{
    key: 'capFirstLetter',
    value: function capFirstLetter(color) {
      return color.charAt(0).toUpperCase() + color.slice(1);
    }
  }]);

  return Colors;
}();

exports.default = Colors;