import styled from 'styled-components';
import { useStudentContext } from '../context/studentContext';
import { useLibraryContext } from '../context/libraryContext';
import Alert from './Alert';
import { useState } from 'react';

const ListOfStudents = () => {
  const { students } = useStudentContext();
  const { addToLibrary, removeFromLibrary, showAlert, isLoading } =
    useLibraryContext();
  const [alert, setAlert] = useState('');

  return (
    <Wrapper>
      <h2>študenti</h2>
      {showAlert && <Alert alertText={alert} />}
      <table>
        <tbody>
          <tr>
            <th>id</th>
            <th>meno</th>
            <th>email</th>
            <th className="icons"></th>
          </tr>
          {students.map((student) => {
            const { _id: studentId, name, email } = student;
            return (
              <tr key={studentId}>
                <td>{studentId}</td>
                <td className="name">{name}</td>
                <td className="email">{email}</td>
                <td className="btn-flex">
                  <button
                    className="btn add-student-btn"
                    disabled={isLoading}
                    onClick={(e) => {
                      e.preventDefault();
                      setAlert('Študent pridaný do knižnice!');
                      addToLibrary(studentId);
                    }}
                  >
                    pridaj
                  </button>
                  <button
                    className="btn delete-btn"
                    disabled={isLoading}
                    onClick={(e) => {
                      e.preventDefault();
                      setAlert('Študent vymazaný z knižnice!');
                      removeFromLibrary(studentId);
                    }}
                  >
                    odober
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  background: var(--white);
  border-radius: var(--borderRadius);
  box-shadow: var(--shadow-2);
  padding: 1rem 1.5rem;

  h2 {
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    font-size: 2rem;
    font-weight: var(--font-semi-bold);
    margin-bottom: 1rem;
  }
  table {
    max-width: 80vw;
    background-color: var(--white-color);
  }
  table,
  th {
    border: 1px solid var(--dark-color-light);
    border-collapse: collapse;
  }

  th,
  td {
    padding: 0.5rem;
  }
  th {
    text-transform: uppercase;
  }
  td {
    color: var(--dark-color);
  }
  tr:nth-child(even) {
    background-color: var(--dark-color-lighten);
  }
  .name,
  .icons,
  .email {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .delete-btn {
    color: var(--red-dark);
    background: var(--red-light);
  }
  .add-student-btn {
    color: blue;
    background: #b3b3ff;
  }
  .btn-flex {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }
`;

export default ListOfStudents;
