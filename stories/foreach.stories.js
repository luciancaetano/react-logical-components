import React from 'react';
import { Each, EmptyCollection } from '../src/index';
import { withKnobs, object, array } from '@storybook/addon-knobs/react';
import { storiesOf, setAddon } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';

setAddon(JSXAddon);

let arrayTodoList:Array<any> = ['Buy Lettuce', 'Buy Potato', 'Buy Onions'];
let ObjectTodoList:Array<any> = { a: 'Buy Lettuce', b: 'Buy Potato', c: 'Buy Onions' };
let stories = storiesOf('Each', module);
stories.addDecorator(withKnobs);

stories.addWithJSX('Iterate Array', () => (
    <ul>
        <Each itens={array('Array List', arrayTodoList)}>
            {(item: any, index: any): React.ReactNode => {
                return <li key={index}>{item}</li>;
            }}
        </Each>
    </ul>
));
stories.addWithJSX('Iterate Object', () => (
    <ul>
        <Each itens={object('Object List', ObjectTodoList)}>
            {(item: any, index: any, key: string): React.ReactNode => {
                return <li key={index}>({key}){item}</li>;
            }}
        </Each>
    </ul>
));
stories.addWithJSX('Iterate Empty Array', () => (
    <ul>
        <Each itens={array('Array List', [])}>
            {(item: any, index: any): React.ReactNode => {
                return <li key={index}>{item}</li>;
            }}
        </Each>
    </ul>
));
stories.addWithJSX('Iterate Empty Object', () => (
    <ul>
        <Each itens={object('Object List', [])}>
            {(item: any, index: any): React.ReactNode => {
                return <li key={index}>{item}</li>;
            }}
        </Each>
    </ul>
));
stories.addWithJSX('Iterate Array With EmptyCollection', () => (
    <ul>
        <Each itens={array('Array List', arrayTodoList)}>
            {(item: any, index: any): React.ReactNode => {
                return <li key={index}>{item}</li>;
            }}
            <EmptyCollection>Not found</EmptyCollection>
        </Each>
    </ul>
));
stories.addWithJSX('Iterate Object With EmptyCollection', () => (
    <ul>
        <Each itens={object('Object List', ObjectTodoList)}>
            {(item: any, index: any, key: string): React.ReactNode => {
                return <li key={index}>({key}){item}</li>;
            }}
            <EmptyCollection>Not found</EmptyCollection>
        </Each>
    </ul>
));
stories.addWithJSX('Iterate Empty Array With EmptyCollection', () => (
    <ul>
        <Each itens={array('Array List', [])}>
            {(item: any, index: any): React.ReactNode => {
                return <li key={index}>{item}</li>;
            }}
            <EmptyCollection>Array is empty</EmptyCollection>
        </Each>
    </ul>
));
stories.addWithJSX('Iterate Empty Object With EmptyCollection', () => (
    <ul>
        <Each itens={object('Object List', ObjectTodoList)}>
            {(item: any, index: any): React.ReactNode => {
                return <li key={index}>{item}</li>;
            }}
            <EmptyCollection>Object is empty</EmptyCollection>
        </Each>
    </ul>
));

export default stories;
