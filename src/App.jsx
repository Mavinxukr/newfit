import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import Finance from './Pages/Finance/Finance';
import configureStore from './store';
import history from './history';
import './index.scss';

const store = configureStore({});

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route
          exact
          path="/"
          component={Finance}
        />
      </Switch>
    </ConnectedRouter>
  </Provider>
);

export default App;
