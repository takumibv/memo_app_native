import React from 'react';
import { Provider } from 'react-redux';
import { Root } from "native-base";
// import { PersistGate } from 'redux-persist/integration/react';
import createFinalStore from './store/index';
import App from './containers/App';

const store = createFinalStore();

export default () => (
  <Provider store={store}>
    <Root>
      <App/>
    </Root>
  </Provider>
);
