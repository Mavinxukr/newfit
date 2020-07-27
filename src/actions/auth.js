import { SubmissionError } from 'redux-form';
import Cookies from 'js-cookie';
import { SET_AUTH_STATUS, REGISTER_USER, LOGIN_USER } from './actionTypes';
import { AUTH_STATUSES } from '../constans';
import apiServices from '../apiServices';

export const setAuthStatus = (status) => ({
  type: SET_AUTH_STATUS,
  payload: status,
});

export const getUser = (body, closePopup, isLogin) => async (dispatch) => {
  const method = isLogin ? 'login' : 'register';
  const type = isLogin ? LOGIN_USER : REGISTER_USER;

  const response = await apiServices[method](body);

  const { data, isSuccess } = response;

  if (!isSuccess) {
    throw new SubmissionError(data.errors);
  }

  Cookies.set('token-easyfit', data.token);

  dispatch({
    type,
    payload: data,
  });

  closePopup();
};

export const checkEmail = (body) => async (dispatch) => {
  const response = await apiServices.checkEmail(body);

  const { isSuccess } = response;

  if (isSuccess) {
    dispatch(setAuthStatus(AUTH_STATUSES.signUp));
  } else {
    dispatch(setAuthStatus(AUTH_STATUSES.login));
  }
};
