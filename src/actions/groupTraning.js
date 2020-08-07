import {
  GET_GROUP_TRAININGS,
  DELETE_GROUP_TRAININGS,
  CREATE_GROUP_TRAININGS,
  UPDATE_GROUP_TRAININGS,
} from './actionTypes';
import apiServices from '../apiServices';

export const getGroupTraining = () => async (dispatch) => {
  const response = await apiServices.getGroupTraining();

  const { data: { data } } = response;

  dispatch({
    type: GET_GROUP_TRAININGS,
    payload: data,
  });
};

export const createGroupTraining = (body) => async (dispatch) => {
  const response = await apiServices.createGroupTraining(body);

  dispatch({
    type: CREATE_GROUP_TRAININGS,
    payload: response,
  });
};

export const updateGroupTraining = (body, id) => async (dispatch) => {
  const response = await apiServices.updateGroupTraining(body, id);

  dispatch({
    type: UPDATE_GROUP_TRAININGS,
    payload: response,
  });
};

export const deleteGroupTraining = (id) => async (dispatch) => {
  const response = await apiServices.deleteGroupTraining(id);

  dispatch({
    type: DELETE_GROUP_TRAININGS,
    payload: response,
  });
};
