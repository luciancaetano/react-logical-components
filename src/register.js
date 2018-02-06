import { Foreach, ForeachEmpty } from './foreach';
import { HideIF, ShowIF } from './showif-hideif';
import { Switch, SwitchCase, SwitchDefault } from './switch';

interface IGlobalRegisterOptions{
    foreach: boolean;
    foreachEmpty: boolean;
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
    foreach: true,
    foreachEmpty: true,
    hideIF: true,
    showIF: true,
    switch: true,
    switchCase: true,
    switchDefault: true
}) => {
    if (options.foreach) {
        global.Foreach = Foreach;
    }
    if (options.foreachEmpty) {
        global.ForeachEmpty = ForeachEmpty;
    }
    if (options.hideIF) {
        global.HideIF = HideIF;
    }
    if (options.showIF) {
        global.ShowIF = ShowIF;
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
