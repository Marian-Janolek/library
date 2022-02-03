import { Link } from 'react-router-dom';
import { BsBook } from 'react-icons/bs';
import Wrapper from '../wrappers/Card';
import { useStudentContext } from '../context/studentContext';
import { useBooksContext } from '../context/bookContext';

const Student = ({ studentName, email, borrowedBooks, _id }) => {
  const { deleteStudent, setEditStudent, getStudentId } = useStudentContext();

  const { books } = useBooksContext();
  const borrowedBook = books.filter(function (o1) {
    return borrowedBooks.some(function (o2) {
      return o1._id === o2;
    });
  });

  return (
    <Wrapper>
      <header>
        <div className="main-icon">{studentName.charAt(0)}</div>
        <div className="info">
          <h5>{studentName}</h5>
          <p>{email}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <span>
            <BsBook />
          </span>
          <h5>Požičané knihy:</h5>
        </div>
        <p>
          {borrowedBooks.length === 0
            ? 'Nemáš žiadne požičané knihy'
            : borrowedBook.map((book, i) => (
                <span key={i}>
                  {book.title}
                  <br />
                </span>
              ))}
        </p>
        <footer>
          <div className="actions">
            <Link
              to="/add-student"
              className="btn edit-btn"
              onClick={() => setEditStudent(_id)}
            >
              Edit
            </Link>
            <button
              type="button"
              className="btn delete-btn"
              onClick={() => deleteStudent(_id)}
            >
              Vymaž
            </button>
            <Link
              to="/borrow-book"
              className="btn add-book-btn"
              onClick={() => getStudentId(_id)}
            >
              požičaj/vráť knihu
            </Link>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Student;
