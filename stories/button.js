import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

import { Button } from '../src/index.js';
const stories = storiesOf('Button', module);

stories.addDecorator(withKnobs);


const colors = [
  'teal', // TODO: Make default through component
  'white',
  'black'
]

const sizes = [
  'medium', // TODO: Make default through component
  'small',
  'large'
]

const statuses = [
  'none',
  'success',
  'error'
]

stories.add('with text',
  () => <Button
    onClick={action('clicked')}
    color={select('color', colors)}
    size={select('size', sizes)}
    status={select('statuses', statuses)}
    expanded={boolean('expanded')}
    centered={boolean('centered')}
  >
    {text('Label', 'Hello Button')}
  </Button>
)
