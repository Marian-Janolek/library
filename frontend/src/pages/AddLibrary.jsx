import styled from 'styled-components';
import { useLibraryContext } from '../context/libraryContext';

const AddLibrary = () => {
  const {
    handleChange,
    libraryName,
    headquarter,
    createLibrary,
    clearValues,
    isEditing,
    editLibrary,
    isLoading,
  } = useLibraryContext();

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange({ name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!libraryName || !headquarter) {
      return <div>Chybajuca hodnota</div>;
    }
    if (isEditing) {
      editLibrary();
      return;
    }
    createLibrary();
    clearValues();
  };

  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? 'edit knižnicu' : 'pridaj knižnicu'}</h3>
        <div className="form-center">
          {/* library name */}
          <div className="form-row">
            <label htmlFor={libraryName} className="form-label">
              názov knižnice
            </label>
            <input
              type="text"
              name="libraryName"
              value={libraryName}
              onChange={handleInput}
              className="form-input"
            />
          </div>

          {/* headquarter */}
          <div className="form-row">
            <label htmlFor={headquarter} className="form-label">
              sídlo knižnice
            </label>
            <input
              type="text"
              name="headquarter"
              value={headquarter}
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

export default AddLibrary;
