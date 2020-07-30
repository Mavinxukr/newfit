import { START_LOADING, FINISH_LOADING } from './actionTypes';

export const startLoading = () => (dispatch) => {
  dispatch({
    type: START_LOADING,
  });
};

export const finishLoading = () => (dispatch) => {
  dispatch({
    type: FINISH_LOADING,
  });
};
