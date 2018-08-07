import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/Table.tsx');
}

configure(loadStories, module);