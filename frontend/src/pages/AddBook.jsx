import styled from 'styled-components';
import { useBooksContext } from '../context/bookContext';

const AddBook = () => {
  const isEditing = false;
  const { title, genre, clearValues, createBook, handleChange } =
    useBooksContext();

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange({ name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !genre) {
      return <div>Chybajuca hodnota</div>;
    }
    createBook();
    clearValues();
  };

  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? 'edit knižnicu' : 'vytvor knihu'}</h3>
        <div className="form-center">
          {/* book name */}
          <div className="form-row">
            <label htmlFor={title} className="form-label">
              názov knihy
            </label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={handleInput}
              className="form-input"
            />
          </div>

          {/* book genre */}
          <div className="form-row">
            <label htmlFor={genre} className="form-label">
              žáner
            </label>
            <input
              type="email"
              name="genre"
              value={genre}
              onChange={handleInput}
              className="form-input"
            />
          </div>
          <div className="btn-container">
            <button
              type="submit"
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
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

export default AddBook;
