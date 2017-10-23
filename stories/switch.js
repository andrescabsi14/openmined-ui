import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import { Switch } from '../src/index.js';
const stories = storiesOf('Switch', module);

stories.addDecorator(withKnobs);


stories.add('initial',
  () => <Switch
    checked={boolean('Checked', false)}
    label={text('Label', 'Labels')}
  />
)
