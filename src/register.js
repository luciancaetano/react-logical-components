import { Each, EmptyCollection } from './foreach';
import { HideIf, ShowIf } from './showif-hideif';
import { Switch, SwitchCase, SwitchDefault } from './switch';

interface IGlobalRegisterOptions{
    each: boolean;
    emptyCollection: boolean;
    hideIF: boolean;
    showIF: boolean;
    switch: boolean;
    switchCase: boolean;
    switchDefault: boolean;
}

/**
 * Register all components globally for ease of use
 * @param {IGlobalRegisterOptions} options
 */
export const globalRegister = (options: IGlobalRegisterOptions = {
    each: true,
    emptyCollection: true,
    hideIf: true,
    showIf: true,
    switch: true,
    switchCase: true,
    switchDefault: true
}) => {
    global.reactLogicalComponentesGlobalRegistered = options;
    if (options.each) {
        global.Each = Each;
    }
    if (options.emptyCollection) {
        global.EmptyCollection = EmptyCollection;
    }
    if (options.hideIf) {
        global.HideIf = HideIf;
    }
    if (options.showIf) {
        global.ShowIf = ShowIf;
    }
    if (options.switch) {
        global.Switch = Switch;
    }
    if (options.switchCase) {
        global.SwitchCase = SwitchCase;
    }
    if (options.switchDefault) {
        global.SwitchDefault = SwitchDefault;
    }
};
