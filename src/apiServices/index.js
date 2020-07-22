import api from '../api';

class Api {
  register = async (body) => api.post('register', body)
}

export default new Api();
