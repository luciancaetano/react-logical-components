'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HideIf = exports.ShowIf = undefined;

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
var ShowIf = exports.ShowIf = function (_React$Component) {
    _inherits(ShowIf, _React$Component);

    function ShowIf() {
        _classCallCheck(this, ShowIf);

        return _possibleConstructorReturn(this, (ShowIf.__proto__ || Object.getPrototypeOf(ShowIf)).apply(this, arguments));
    }

    _createClass(ShowIf, [{
        key: 'render',
        value: function render() {
            if (!this.props.value) return null;
            return _react.Children.map(this.props.children, function (child, index) {
                return _react2.default.isValidElement(child) ? _react2.default.cloneElement(child, { key: index }) : child;
            });
        }
    }]);

    return ShowIf;
}(_react2.default.Component);
/**
 * This component will not render children elements if the value attribute is true
 */


ShowIf.propTypes = {
    value: _propTypes2.default.bool.isRequired
};
ShowIf.defaultProps = {
    value: false
};

var HideIf = exports.HideIf = function (_React$Component2) {
    _inherits(HideIf, _React$Component2);

    function HideIf() {
        _classCallCheck(this, HideIf);

        return _possibleConstructorReturn(this, (HideIf.__proto__ || Object.getPrototypeOf(HideIf)).apply(this, arguments));
    }

    _createClass(HideIf, [{
        key: 'render',
        value: function render() {
            if (this.props.value) return null;
            return _react.Children.map(this.props.children, function (child, index) {
                return _react2.default.isValidElement(child) ? _react2.default.cloneElement(child, { key: index }) : child;
            });
        }
    }]);

    return HideIf;
}(_react2.default.Component);

HideIf.propTypes = {
    value: _propTypes2.default.bool.isRequired
};
HideIf.defaultProps = {
    value: false
};