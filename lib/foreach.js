'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Foreach = exports.ForeachEmpty = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * This component expose default ReactNodes to Foreach component
 */
var ForeachEmpty = exports.ForeachEmpty = function (_React$Component) {
    _inherits(ForeachEmpty, _React$Component);

    function ForeachEmpty() {
        _classCallCheck(this, ForeachEmpty);

        return _possibleConstructorReturn(this, (ForeachEmpty.__proto__ || Object.getPrototypeOf(ForeachEmpty)).apply(this, arguments));
    }

    _createClass(ForeachEmpty, [{
        key: 'render',
        value: function render() {
            return _react.Children.map(this.props.children, function (child, index) {
                return _react2.default.isValidElement(child) ? _react2.default.cloneElement(child, { key: index }) : child;
            });
        }
    }]);

    return ForeachEmpty;
}(_react2.default.Component);
/**
 * This component makes an interaction on a vector or an object using Object.keys,
 * see an example usage. Use <ForeachEmpty> to render a default content when collection is empty.
 */


var Foreach = exports.Foreach = function (_React$Component2) {
    _inherits(Foreach, _React$Component2);

    function Foreach() {
        _classCallCheck(this, Foreach);

        return _possibleConstructorReturn(this, (Foreach.__proto__ || Object.getPrototypeOf(Foreach)).apply(this, arguments));
    }

    _createClass(Foreach, [{
        key: 'render',
        value: function render() {
            // Find ForeachEmpty
            var ForeachEmptyChildren = null;
            var renderCallback = null;
            if (this.props.children.forEach === undefined) {
                renderCallback = this.props.children;
            } else {
                this.props.children.forEach(function (child, index) {
                    if (child.type === ForeachEmpty) {
                        ForeachEmptyChildren = child;
                    } else if (child instanceof Function || typeof child === 'function') {
                        renderCallback = child;
                    }
                });
            }

            if (renderCallback instanceof Function || typeof this.props.itens === 'function') {
                if (Array.isArray(this.props.itens) && this.props.itens.map !== undefined) {
                    var _itens = [].concat(_toConsumableArray(this.props.itens));
                    if (_itens.length > 0) {
                        return _itens.map(function (item, index) {
                            return renderCallback(item, index);
                        });
                    } else {
                        return ForeachEmptyChildren ? _react2.default.cloneElement(ForeachEmptyChildren) : null;
                    }
                } else {
                    var _itens2 = _extends({}, this.props.itens);
                    var keys = Object.keys(_itens2);
                    if (keys.length > 0) {
                        return keys.map(function (key, index) {
                            return renderCallback(_itens2[key], index, key);
                        });
                    } else {
                        return ForeachEmptyChildren ? _react2.default.cloneElement(ForeachEmptyChildren) : null;
                    }
                }
            } else if (ForeachEmptyChildren) {
                return _react2.default.cloneElement(ForeachEmptyChildren);
            } else {
                throw new Error('Invalid children suplied in foreach, foreach children must bem function(item, index)');
                return null;
            }
        }
    }]);

    return Foreach;
}(_react2.default.Component);

Foreach.propTypes = {
    itens: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object])
};
Foreach.defaultProps = {
    itens: []
};