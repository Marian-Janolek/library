import {
  GET_STUDENTS_BEGIN,
  GET_STUDENTS_SUCCESS,
  GET_STUDENTS_ERROR,
} from '../actions/actions';

const reducer = (state, action) => {
  if (action.type === GET_STUDENTS_BEGIN) {
    return { ...state, isLoading: true, error: false };
  }
  if (action.type === GET_STUDENTS_SUCCESS) {
    return { ...state, isLoading: false, students: action.payload.students };
  }
  if (action.type === GET_STUDENTS_ERROR) {
    return { ...state, isLoading: false, error: true };
  }

  throw new Error(`No such action : ${action.type}`);
};

export default reducer;
