import { Link } from 'react-router-dom';
import { BsBook, BsFillPersonFill } from 'react-icons/bs';
import styled from 'styled-components';
import LibraryInfo from './LibraryInfo';
import { useLibraryContext } from '../context/libraryContext';

const Library = ({ libraryName, numOfBooks, numOfStudents, _id }) => {
  const { deleteLibrary, setEditLibrary } = useLibraryContext();

  return (
    <Wrapper>
      <header>
        <div className="main-icon">{libraryName.charAt(0)}</div>
        <div className="info">
          <h5>{libraryName}</h5>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <LibraryInfo
            icon={<BsFillPersonFill />}
            text={`Počet študentov: ${numOfStudents}`}
          />
          <LibraryInfo icon={<BsBook />} text={`Počet kníh: ${numOfBooks}`} />
        </div>
        <footer>
          <div className="actions">
            <Link
              to="/add-library"
              className="btn edit-btn"
              onClick={() => setEditLibrary(_id)}
            >
              Edit
            </Link>
            <button
              type="button"
              className="btn delete-btn"
              onClick={() => deleteLibrary(_id)}
            >
              Vymaž
            </button>
            <Link to="/add-library" className="btn add-student-btn">
              Pridaj študenta
            </Link>
            <Link to="/add-library" className="btn add-book-btn">
              Pridaj knihu
            </Link>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  background: var(--white);
  border-radius: var(--borderRadius);
  display: grid;
  grid-template-rows: 1fr auto;
  box-shadow: var(--shadow-2);

  header {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--grey-100);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    h5 {
      letter-spacing: 0;
    }
  }
  .main-icon {
    width: 60px;
    height: 60px;
    display: grid;
    place-items: center;
    background: var(--primary-500);
    border-radius: var(--borderRadius);
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--white);
    margin-right: 2rem;
  }
  .info {
    h5 {
      margin-bottom: 0.25rem;
    }
    p {
      margin: 0;
      text-transform: capitalize;
      color: var(--grey-400);
      letter-spacing: var(--letterSpacing);
    }
  }
  .content {
    padding: 1rem 1.5rem;
  }
  .content-center {
    display: flex;
    flex-direction: column;
  }
  footer {
    margin-top: 1rem;
  }
  .edit-btn,
  .delete-btn,
  .add-student-btn,
  .add-book-btn {
    letter-spacing: var(--letterSpacing);
    cursor: pointer;
    height: 30px;
    display: flex;
    align-items: center;
  }
  .edit-btn {
    color: var(--green-dark);
    background: var(--green-light);
    margin-right: 0.5rem;
  }
  .delete-btn {
    color: var(--red-dark);
    background: var(--red-light);
  }
  .add-student-btn {
    color: blue;
    background: #b3b3ff;
  }
  .add-book-btn {
    color: yellow;
    background: #ffffd5;
  }
  &:hover .actions {
    visibility: visible;
  }
  .actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export default Library;
