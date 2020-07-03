import * as actionTypes from './actionTypes';

const hideNotification = () => ({
  type: actionTypes.HIDE_NOTIFICATION,
});

export const notify = (content) => (dispatch) => {
  dispatch({
    type: actionTypes.SHOW_NOTIFICATION,
    payload: content,
  });

  setTimeout(() => {
    dispatch(hideNotification());
  }, 5000);
};
