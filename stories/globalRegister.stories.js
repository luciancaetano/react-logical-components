import React from 'react';
import { withKnobs, array, boolean, select } from '@storybook/addon-knobs/react';
import { storiesOf, setAddon } from '@storybook/react';
import { globalRegister } from '../src';
import JSXAddon from 'storybook-addon-jsx';

setAddon(JSXAddon);

globalRegister();

let arrayTodoList:Array<any> = ['Buy Lettuce', 'Buy Potato', 'Buy Onions'];
let stories = storiesOf('globalRegister', module);
stories.addDecorator(withKnobs);

stories.addWithJSX('Foreach', () => (
    <ul>
        <Foreach itens={array('Array List', arrayTodoList)}>
            {(item: any, index: any): React.ReactNode => {
                return <li key={index}>{item}</li>;
            }}
        </Foreach>
    </ul>
), { showFunctions: true });

stories.addWithJSX('ShowIF', () => (
    <ShowIF value={boolean('Bool Value', true)}>
        <button>Hello World</button>
    </ShowIF>
));

stories.addWithJSX('HideIF', () => (
    <HideIF value={boolean('Bool Value', true)}>
        <button>Hello World</button>
    </HideIF>
));

stories.addWithJSX('Switch, SwitchCase and SwitchDefault', () => (
    <Switch value={select('Options', ['Male', 'Female', 'Not declared'], 'Male')}>
        <SwitchCase value={'Male'}>
            Mr.
        </SwitchCase>
        <SwitchCase value={'Female'}>
            Mrs.
        </SwitchCase>
        <SwitchDefault>
            Unknown
        </SwitchDefault>
    </Switch>
));
