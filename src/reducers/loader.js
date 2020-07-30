import { START_LOADING, FINISH_LOADING } from '../actions/actionTypes';

const initialState = {
  loadingCount: 0,
  isLoading: false,
};

export const loader = (state = initialState, { type }) => {
  switch (type) {
    case START_LOADING:
      return {
        loadingCount: state.loadingCount + 1,
        isLoading: true,
      };

    case FINISH_LOADING: {
      const loadingCount = state.loadingCount - 1;
      return {
        loadingCount,
        isLoading: !!loadingCount,
      };
    }

    default:
      return state;
  }
};
