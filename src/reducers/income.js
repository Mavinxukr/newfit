import { GET_INCOME } from '../actions/actionTypes';

const initialValue = {
  data: {},
};

export const income = (state = initialValue, { type, payload }) => {
  switch (type) {
    case GET_INCOME:
      return { data: payload };
    default:
      return state;
  }
};
