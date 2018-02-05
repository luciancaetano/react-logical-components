import React, { ReactNode, Children, ReactChild } from 'react';
import PropTypes from 'prop-types';

interface ISwitchCaseProps{
    value: any;
}
interface ISwitchProps{
    value: any;
}


export class SwitchCase extends React.Component<ISwitchCaseProps> {
    static propTypes = {
        // eslint-disable-next-line
        value: PropTypes.any
    }
    static defaultProps ={
        value: null
    }
    render (): ReactNode {
        return Children.map(this.props.children,
            (child: ReactChild, index: number) =>
                React.isValidElement(child) ? React.cloneElement(child, { key: index }) : child);
    }
}

export class SwitchDefault extends React.Component {
    render (): ReactNode {
        return Children.map(this.props.children,
            (child: ReactChild, index: number) =>
                React.isValidElement(child) ? React.cloneElement(child, { key: index }) : child);
    }
}
export class Switch extends React.Component<ISwitchProps> {
    static propTypes = {
        // eslint-disable-next-line
        value: PropTypes.any
    }
    static defaultProps ={
        value: null
    }
    render (): ReactNode {
        let switchDefaults = [];
        Children.toArray(this.props.children).forEach((child: ReactChild) => {
            if (child.type === SwitchDefault) {
                switchDefaults.push(child);
            }
        });

        let cases = Children.toArray(this.props.children).filter((child: ReactChild) => child.type === SwitchCase);
        let renderCases = [];

        cases.forEach((_case: ReactChild, index: number) => {
            if (this.props.value === _case.props.value) {
                renderCases.push(_case);
            }
        });

        if (renderCases.length > 0) {
            return renderCases.map((child: ReactChild, index: number): ReactNode => React.isValidElement(child) ? React.cloneElement(child, { key: index }) : child);
        } else if (switchDefaults.length > 0) {
            return switchDefaults.map((child: ReactChild, index: number): ReactNode => React.isValidElement(child) ? React.cloneElement(child, { key: index }) : child);
        } else {
            return null;
        }
    }
}
