import {
  GET_BOOKS_ERROR,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_BEGIN,
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

  throw new Error(`No such action : ${action.type}`);
};

export default reducer;
