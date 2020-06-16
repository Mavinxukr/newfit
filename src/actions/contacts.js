import { ASYNC_DEC, ASYNC_INC } from './actionTypes';

export const incrementAsync = () => async (dispatch, getState) => {
  const state = getState();
  await setTimeout(() => {
    dispatch({
      type: ASYNC_INC,
      payload: state.contacts.value + 1,
    });
  }, 1000);
};

export const decrementAsync = () => async (dispatch, getState) => {
  const state = getState();
  await setTimeout(() => {
    dispatch({
      type: ASYNC_DEC,
      payload: state.contacts.value - 1,
    });
  }, 1000);
};
