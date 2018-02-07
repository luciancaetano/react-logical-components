
declare module "react-logical-components"{
    declare namespace ReactLogicalComponents {
        declare interface IfProps{
            value: boolean;
        }
        declare class ShowIF extends React.Component<IfProps>{};
        declare class HideIF extends React.Component<IfProps>{};
        declare interface IForeachProps{
            itens: Array | Object;
        }
        declare class ForeachEmpty extends React.Component<any>{};
        declare class Foreach extends React.Component<IForeachProps>{};
        declare interface ISwitchCaseProps{
            value: any;
        }
        declare interface ISwitchProps{
            value: any;
        }
        declare class SwitchCase extends React.Component<ISwitchCaseProps>{};
        declare class SwitchDefault extends React.Component<any>{};
        declare class Switch extends React.Component<ISwitchProps> {};
        declare interface IGlobalRegisterOptions{
            foreach: boolean;
            foreachEmpty: boolean;
            hideIF: boolean;
            showIF: boolean;
            switch: boolean;
            switchCase: boolean;
            switchDefault: boolean;
        }
        declare function globalRegister(options: IGlobalRegisterOptions = {
            foreach: true,
            foreachEmpty: true,
            hideIF: true,
            showIF: true,
            switch: true,
            switchCase: true,
            switchDefault: true
        });
    }
    export = ReactLogicalComponents
}