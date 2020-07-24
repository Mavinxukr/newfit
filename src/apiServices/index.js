import api from '../api';

class Api {
  register = async (body) => api.post('register', body);

  checkEmail = async (body) => api.post('check-email', body);

  login = async (body) => api.post('login', body);
}

export default new Api();
