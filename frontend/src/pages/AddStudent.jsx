import styled from 'styled-components';

const AddStudent = () => {
  const isEditing = false;
  const studentName = 'Majko';
  const studentEmail = 'majko@example.com';

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // handleChange({ name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!studentName || !studentEmail) {
      return <div>Chybajuca hodnota</div>;
    }
  };

  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? 'edit knižnicu' : 'vytvor študenta'}</h3>
        <div className="form-center">
          {/* library name */}
          <div className="form-row">
            <label htmlFor={studentName} className="form-label">
              meno študenta
            </label>
            <input
              type="text"
              name="studentName"
              value={studentName}
              onChange={handleInput}
              className="form-input"
            />
          </div>

          {/* headquarters */}
          <div className="form-row">
            <label htmlFor={studentEmail} className="form-label">
              email
            </label>
            <input
              type="email"
              name="studentEmail"
              value={studentEmail}
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

export default AddStudent;
