import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as form } from 'redux-form';
import { auth } from './auth';
import { pricingTab } from './pricingTab';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  auth,
  pricingTab,
  form,
});
export default createRootReducer;
