import React from 'react';
import { ShowIF, HideIF } from '../src/index';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';

let stories = storiesOf('ShowIF and HideIf', module);
stories.addDecorator(withKnobs);

stories.add('ShowIF', () => (
    <ShowIF value={boolean('Bool Value', true)}>
        <button>Hello World</button>
    </ShowIF>
));

stories.add('HideIF', () => (
    <HideIF value={boolean('Bool Value', true)}>
        <button>Hello World</button>
    </HideIF>
));
