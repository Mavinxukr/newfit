import { SET_TAB_INDEX_PRICING } from '../actions/actionTypes';

const initialValue = {
  index: 0,
};

export const pricingTab = (state = initialValue, { type, payload }) => {
  switch (type) {
    case SET_TAB_INDEX_PRICING:
      return { index: payload };
    default:
      return state;
  }
};
