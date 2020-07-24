import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as form } from 'redux-form';
import { auth } from './auth';
import { pricingTab } from './pricingTab';
import { notification } from './notification';
import { user } from './user';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  auth,
  pricingTab,
  notification,
  user,
  form,
});
export default createRootReducer;
