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