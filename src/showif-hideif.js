import React, { ReactNode, Children, ReactChild } from 'react';
import PropTypes from 'prop-types';

interface IfProps{
    value: boolean;
}
/**
 * This component will only render children elements if the value attribute is true
 */
export class ShowIf extends React.Component<IfProps> {
    static propTypes = {
        value: PropTypes.bool.isRequired
    }
    static defaultProps ={
        value: false
    }
    render (): ReactNode {
        if (!this.props.value) return null;
        return Children.map(this.props.children,
            (child: ReactChild, index: number) =>
                React.isValidElement(child) ? React.cloneElement(child, { key: index }) : child);
    }
}
/**
 * This component will not render children elements if the value attribute is true
 */
export class HideIf extends React.Component<IfProps> {
    static propTypes = {
        value: PropTypes.bool.isRequired
    }
    static defaultProps ={
        value: false
    }
    render (): ReactNode {
        if (this.props.value) return null;
        return Children.map(this.props.children,
            (child: ReactChild, index: number) =>
                React.isValidElement(child) ? React.cloneElement(child, { key: index }) : child);
    }
}
