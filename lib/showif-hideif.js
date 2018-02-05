'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HideIF = exports.ShowIF = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * This component will only render children elements if the value attribute is true
 */
var ShowIF = exports.ShowIF = function (_React$Component) {
    _inherits(ShowIF, _React$Component);

    function ShowIF() {
        _classCallCheck(this, ShowIF);

        return _possibleConstructorReturn(this, (ShowIF.__proto__ || Object.getPrototypeOf(ShowIF)).apply(this, arguments));
    }

    _createClass(ShowIF, [{
        key: 'render',
        value: function render() {
            if (!this.props.value) return null;
            return _react.Children.map(this.props.children, function (child, index) {
                return _react2.default.isValidElement(child) ? _react2.default.cloneElement(child, { key: index }) : child;
            });
        }
    }]);

    return ShowIF;
}(_react2.default.Component);
/**
 * This component will not render children elements if the value attribute is true
 */


ShowIF.propTypes = {
    value: _propTypes2.default.bool.isRequired
};
ShowIF.defaultProps = {
    value: false
};

var HideIF = exports.HideIF = function (_React$Component2) {
    _inherits(HideIF, _React$Component2);

    function HideIF() {
        _classCallCheck(this, HideIF);

        return _possibleConstructorReturn(this, (HideIF.__proto__ || Object.getPrototypeOf(HideIF)).apply(this, arguments));
    }

    _createClass(HideIF, [{
        key: 'render',
        value: function render() {
            if (this.props.value) return null;
            return _react.Children.map(this.props.children, function (child, index) {
                return _react2.default.isValidElement(child) ? _react2.default.cloneElement(child, { key: index }) : child;
            });
        }
    }]);

    return HideIF;
}(_react2.default.Component);

HideIF.propTypes = {
    value: _propTypes2.default.bool.isRequired
};
HideIF.defaultProps = {
    value: false
};