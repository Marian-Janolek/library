import { useReducer, useContext, createContext, useEffect } from 'react';
import {
  GET_BOOKS_BEGIN,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_ERROR,
} from '../actions/actions';
import reducer from '../reducer/bookReducer';
import axios from 'axios';

const initialState = {
  isLoading: false,
  error: false,
  students: [],
  borrowedBooks: [],
  single_student: {},
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

  return (
    <BooksContext.Provider
      value={{
        ...state,
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
