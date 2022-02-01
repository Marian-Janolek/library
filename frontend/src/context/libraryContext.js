import { useReducer, useContext, createContext, useEffect } from 'react';
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
import reducer from '../reducer/libraryReducer';
import axios from 'axios';

const initialState = {
  isLoading: false,
  error: false,
  libraries: [],
  numOfStudents: 0,
  numOfBooks: 0,
  single_Library: {},
};

const LibraryContext = createContext();

const LibraryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getLibraries = async () => {
    dispatch({ type: GET_LIBRARIES_BEGIN });
    try {
      const { data } = await axios('/api/v1/libraries');
      const { libraries } = data;
      dispatch({ type: GET_LIBRARIES_SUCCESS, payload: { libraries } });
    } catch (error) {
      dispatch({ type: GET_LIBRARIES_ERROR });
    }
  };

  useEffect(() => {
    getLibraries();
  }, []);

  return (
    <LibraryContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </LibraryContext.Provider>
  );
};

const useLibraryContext = () => {
  return useContext(LibraryContext);
};

export { LibraryProvider, useLibraryContext };
