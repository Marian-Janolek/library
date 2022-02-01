import {
  GET_LIBRARIES_ERROR,
  GET_LIBRARIES_SUCCESS,
  GET_LIBRARIES_BEGIN,
  CREATE_LIBRARY_ERROR,
  CREATE_LIBRARY_BEGIN,
  CREATE_LIBRARY_SUCCESS,
  UPDATE_LIBRARY_ERROR,
  UPDATE_LIBRARY_SUCCESS,
  UPDATE_LIBRARY_BEGIN,
  DELETE_LIBRARY_BEGIN,
  DELETE_LIBRARY_ERROR,
  DELETE_LIBRARY_SUCCESS,
} from '../actions/actions';

const reducer = (state, action) => {
  if (action.type === GET_LIBRARIES_BEGIN) {
    return { ...state, isLoading: true, error: false };
  }
  if (action.type === GET_LIBRARIES_SUCCESS) {
    return { ...state, isLoading: false, libraries: action.payload.libraries };
  }
  if (action.type === GET_LIBRARIES_ERROR) {
    return { ...state, isLoading: false, error: true };
  }

  throw new Error(`No such action : ${action.type}`);
};

export default reducer;
