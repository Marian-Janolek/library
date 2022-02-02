import { useReducer, useContext, createContext, useEffect } from 'react';
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
} from '../actions/actions';
import reducer from '../reducer/libraryReducer';
import axios from 'axios';

const initialState = {
  isLoading: false,
  error: false,
  isEditing: false,
  libraries: [],
  libraryName: '',
  headquarter: '',
  numOfStudents: 0,
  numOfBooks: 0,
  editLibraryId: '',
  showAlert: false,
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

  const createLibrary = async () => {
    dispatch({ type: CREATE_LIBRARY_BEGIN });
    try {
      const { libraryName, headquarter } = state;
      await axios.post('/api/v1/libraries', { libraryName, headquarter });
      dispatch({ type: CREATE_LIBRARY_SUCCESS });
      getLibraries();
    } catch (error) {
      dispatch({ type: CREATE_LIBRARY_ERROR });
    }
    clearAlert();
  };

  const handleChange = ({ name, value }) => {
    dispatch({ type: HANDLE_CHANGE, payload: { value, name } });
  };

  const deleteLibrary = async (libraryId) => {
    dispatch({ type: DELETE_LIBRARY });
    try {
      await axios.delete(`api/v1/libraries/${libraryId}`);
      getLibraries();
    } catch (error) {}
  };

  const setEditLibrary = async (id) => {
    dispatch({ type: SET_EDIT_LIBRARY, payload: { id } });
  };

  const editLibrary = async () => {
    dispatch({ type: EDIT_LIBRARY_BEGIN });
    try {
      const { libraryName, headquarter } = state;
      await axios.patch(`/api/v1/libraries/${state.editLibraryId}`, {
        libraryName,
        headquarter,
      });
      dispatch({ type: EDIT_LIBRARY_SUCCESS });
      dispatch({ type: CLEAR_VALUES });
      getLibraries();
    } catch (error) {
      dispatch({
        type: EDIT_LIBRARY_ERROR,
      });
    }
  };

  const clearValues = () => {
    dispatch({ type: CLEAR_VALUES });
  };
  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 2000);
  };

  return (
    <LibraryContext.Provider
      value={{
        ...state,
        createLibrary,
        handleChange,
        deleteLibrary,
        clearValues,
        setEditLibrary,
        editLibrary,
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
