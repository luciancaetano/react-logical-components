import React from 'react';
import { Switch, SwitchCase, SwitchDefault } from '../src/index';
import { withKnobs, select } from '@storybook/addon-knobs/react';
import { storiesOf, setAddon } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';

setAddon(JSXAddon);

let stories = storiesOf('Switch', module);
stories.addDecorator(withKnobs);

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

