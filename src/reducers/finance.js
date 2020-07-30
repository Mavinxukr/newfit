import { GET_FINANCE, CREATED_FINANCE } from '../actions/actionTypes';

const initialValue = {
  data: [],
};

export const finance = (state = initialValue, { type, payload }) => {
  switch (type) {
    case GET_FINANCE:
    case CREATED_FINANCE:
      return { data: payload };
    default:
      return state;
  }
};
