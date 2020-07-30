import { GET_INCOME } from './actionTypes';
import apiServices from '../apiServices';

export const getIncome = () => async (dispatch) => {
  const response = await apiServices.getIncome();

  const { data } = response;

  dispatch({
    type: GET_INCOME,
    payload: data,
  });
};
