'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.globalRegister = undefined;

var _foreach = require('./foreach');

var _showifHideif = require('./showif-hideif');

var _switch = require('./switch');

/**
 * Register all components globally for ease of use
 * @param {IGlobalRegisterOptions} options
 */
var globalRegister = exports.globalRegister = function globalRegister() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        each: true,
        emptyCollection: true,
        hideIf: true,
        showIf: true,
        switch: true,
        switchCase: true,
        switchDefault: true
    };

    global.reactLogicalComponentesGlobalRegistered = options;
    if (options.each) {
        global.Each = _foreach.Each;
    }
    if (options.emptyCollection) {
        global.EmptyCollection = _foreach.EmptyCollection;
    }
    if (options.hideIf) {
        global.HideIf = _showifHideif.HideIf;
    }
    if (options.showIf) {
        global.ShowIf = _showifHideif.ShowIf;
    }
    if (options.switch) {
        global.Switch = _switch.Switch;
    }
    if (options.switchCase) {
        global.SwitchCase = _switch.SwitchCase;
    }
    if (options.switchDefault) {
        global.SwitchDefault = _switch.SwitchDefault;
    }
};