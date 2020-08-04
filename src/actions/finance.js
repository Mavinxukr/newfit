import { GET_FINANCE, CREATED_FINANCE } from './actionTypes';
import apiServices from '../apiServices';

export const getFinance = () => async (dispatch) => {
  const response = await apiServices.getFinance();

  const { data: { data } } = response;

  dispatch({
    type: GET_FINANCE,
    payload: data,
  });
};

export const createFinance = () => async (dispatch) => {
  const response = await apiServices.createFinance();

  const { data: { data }, isSuccess } = response;

  if (isSuccess) {
    dispatch({
      type: CREATED_FINANCE,
      payload: data,
    });
  } else {
    dispatch({
      type: CREATED_FINANCE,
      payload: 'error',
    });
  }
};
