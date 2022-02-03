import Wrapper from '../wrappers/Add';
import { useBooksContext } from '../context/bookContext';
import { useStudentContext } from '../context/studentContext';
import Alert from './Alert';
import { useState } from 'react';

const BorrowBook = () => {
  const { books } = useBooksContext();
  const { addBookToStudent, removeBookFromStudent, isLoading, showAlert } =
    useStudentContext();
  const [alert, setAlert] = useState('');

  return (
    <Wrapper>
      <h2>Knihy</h2>
      {showAlert && <Alert alertText={alert} />}
      <table>
        <tbody>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>genre</th>
            <th className="icons"></th>
          </tr>
          {books?.map((book) => {
            const { _id: bookId, title, genre } = book;
            return (
              <tr key={bookId}>
                <td>{bookId}</td>
                <td className="name">{title}</td>
                <td className="email">{genre}</td>
                <td className="btn-flex">
                  <button
                    className="btn add-student-btn"
                    disabled={isLoading}
                    onClick={(e) => {
                      e.preventDefault();
                      setAlert('Kniha bola požíčaná!');
                      addBookToStudent(bookId);
                    }}
                  >
                    požičaj
                  </button>
                  <button
                    className="btn delete-btn"
                    disabled={isLoading}
                    onClick={(e) => {
                      e.preventDefault();
                      setAlert('Kniha bola vrátená!');
                      removeBookFromStudent(bookId);
                    }}
                  >
                    vráť
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

export default BorrowBook;
