import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import Finance from './Pages/Finance/Finance';
import Pricing from './Pages/Pricing/Pricing';
import GroupLive from './Pages/GroupLive/GroupLive';
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
        <Route
          exact
          path="/pricing"
          component={Pricing}
        />
        <Route
          exact
          path="/group-live"
          component={GroupLive}
        />
      </Switch>
    </ConnectedRouter>
  </Provider>
);

export default App;
