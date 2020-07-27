import * as actionTypes from './actionTypes';

const hideNotification = () => ({
  type: actionTypes.HIDE_NOTIFICATION,
});

export const notify = (content, time) => (dispatch) => {
  dispatch({
    type: actionTypes.SHOW_NOTIFICATION,
    payload: content,
  });

  setTimeout(() => {
    dispatch(hideNotification());
  }, time);
};
