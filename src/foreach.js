import React, { ReactNode, Children, ReactChild } from 'react';
import PropTypes from 'prop-types';

interface IForeachProps{
    itens: Array | Object;
}

/**
 * This component expose default ReactNodes to Foreach component
 */
export class EmptyCollection extends React.Component<any> {
    render (): ReactNode {
        return Children.map(this.props.children,
            (child: ReactChild, index: number) =>
                React.isValidElement(child) ? React.cloneElement(child, { key: index }) : child);
    }
}
/**
 * This component makes an interaction on a vector or an object using Object.keys,
 * see an example usage. Use <ForeachEmpty> to render a default content when collection is empty.
 */
export class Each extends React.Component<IForeachProps> {
    static propTypes = {
        itens: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
    }
    static defaultProps ={
        itens: []
    }
    render (): ReactNode {
        // Find EmptyCollection
        let ForeachEmptyChildren = null;
        let renderCallback = null;
        if (this.props.children.forEach === undefined) {
            renderCallback = this.props.children;
        } else {
            this.props.children.forEach((child: ReactChild, index: number) => {
                if (child.type === EmptyCollection) {
                    ForeachEmptyChildren = child;
                } else if (child instanceof Function || typeof child === 'function') {
                    renderCallback = child;
                }
            });
        }

        if (renderCallback instanceof Function || typeof this.props.itens === 'function') {
            if (Array.isArray(this.props.itens) && this.props.itens.map !== undefined) {
                const itens = [...this.props.itens];
                if (itens.length > 0) {
                    return itens.map((item, index) => renderCallback(item, index));
                } else {
                    return ForeachEmptyChildren ? React.cloneElement(ForeachEmptyChildren) : null;
                }
            } else {
                const itens = { ...this.props.itens };
                const keys = Object.keys(itens);
                if (keys.length > 0) {
                    return keys.map((key, index) => renderCallback(itens[key], index, key));
                } else {
                    return ForeachEmptyChildren ? React.cloneElement(ForeachEmptyChildren) : null;
                }
            }
        } else if (ForeachEmptyChildren) {
            return React.cloneElement(ForeachEmptyChildren);
        } else {
            throw new Error(`Invalid children suplied in foreach, foreach children must bem function(item, index)`);
            return null;
        }
    }
}


