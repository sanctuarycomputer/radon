'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _radon = require('../radon');

var _radon2 = _interopRequireDefault(_radon);

var _settings = require('../settings');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Grid = function () {
  function Grid() {
    var _this = this;

    var maxWidth = arguments.length <= 0 || arguments[0] === undefined ? 1280 : arguments[0];
    var columns = arguments.length <= 1 || arguments[1] === undefined ? 12 : arguments[1];

    _classCallCheck(this, Grid);

    this.maxWidth = maxWidth;
    this.columns = columns;

    var i = 1;
    while (i < this.columns) {
      this['col' + i] = { width: this.calculateWidth(i) };
      i++;
    }

    Object.keys(_settings.radiumSelectors.breakpoints).forEach(function (breakpoint) {
      var j = 1;
      while (j < _this.columns) {
        var someObject = {};
        someObject[breakpoint] = [{ width: _this.calculateWidth(j) }];
        _this[breakpoint + 'Col' + j] = (0, _radon2.default)(someObject);
        j++;
      }
    });
  }

  _createClass(Grid, [{
    key: 'calculateWidth',
    value: function calculateWidth(columnCount) {
      return columnCount / this.columns * 100 + '%';
    }
  }]);

  return Grid;
}();

exports.default = Grid;