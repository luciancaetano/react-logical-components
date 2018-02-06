import React from 'react';
import { ShowIF, HideIF } from '../src/index';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import { storiesOf, setAddon } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';

setAddon(JSXAddon);

let stories = storiesOf('ShowIF and HideIf', module);
stories.addDecorator(withKnobs);

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
