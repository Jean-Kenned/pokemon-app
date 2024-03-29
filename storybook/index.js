import { AppRegistry } from 'react-native';
import { getStorybookUI, configure, addDecorator } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { name as appName } from '../app.json';
import './rn-addons';
import { loadStories } from './storyLoader';

addDecorator(withKnobs);

configure(() => {
  loadStories();
}, module);

const StorybookUIRoot = getStorybookUI({ asyncStorage: null });

AppRegistry.registerComponent(appName, () => StorybookUIRoot);

export default StorybookUIRoot;
