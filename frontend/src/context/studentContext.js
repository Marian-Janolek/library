import { useReducer, useContext, createContext, useEffect } from 'react';
import {
  GET_STUDENTS_BEGIN,
  GET_STUDENTS_SUCCESS,
  GET_STUDENTS_ERROR,
} from '../actions/actions';
import reducer from '../reducer/studentReducer';
import axios from 'axios';

const initialState = {
  isLoading: false,
  error: false,
  students: [],
  borrowedBooks: [],
  single_student: {},
};

const StudentContext = createContext();

const StudentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getStudents = async () => {
    dispatch({ type: GET_STUDENTS_BEGIN });
    try {
      const { data } = await axios('/api/v1/students');
      const { students } = data;
      dispatch({ type: GET_STUDENTS_SUCCESS, payload: { students } });
    } catch (error) {
      dispatch({ type: GET_STUDENTS_ERROR });
    }
  };

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <StudentContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

const useStudentContext = () => {
  return useContext(StudentContext);
};

export { StudentProvider, useStudentContext };
