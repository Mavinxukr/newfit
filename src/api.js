import { create } from 'apisauce';

const api = create({
  baseURL: 'http://site.laragrid.online/api/',
  headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
});

export default api;
