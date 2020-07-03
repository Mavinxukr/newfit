import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isShowed: false,
  content: null,
};

export const notification = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SHOW_NOTIFICATION:
      return {
        isShowed: true,
        content: payload,
      };

    case actionTypes.HIDE_NOTIFICATION:
      return {
        isShowed: false,
        content: null,
      };

    default:
      return state;
  }
};
