import { SubmissionError } from 'redux-form';
import {
  GET_USER_CARD, UPDATE_USER_CARD, DELETE_USER_CARD, CREATE_USER_CARD,
} from './actionTypes';
import apiServices from '../apiServices';

export const getUserCard = () => async (dispatch) => {
  const response = await apiServices.getUserCard();

  const { data: { data } } = response;

  dispatch({
    type: GET_USER_CARD,
    payload: data || {},
  });
};

export const updateCard = (body, id) => async (dispatch) => {
  const response = await apiServices.updateCard(body, id);

  const { data: { data } } = response;

  dispatch({
    type: UPDATE_USER_CARD,
    payload: data,
  });
};

export const createCard = (body) => async (dispatch) => {
  const response = await apiServices.createCard(body);

  const { data: { data }, isSuccess } = response;

  if (!isSuccess) {
    throw new SubmissionError(data.errors);
  }

  dispatch({
    type: CREATE_USER_CARD,
    payload: data,
  });
};

export const deleteCard = (id) => async (dispatch) => {
  await apiServices.deleteCard(id);

  dispatch({
    type: DELETE_USER_CARD,
    payload: {},
  });
};
