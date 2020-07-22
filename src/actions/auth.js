import { SubmissionError } from 'redux-form';
import { SET_AUTH_STATUS, REGISTER_USER } from './actionTypes';
import apiServices from '../apiServices';

export const setAuthStatus = (status) => ({
  type: SET_AUTH_STATUS,
  payload: status,
});

export const register = (body) => async (dispatch) => {
  const response = await apiServices.register(body);

  const { data, ok } = response;

  console.log(data);

  if (!ok) {
    throw new SubmissionError(data.errors);
  }

  dispatch({
    type: REGISTER_USER,
    payload: response,
  });
};
