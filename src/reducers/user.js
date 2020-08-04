import { REGISTER_USER, LOGIN_USER, GET_USER } from '../actions/actionTypes';

const initialValue = {
  data: {},
  isAuth: false,
};

export const user = (state = initialValue, { type, payload }) => {
  switch (type) {
    case REGISTER_USER:
    case LOGIN_USER:
    case GET_USER:
      return { data: payload, isAuth: true };
    default:
      return state;
  }
};
