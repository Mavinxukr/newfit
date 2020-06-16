import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { contacts } from './contacts';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  contacts,
});
export default createRootReducer;
