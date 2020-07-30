import api from '../api';

class Api {
  register = async (body) => api.post('register', body);

  checkEmail = async (body) => api.post('check-email', body);

  login = async (body) => api.post('login', body);

  reset = async (body) => api.post('password/email', body);

  getFinance = async () => api.get('withdrawal-payment');

  createFinance = async () => api.post('withdrawal-payment');

  getUserCard = async () => api.get('card');

  updateCard = async (body, id) => api.post(`card/${id}`, body);

  createCard = async (body) => api.post('card', body);

  deleteCard = async (id) => api.delete(`card/${id}`);

  getIncome = async () => api.get('user-income');
}

export default new Api();
