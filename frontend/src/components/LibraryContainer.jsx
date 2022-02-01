import Library from './Library';
import styled from 'styled-components';
import { useLibraryContext } from '../context/libraryContext';

const LibraryContainer = () => {
  const { libraries, isLoading } = useLibraryContext();

  // if (isLoading) {
  //   return <Loading center />;
  // }
  if (libraries.length === 0) {
    return (
      <div>
        <h2>No jobs to display</h2>
      </div>
    );
  }

  return (
    <Wrapper>
      {/* <h5>
        {totalJobs} job{jobs.length > 1 && 's'} found
      </h5> */}
      <div className="libraries">
        {libraries.map((library) => (
          <Library
            libraryName={library.libraryName}
            numOfBooks={library.books.length}
            numOfStudents={library.students.length}
            key={library._id}
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

export default LibraryContainer;
