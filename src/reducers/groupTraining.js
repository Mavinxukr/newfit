import {
  GET_GROUP_TRAININGS,
  CREATE_GROUP_TRAININGS,
  DELETE_GROUP_TRAININGS,
  UPDATE_GROUP_TRAININGS,
} from '../actions/actionTypes';

const initialValue = {
  data: [],
};

export const groupTraining = (state = initialValue, { type, payload }) => {
  switch (type) {
    case GET_GROUP_TRAININGS:
    case CREATE_GROUP_TRAININGS:
    case DELETE_GROUP_TRAININGS:
    case UPDATE_GROUP_TRAININGS:
      return { data: payload };
    default:
      return state;
  }
};
