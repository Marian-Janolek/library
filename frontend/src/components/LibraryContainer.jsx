import Library from './Library';
import styled from 'styled-components';

const LibraryContainer = () => {
  const numOfStudents = 5;
  const numOfPages = 11;
  const libraryName = 'Velka kniznica';

  //   if (isLoading) {
  //     return <Loading center />;
  //   }
  //   if (jobs.length === 0) {
  //     return (
  //       <Wrapper>
  //         <h2>No jobs to display</h2>
  //       </Wrapper>
  //     );
  //   }

  return (
    <Wrapper>
      {/* <h5>
        {totalJobs} job{jobs.length > 1 && 's'} found
      </h5> */}
      <div className="libraries">
        <Library
          libraryName={libraryName}
          numOfPages={numOfPages}
          numOfStudents={numOfStudents}
        />
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
