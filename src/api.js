import { create } from 'apisauce';
import Cookies from 'js-cookie';
import store from './store';
import { startLoading, finishLoading } from './actions/loader';

const api = create({
  baseURL: 'http://site.laragrid.online/api/',
  headers: { Accept: 'application/json', 'Content-Type': 'application/json', Authorization: `Bearer ${Cookies.get('token-easyfit')}` },
});

api.addRequestTransform(() => {
  store.dispatch(startLoading());
});

api.addResponseTransform(() => {
  store.dispatch(finishLoading());
});

api.addResponseTransform((response) => {
  response.isSuccess = response.ok;
  response.data = response.data || {};
});

export default api;
