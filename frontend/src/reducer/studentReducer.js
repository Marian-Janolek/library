import {
  GET_STUDENTS_BEGIN,
  GET_STUDENTS_SUCCESS,
  GET_STUDENTS_ERROR,
  CREATE_STUDENT_BEGIN,
  CREATE_STUDENT_SUCCESS,
  CREATE_STUDENT_ERROR,
  DELETE_STUDENT,
  SET_EDIT_STUDENT,
  EDIT_STUDENT_BEGIN,
  EDIT_STUDENT_SUCCESS,
  EDIT_STUDENT_ERROR,
  CLEAR_VALUES,
  HANDLE_CHANGE,
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
  if (action.type === CREATE_STUDENT_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === CREATE_STUDENT_SUCCESS) {
    return { ...state, isLoading: false };
  }
  if (action.type === CREATE_STUDENT_ERROR) {
    return { ...state, isLoading: false, error: true };
  }
  if (action.type === HANDLE_CHANGE) {
    return {
      ...state,
      [action.payload.name]: action.payload.value,
    };
  }
  if (action.type === DELETE_STUDENT) {
    return { ...state, isLoading: true };
  }
  if (action.type === CLEAR_VALUES) {
    return { ...state, name: '', email: '', isEditing: false };
  }
  if (action.type === SET_EDIT_STUDENT) {
    const student = state.students.find(
      (student) => student._id === action.payload.id
    );
    const { _id, name, email } = student;
    return {
      ...state,
      isEditing: true,
      editStudentId: _id,
      name,
      email,
    };
  }
  if (action.type === EDIT_STUDENT_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === EDIT_STUDENT_SUCCESS) {
    return { ...state, isLoading: false };
  }
  if (action.type === EDIT_STUDENT_ERROR) {
    return { ...state, isLoading: false, error: true };
  }

  throw new Error(`No such action : ${action.type}`);
};

export default reducer;
