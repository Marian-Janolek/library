import Library from './Library';
import Wrapper from '../wrappers/Container';
import { useLibraryContext } from '../context/libraryContext';
import Loading from '../components/Loading';

const LibraryContainer = () => {
  const { libraries, isLoading } = useLibraryContext();

  if (isLoading) {
    return <Loading center />;
  }
  if (libraries.length === 0) {
    return (
      <div>
        <h2>No libraries to display</h2>
      </div>
    );
  }

  return (
    <Wrapper>
      <div className="libraries">
        {libraries.map((library) => (
          <Library
            libraryName={library.libraryName}
            numOfBooks={library.books.length}
            numOfStudents={library.students.length}
            key={library._id}
            _id={library._id}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default LibraryContainer;
