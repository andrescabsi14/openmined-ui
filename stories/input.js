import React from 'react';

import { storiesOf } from '@storybook/react';

import { Input } from '../src/index.js';

const stories = storiesOf('Input', module);


stories.add('initial',
  () => <Input />
)
