import Student from './Student';
import styled from 'styled-components';
import { useStudentContext } from '../context/studentContext';

const StudentsContainer = () => {
  const { students } = useStudentContext();
  const studentName = 'Majko';
  const email = 'majko@example.com';

  return (
    <Wrapper>
      <div className="libraries">
        {students.map((student) => (
          <Student
            studentName={student.name}
            email={student.email}
            borrowedBooks={student.borrowedBooks.length}
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
