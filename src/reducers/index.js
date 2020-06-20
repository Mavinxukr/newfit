import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { auth } from './auth';
import { pricingTab } from './pricingTab';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  auth,
  pricingTab,
});
export default createRootReducer;
