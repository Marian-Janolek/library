import {
  GET_BOOKS_ERROR,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_BEGIN,
  CLEAR_VALUES,
  HANDLE_CHANGE,
  CREATE_BOOK_BEGIN,
  CREATE_BOOK_SUCCESS,
  CREATE_BOOK_ERROR,
} from '../actions/actions';

const reducer = (state, action) => {
  if (action.type === GET_BOOKS_BEGIN) {
    return { ...state, isLoading: true, error: false };
  }
  if (action.type === GET_BOOKS_SUCCESS) {
    return { ...state, isLoading: false, books: action.payload.books };
  }
  if (action.type === GET_BOOKS_ERROR) {
    return { ...state, isLoading: false, error: true };
  }
  if (action.type === CREATE_BOOK_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === CREATE_BOOK_SUCCESS) {
    return { ...state, isLoading: false };
  }
  if (action.type === CREATE_BOOK_ERROR) {
    return { ...state, isLoading: false, error: true };
  }
  if (action.type === HANDLE_CHANGE) {
    return {
      ...state,
      [action.payload.name]: action.payload.value,
    };
  }
  if (action.type === CLEAR_VALUES) {
    return { ...state, title: '', genre: '' };
  }

  throw new Error(`No such action : ${action.type}`);
};

export default reducer;
