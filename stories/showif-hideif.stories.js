import React from 'react';
import { ShowIf, HideIf } from '../src/index';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import { storiesOf, setAddon } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';

setAddon(JSXAddon);

let stories = storiesOf('ShowIf and HideIf', module);
stories.addDecorator(withKnobs);

stories.addWithJSX('ShowIf', () => (
    <ShowIF value={boolean('Bool Value', true)}>
        <button>Hello World</button>
    </ShowIF>
));

stories.addWithJSX('HideIf', () => (
    <HideIF value={boolean('Bool Value', true)}>
        <button>Hello World</button>
    </HideIF>
));
