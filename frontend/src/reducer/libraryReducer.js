import {
  GET_LIBRARIES_ERROR,
  GET_LIBRARIES_SUCCESS,
  GET_LIBRARIES_BEGIN,
  CREATE_LIBRARY_ERROR,
  CREATE_LIBRARY_BEGIN,
  CREATE_LIBRARY_SUCCESS,
  SET_EDIT_LIBRARY,
  EDIT_LIBRARY_BEGIN,
  EDIT_LIBRARY_ERROR,
  EDIT_LIBRARY_SUCCESS,
  DELETE_LIBRARY,
  HANDLE_CHANGE,
  CLEAR_VALUES,
  CLEAR_ALERT,
  GET_LIBRARY_ID,
  DELETE_FROM_LIBRARY_BEGIN,
  DELETE_FROM_LIBRARY_SUCCESS,
  DELETE_FROM_LIBRARY_ERROR,
  ADD_TO_LIBRARY_ERROR,
  ADD_TO_LIBRARY_SUCCESS,
  ADD_TO_LIBRARY_BEGIN,
  ADD_BOOK_TO_LIBRARY_BEGIN,
  ADD_BOOK_TO_LIBRARY_ERROR,
  ADD_BOOK_TO_LIBRARY_SUCCESS,
  DELETE_BOOK_FROM_LIBRARY_BEGIN,
  DELETE_BOOK_FROM_LIBRARY_SUCCESS,
  DELETE_BOOK_FROM_LIBRARY_ERROR,
} from '../actions/actions';

const reducer = (state, action) => {
  if (action.type === GET_LIBRARIES_BEGIN) {
    return { ...state, isLoading: true, error: false };
  }
  if (action.type === GET_LIBRARIES_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      libraries: action.payload.libraries,
    };
  }
  if (action.type === GET_LIBRARIES_ERROR) {
    return { ...state, isLoading: false, error: true };
  }
  if (action.type === HANDLE_CHANGE) {
    return {
      ...state,
      [action.payload.name]: action.payload.value,
    };
  }
  if (action.type === CREATE_LIBRARY_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === CREATE_LIBRARY_SUCCESS) {
    return { ...state, isLoading: false, showAlert: true };
  }
  if (action.type === CREATE_LIBRARY_ERROR) {
    return { ...state, isLoading: false, error: true };
  }
  if (action.type === DELETE_LIBRARY) {
    return { ...state, isLoading: true };
  }
  if (action.type === DELETE_FROM_LIBRARY_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === DELETE_FROM_LIBRARY_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      numOfStudents: state.numOfStudents - 1,
      showAlert: true,
    };
  }
  if (action.type === DELETE_FROM_LIBRARY_ERROR) {
    return { ...state, isLoading: false, error: true };
  }
  if (action.type === CLEAR_VALUES) {
    return {
      ...state,
      libraryName: '',
      headquarter: '',
      isEditing: false,
    };
  }
  if (action.type === GET_LIBRARY_ID) {
    const library = state.libraries.find(
      (library) => library._id === action.payload.id
    );

    return { ...state, editLibraryId: library._id };
  }
  if (action.type === SET_EDIT_LIBRARY) {
    const library = state.libraries.find(
      (library) => library._id === action.payload.id
    );
    const { _id, libraryName, headquarter } = library;
    return {
      ...state,
      isEditing: true,
      editLibraryId: _id,
      libraryName,
      headquarter,
    };
  }

  if (action.type === EDIT_LIBRARY_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === EDIT_LIBRARY_SUCCESS) {
    return { ...state, isLoading: false };
  }
  if (action.type === EDIT_LIBRARY_ERROR) {
    return { ...state, isLoading: false, error: true };
  }
  if (action.type === ADD_TO_LIBRARY_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === ADD_TO_LIBRARY_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      numOfStudents: state.numOfStudents + 1,
      showAlert: true,
    };
  }
  if (action.type === ADD_TO_LIBRARY_ERROR) {
    return { ...state, isLoading: false, error: true };
  }
  if (action.type === ADD_BOOK_TO_LIBRARY_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === ADD_BOOK_TO_LIBRARY_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      numOfBooks: state.numOfBooks + 1,
      showAlert: true,
    };
  }
  if (action.type === ADD_BOOK_TO_LIBRARY_ERROR) {
    return { ...state, isLoading: false, error: true };
  }
  if (action.type === CLEAR_ALERT) {
    return { ...state, showAlert: false };
  }
  if (action.type === DELETE_BOOK_FROM_LIBRARY_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === DELETE_BOOK_FROM_LIBRARY_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      numOfBooks: state.numOfBooks - 1,
      showAlert: true,
    };
  }
  if (action.type === DELETE_BOOK_FROM_LIBRARY_ERROR) {
    return { ...state, isLoading: false, error: true };
  }

  throw new Error(`No such action : ${action.type}`);
};

export default reducer;
