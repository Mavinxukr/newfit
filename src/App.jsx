import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import Finance from './Pages/Finance/Finance';
import Pricing from './Pages/Pricing/Pricing';
import GroupLive from './Pages/GroupLive/GroupLive';
import GroupLiveWaiting from './Pages/GroupLiveWaiting/GroupLiveWaiting';
import GroupLiveFinish from './Pages/GroupLiveFinish/GroupLiveFinish';
import Notification from './Components/shared/Notification/Notification';
import Template from './Pages/Template/Template';
import PaymentReceived from './Pages/PaymentReceived/PaymentReceived';
import Payments from './Pages/Payments/Payments';
import { isShowedNotification, isLoadingSelector } from './selectors';
import history from './history';
import './index.scss';
import Training from './Pages/Training/Training';

const App = () => {
  const isShowed = useSelector(isShowedNotification);
  const isLoading = useSelector(isLoadingSelector);

  console.log(isLoading);

  return (
    <>
      {isShowed && <Notification />}
      <ConnectedRouter history={history}>
        <Switch>
          <Route
            exact
            path="/"
            component={GroupLive}
          />
          <Route
            exact
            path="/pricing"
            component={Pricing}
          />
          <Route
            exact
            path="/finance"
            component={Finance}
          />
          <Route
            exact
            path="/group-live-training"
            component={Training}
          />
          <Route
            exact
            path="/group-live-waiting"
            component={GroupLiveWaiting}
          />
          <Route
            exact
            path="/group-live-finish"
            component={GroupLiveFinish}
          />
          <Route
            exact
            path="/template"
            component={Template}
          />
          <Route
            exact
            path="/payment-received"
            component={PaymentReceived}
          />
          <Route
            exact
            path="/payments"
            component={Payments}
          />
        </Switch>
      </ConnectedRouter>
    </>
  );
};

export default App;
