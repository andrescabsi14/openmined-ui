import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import { BackgroundGradient } from '../src/index.js';

const stories = storiesOf('BackgroundGradient', module);

stories.addDecorator(withKnobs);


stories.add('initial',
  () => <BackgroundGradient
    animated={boolean('animated', false)}
  />
)
