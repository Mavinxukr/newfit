import { ASYNC_INC, ASYNC_DEC } from '../actions/actionTypes';

const initialValue = {
  value: 0,
};

export const contacts = (state = initialValue, { type, payload }) => {
  switch (type) {
    case ASYNC_DEC:
    case ASYNC_INC:
      return { value: payload };
    default:
      return state;
  }
};
