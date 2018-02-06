import React from 'react';
import { Foreach, ForeachEmpty } from '../src/index';
import { withKnobs, object, array } from '@storybook/addon-knobs/react';
import { storiesOf, setAddon } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';

setAddon(JSXAddon);

let arrayTodoList:Array<any> = ['Buy Lettuce', 'Buy Potato', 'Buy Onions'];
let ObjectTodoList:Array<any> = { a: 'Buy Lettuce', b: 'Buy Potato', c: 'Buy Onions' };
let stories = storiesOf('Foreach', module);
stories.addDecorator(withKnobs);

stories.addWithJSX('Iterate Array', () => (
    <ul>
        <Foreach itens={array('Array List', arrayTodoList)}>
            {(item: any, index: any): React.ReactNode => {
                return <li key={index}>{item}</li>;
            }}
        </Foreach>
    </ul>
));
stories.addWithJSX('Iterate Object', () => (
    <ul>
        <Foreach itens={object('Object List', ObjectTodoList)}>
            {(item: any, index: any, key: string): React.ReactNode => {
                return <li key={index}>({key}){item}</li>;
            }}
        </Foreach>
    </ul>
));
stories.addWithJSX('Iterate Empty Array', () => (
    <ul>
        <Foreach itens={array('Array List', [])}>
            {(item: any, index: any): React.ReactNode => {
                return <li key={index}>{item}</li>;
            }}
        </Foreach>
    </ul>
));
stories.addWithJSX('Iterate Empty Object', () => (
    <ul>
        <Foreach itens={object('Object List', [])}>
            {(item: any, index: any): React.ReactNode => {
                return <li key={index}>{item}</li>;
            }}
        </Foreach>
    </ul>
));
stories.addWithJSX('Iterate Array With ForeachEmpty', () => (
    <ul>
        <Foreach itens={array('Array List', arrayTodoList)}>
            {(item: any, index: any): React.ReactNode => {
                return <li key={index}>{item}</li>;
            }}
            <ForeachEmpty>Not found</ForeachEmpty>
        </Foreach>
    </ul>
));
stories.addWithJSX('Iterate Object With ForeachEmpty', () => (
    <ul>
        <Foreach itens={object('Object List', ObjectTodoList)}>
            {(item: any, index: any, key: string): React.ReactNode => {
                return <li key={index}>({key}){item}</li>;
            }}
            <ForeachEmpty>Not found</ForeachEmpty>
        </Foreach>
    </ul>
));
stories.addWithJSX('Iterate Empty Array With ForeachEmpty', () => (
    <ul>
        <Foreach itens={array('Array List', [])}>
            {(item: any, index: any): React.ReactNode => {
                return <li key={index}>{item}</li>;
            }}
            <ForeachEmpty>Array is empty</ForeachEmpty>
        </Foreach>
    </ul>
));
stories.addWithJSX('Iterate Empty Object With ForeachEmpty', () => (
    <ul>
        <Foreach itens={object('Object List', ObjectTodoList)}>
            {(item: any, index: any): React.ReactNode => {
                return <li key={index}>{item}</li>;
            }}
            <ForeachEmpty>Object is empty</ForeachEmpty>
        </Foreach>
    </ul>
));

export default stories;
