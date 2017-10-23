import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number, text } from '@storybook/addon-knobs';

import { Heading } from '../src/index.js';
const stories = storiesOf('Heading', module);

stories.addDecorator(withKnobs);

stories.add('initial',
  () => <Heading
    level={number('Level', 1, {min: 1, max: 6})}
    notCapped={boolean('Not capped', false)}
  >
    {text('Label', 'Hello Heading')}
  </Heading>
)
