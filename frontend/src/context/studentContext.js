import { useReducer, useContext, createContext, useEffect } from 'react';
import {
  GET_STUDENTS_BEGIN,
  GET_STUDENTS_SUCCESS,
  GET_STUDENTS_ERROR,
  CREATE_STUDENT_ERROR,
  CREATE_STUDENT_BEGIN,
  CREATE_STUDENT_SUCCESS,
  DELETE_STUDENT,
  SET_EDIT_STUDENT,
  EDIT_STUDENT_BEGIN,
  CLEAR_VALUES,
  EDIT_STUDENT_SUCCESS,
  EDIT_STUDENT_ERROR,
  HANDLE_CHANGE,
} from '../actions/actions';
import reducer from '../reducer/studentReducer';
import axios from 'axios';

const initialState = {
  isLoading: false,
  error: false,
  students: [],
  name: '',
  email: '',
  editStudentId: '',
  borrowedBooks: [],
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

  const createStudent = async () => {
    dispatch({ type: CREATE_STUDENT_BEGIN });
    try {
      const { name, email } = state;
      await axios.post('/api/v1/students', { name, email });
      dispatch({ type: CREATE_STUDENT_SUCCESS });
      getStudents();
    } catch (error) {
      dispatch({ type: CREATE_STUDENT_ERROR });
    }
  };
  const handleChange = ({ name, value }) => {
    dispatch({ type: HANDLE_CHANGE, payload: { value, name } });
  };

  const deleteStudent = async (studentId) => {
    dispatch({ type: DELETE_STUDENT });
    try {
      await axios.delete(`api/v1/students/${studentId}`);
      getStudents();
    } catch (error) {}
  };

  const setEditStudent = async (id) => {
    dispatch({ type: SET_EDIT_STUDENT, payload: { id } });
  };

  const editStudent = async () => {
    dispatch({ type: EDIT_STUDENT_BEGIN });
    try {
      const { name, email } = state;
      await axios.patch(`/api/v1/students/${state.editStudentId}`, {
        name,
        email,
      });
      dispatch({ type: EDIT_STUDENT_SUCCESS });
      dispatch({ type: CLEAR_VALUES });
      getStudents();
    } catch (error) {
      dispatch({
        type: EDIT_STUDENT_ERROR,
      });
    }
  };

  const clearValues = () => {
    dispatch({ type: CLEAR_VALUES });
  };

  return (
    <StudentContext.Provider
      value={{
        ...state,
        createStudent,
        handleChange,
        deleteStudent,
        setEditStudent,
        editStudent,
        clearValues,
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
