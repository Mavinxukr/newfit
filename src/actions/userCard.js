import {
  GET_USER_CARD, UPDATE_USER_CARD, DELETE_USER_CARD, CREATE_USER_CARD,
} from './actionTypes';
import apiServices from '../apiServices';

export const getUserCard = () => async (dispatch) => {
  const response = await apiServices.getUserCard();

  const { data } = response;

  dispatch({
    type: GET_USER_CARD,
    payload: data.data || {},
  });
};

export const updateCard = (body, id) => async (dispatch) => {
  const response = await apiServices.updateCard(body, id);

  const { data } = response;

  dispatch({
    type: UPDATE_USER_CARD,
    payload: data,
  });
};

export const createCard = (body) => async (dispatch) => {
  const response = await apiServices.createCard(body);

  const { data } = response;

  dispatch({
    type: CREATE_USER_CARD,
    payload: data,
  });
};

export const deleteCard = (id) => async (dispatch) => {
  const response = await apiServices.deleteCard(id);

  const { data } = response;

  dispatch({
    type: DELETE_USER_CARD,
    payload: data,
  });
};
