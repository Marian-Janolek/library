import Student from './Student';
import Wrapper from '../wrappers/Container';
import { useStudentContext } from '../context/studentContext';
import Loading from '../components/Loading';

const StudentsContainer = () => {
  const { students, isLoading } = useStudentContext();

  if (isLoading) {
    return <Loading center />;
  }

  if (students.length === 0) {
    return (
      <div>
        <h2>No students to display</h2>
      </div>
    );
  }

  return (
    <Wrapper>
      <div className="libraries">
        {students.map((student) => (
          <Student
            studentName={student.name}
            email={student.email}
            borrowedBooks={student.borrowedBooks}
            key={student._id}
            _id={student._id}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default StudentsContainer;
