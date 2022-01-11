import React from 'react';
import {Provider} from 'react-redux';
import Routes from '@/main/routes';
import {store} from '@/main/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
