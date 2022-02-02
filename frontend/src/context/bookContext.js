import { useReducer, useContext, createContext, useEffect } from 'react';
import {
  GET_BOOKS_BEGIN,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_ERROR,
  CLEAR_VALUES,
  HANDLE_CHANGE,
  CREATE_BOOK_BEGIN,
  CREATE_BOOK_SUCCESS,
  CREATE_BOOK_ERROR,
} from '../actions/actions';
import reducer from '../reducer/bookReducer';
import axios from 'axios';

const initialState = {
  isLoading: false,
  error: false,
  title: '',
  genre: '',
  students: [],
  borrowedBooks: [],
};

const BooksContext = createContext();

const BookProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getBooks = async () => {
    dispatch({ type: GET_BOOKS_BEGIN });
    try {
      const { data } = await axios('/api/v1/books');
      const { books } = data;
      dispatch({ type: GET_BOOKS_SUCCESS, payload: { books } });
    } catch (error) {
      dispatch({ type: GET_BOOKS_ERROR });
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  const createBook = async () => {
    dispatch({ type: CREATE_BOOK_BEGIN });
    try {
      const { title, genre } = state;
      await axios.post('/api/v1/books', { title, genre });
      dispatch({ type: CREATE_BOOK_SUCCESS });
      getBooks();
    } catch (error) {
      dispatch({ type: CREATE_BOOK_ERROR });
    }
  };

  const handleChange = ({ name, value }) => {
    dispatch({ type: HANDLE_CHANGE, payload: { value, name } });
  };

  const clearValues = async () => {
    dispatch({ type: CLEAR_VALUES });
  };

  return (
    <BooksContext.Provider
      value={{
        ...state,
        clearValues,
        handleChange,
        createBook,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};

const useBooksContext = () => {
  return useContext(BooksContext);
};

export { BookProvider, useBooksContext };
