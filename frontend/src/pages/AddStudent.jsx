import styled from 'styled-components';
import Alert from '../components/Alert';
import { useLibraryContext } from '../context/libraryContext';
import { useStudentContext } from '../context/studentContext';

const AddStudent = () => {
  const {
    name,
    email,
    createStudent,
    clearValues,
    isEditing,
    editStudent,
    isLoading,
    handleChange,
    showAlert,
  } = useStudentContext();

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange({ name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      return <Alert alertText="Zadaj všetky hodnoty" />;
    }
    if (isEditing) {
      editStudent();
      return;
    }
    createStudent();
    clearValues();
  };

  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? 'edit študenta' : 'vytvor študenta'}</h3>
        {showAlert && <Alert alertText="Vytvoril si nového študenta!" />}
        <div className="form-center">
          {/* student name */}
          <div className="form-row">
            <label htmlFor={name} className="form-label">
              meno študenta
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleInput}
              className="form-input"
            />
          </div>

          {/* email */}
          <div className="form-row">
            <label htmlFor={email} className="form-label">
              email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleInput}
              className="form-input"
            />
          </div>
          <div className="btn-container">
            <button
              type="submit"
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>
            <button
              className="btn btn-block clear-btn"
              onClick={(e) => {
                e.preventDefault();
                clearValues();
              }}
            >
              clear
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  border-radius: var(--borderRadius);
  width: 100%;
  background: var(--white);
  padding: 3rem 2rem 4rem;
  box-shadow: var(--shadow-2);
  h3 {
    margin-top: 0;
  }

  .btn-container {
    button {
      height: 35px;
    }
  }
`;

export default AddStudent;
