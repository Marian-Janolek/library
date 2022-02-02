import Student from './Student';
import styled from 'styled-components';
import { useStudentContext } from '../context/studentContext';

const StudentsContainer = () => {
  const { students, isLoading } = useStudentContext();

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
            borrowedBooks={student.borrowedBooks.length}
            key={student._id}
            _id={student._id}
          />
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h2 {
    text-transform: none;
  }
  & > h5 {
    font-weight: 700;
  }
  .libraries {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
  @media (min-width: 992px) {
    .libraries {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
  }
`;

export default StudentsContainer;
