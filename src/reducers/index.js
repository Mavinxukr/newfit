import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { auth } from './auth';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  contacts: auth,
});
export default createRootReducer;
