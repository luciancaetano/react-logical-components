'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Switch = exports.SwitchDefault = exports.SwitchCase = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SwitchCase = exports.SwitchCase = function (_React$Component) {
    _inherits(SwitchCase, _React$Component);

    function SwitchCase() {
        _classCallCheck(this, SwitchCase);

        return _possibleConstructorReturn(this, (SwitchCase.__proto__ || Object.getPrototypeOf(SwitchCase)).apply(this, arguments));
    }

    _createClass(SwitchCase, [{
        key: 'render',
        value: function render() {
            return _react.Children.map(this.props.children, function (child, index) {
                return _react2.default.isValidElement(child) ? _react2.default.cloneElement(child, { key: index }) : child;
            });
        }
    }]);

    return SwitchCase;
}(_react2.default.Component);

SwitchCase.propTypes = {
    // eslint-disable-next-line
    value: _propTypes2.default.any
};
SwitchCase.defaultProps = {
    value: null
};

var SwitchDefault = exports.SwitchDefault = function (_React$Component2) {
    _inherits(SwitchDefault, _React$Component2);

    function SwitchDefault() {
        _classCallCheck(this, SwitchDefault);

        return _possibleConstructorReturn(this, (SwitchDefault.__proto__ || Object.getPrototypeOf(SwitchDefault)).apply(this, arguments));
    }

    _createClass(SwitchDefault, [{
        key: 'render',
        value: function render() {
            return _react.Children.map(this.props.children, function (child, index) {
                return _react2.default.isValidElement(child) ? _react2.default.cloneElement(child, { key: index }) : child;
            });
        }
    }]);

    return SwitchDefault;
}(_react2.default.Component);

var Switch = exports.Switch = function (_React$Component3) {
    _inherits(Switch, _React$Component3);

    function Switch() {
        _classCallCheck(this, Switch);

        return _possibleConstructorReturn(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).apply(this, arguments));
    }

    _createClass(Switch, [{
        key: 'render',
        value: function render() {
            var _this4 = this;

            var switchDefaults = [];
            _react.Children.toArray(this.props.children).forEach(function (child) {
                if (child.type === SwitchDefault) {
                    switchDefaults.push(child);
                }
            });

            var cases = _react.Children.toArray(this.props.children).filter(function (child) {
                return child.type === SwitchCase;
            });
            var renderCases = [];

            cases.forEach(function (_case, index) {
                if (_this4.props.value === _case.props.value) {
                    renderCases.push(_case);
                }
            });

            if (renderCases.length > 0) {
                return renderCases.map(function (child, index) {
                    return _react2.default.isValidElement(child) ? _react2.default.cloneElement(child, { key: index }) : child;
                });
            } else if (switchDefaults.length > 0) {
                return switchDefaults.map(function (child, index) {
                    return _react2.default.isValidElement(child) ? _react2.default.cloneElement(child, { key: index }) : child;
                });
            } else {
                return null;
            }
        }
    }]);

    return Switch;
}(_react2.default.Component);

Switch.propTypes = {
    // eslint-disable-next-line
    value: _propTypes2.default.any
};
Switch.defaultProps = {
    value: null
};