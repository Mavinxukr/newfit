import { SET_AUTH_STATUS } from '../actions/actionTypes';
import { AUTH_STATUSES } from '../constans';

const initialValue = {
  status: AUTH_STATUSES.entry,
};

export const auth = (state = initialValue, { type, payload }) => {
  switch (type) {
    case SET_AUTH_STATUS:
      return { status: payload };
    default:
      return state;
  }
};
