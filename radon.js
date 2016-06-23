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
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Positioning = function Positioning() {
  _classCallCheck(this, Positioning);

  this['relative'] = { position: 'relative' };
  this['absolute'] = { position: 'absolute' };
  this['fixed'] = { position: 'fixed', willChange: 'transform' };

  this['top0'] = { top: '0px' };
  this['left0'] = { left: '0px' };
  this['right0'] = { right: '0px' };
  this['bottom0'] = { bottom: '0px' };

  this['inline'] = { display: 'inline' };
  this['block'] = { display: 'block' };
  this['inlineBlock'] = { display: 'inline-block' };
  this['tableRow'] = { display: 'table-row' };
  this['tableCell'] = { display: 'table-cell', verticalAlign: 'middle' };
  this['table'] = { display: 'table', borderSpacing: '0px', width: '100%' };

  this['left'] = { float: 'left' };
  this['right'] = { float: 'right' };

  this['overflowAuto'] = { overflow: 'auto' };
  this['overflowHidden'] = { overflow: 'hidden' };
  this['overflowVisible'] = { overflow: 'visible' };
  this['overflowScroll'] = { overflow: 'scroll' };

  this['fullWidth'] = { width: '100%' };
  this['fullHeight'] = { height: '100%' };
  this['mxAuto'] = { marginLeft: 'auto', marginRight: 'auto' };
};

exports.default = Positioning;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Typography = function Typography() {
  var unit = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];

  _classCallCheck(this, Typography);

  var scale = ['4', '2', '1.5', '1.25', '1', '0.875', '0.75'];

  var newScale = scale.map(function (value) {
    return value * unit + 'rem';
  });

  var i = 0;
  while (i < newScale.length) {
    this['h' + i] = { fontSize: newScale[i] };
    i++;
  }

  this['center'] = { textAlign: 'center' };
  this['leftAlign'] = { textAlign: 'left' };
  this['rightAlign'] = { textAlign: 'right' };

  this['alignTop'] = { verticalAlign: 'top' };
  this['alignMiddle'] = { verticalAlign: 'middle' };
  this['alignBottom'] = { verticalAlign: 'bottom' };

  this['italic'] = { fontStyle: 'italic' };
  this['caps'] = { textTransform: 'uppercase' };
  this['justify'] = { textAlign: 'justify' };
  this['noWrap'] = { whiteSpace: 'nowrap' };
  this['underline'] = { textDecoration: 'underline' };
  this['noUnderline'] = { textDecoration: 'none' };
  this['trackedOut'] = { letterSpacing: '0.1em' };
  this['listReset'] = { listStyle: 'none', paddingLeft: '0px' };
};

exports.default = Typography;
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
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Grid = exports.Colors = exports.Typography = exports.Positioning = exports.Whitespace = exports.Settings = undefined;

var _Settings = require('./css/Settings');

Object.defineProperty(exports, 'Settings', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Settings).default;
  }
});

var _Whitespace = require('./css/Whitespace');

Object.defineProperty(exports, 'Whitespace', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Whitespace).default;
  }
});

var _Positioning = require('./css/Positioning');

Object.defineProperty(exports, 'Positioning', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Positioning).default;
  }
});

var _Typography = require('./css/Typography');

Object.defineProperty(exports, 'Typography', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Typography).default;
  }
});

var _Colors = require('./css/Colors');

Object.defineProperty(exports, 'Colors', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Colors).default;
  }
});

var _Grid = require('./css/Grid');

Object.defineProperty(exports, 'Grid', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Grid).default;
  }
});

var _radon = require('./radon');

var _radon2 = _interopRequireDefault(_radon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _radon2.default;
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
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var radiumSelectors = exports.radiumSelectors = {
  pseudo: {
    hover: ':hover',
    active: ':active',
    focus: ':focus'
  },
  breakpoints: {
    medium: '@media (min-width: 768px)',
    large: '@media (min-width: 1040px)'
  }
};

var colors = exports.colors = {
  white: 'white',
  black: 'black',
  fuschia: 'fuchsia',
  green: 'green',
  red: 'red',
  yellow: 'yellow'
};
