import api from '../api';

class Api {
  register = async (body) => api.post('register', body);

  checkEmail = async (body) => api.post('check-email', body);

  login = async (body) => api.post('login', body);

  getUserData = () => api.get('user-profile');

  reset = async (body) => api.post('password/email', body);

  getFinance = async () => api.get('withdrawal-payment');

  createFinance = async () => api.post('withdrawal-payment');

  getUserCard = async () => api.get('card');

  updateCard = async (body, id) => api.put(`card/${id}`, body);

  createCard = async (body) => api.post('card', body);

  deleteCard = async (id) => api.delete(`card/${id}`);

  getIncome = async () => api.get('user-income');

  getGroupTraining = async () => api.get('group-trainings');

  createGroupTraining = async (body) => api.post('group-trainings', body);

  updateGroupTraining = async (body, id) => api.post(`group-trainings/${id}`, body);

  deleteGroupTraining = async (id) => api.delete(`group-trainings/${id}`);
}

export default new Api();
