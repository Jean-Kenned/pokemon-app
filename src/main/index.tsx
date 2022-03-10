import React from 'react';
import {Provider} from 'react-redux';
import Routes from '@/main/routes';
import {store} from '@/main/store';
import StorybookUIRoot from '@/../storybook';
import Config from 'react-native-config';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};


export default Config.STORYBOOK_UI === 'true' ? StorybookUIRoot : App;
