import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as form } from 'redux-form';
import { auth } from './auth';
import { pricingTab } from './pricingTab';
import { notification } from './notification';
import { user } from './user';
import { finance } from './finance';
import { userCard } from './userCard';
import { income } from './income';
import { loader } from './loader';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  auth,
  pricingTab,
  notification,
  user,
  finance,
  userCard,
  income,
  form,
  loader,
});
export default createRootReducer;
