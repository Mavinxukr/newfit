import {
  GET_USER_CARD, UPDATE_USER_CARD, DELETE_USER_CARD, CREATE_USER_CARD,
} from '../actions/actionTypes';

const initialValue = {
  data: {},
};

export const userCard = (state = initialValue, { type, payload }) => {
  switch (type) {
    case GET_USER_CARD:
    case UPDATE_USER_CARD:
    case DELETE_USER_CARD:
    case CREATE_USER_CARD:
      return { data: payload };
    default:
      return state;
  }
};
