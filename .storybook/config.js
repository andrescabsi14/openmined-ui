import { configure } from '@storybook/react';

function loadStories() {
  // TODO: Move to src/dynamically load
  require('../stories/button.js');
}

configure(loadStories, module);
