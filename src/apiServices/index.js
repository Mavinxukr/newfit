import api from '../api';

class Api {
  register = async (body) => api.post('register', body);

  checkEmail = async (body) => api.post('check-email', body);

  login = async (body) => api.post('login', body);

  reset = async (body) => api.post('password/email', body);
}

export default new Api();
