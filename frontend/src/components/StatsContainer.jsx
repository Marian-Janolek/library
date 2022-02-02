import styled from 'styled-components';
import StatsItem from './StatsItem';
import { BsBook, BsFilePersonFill } from 'react-icons/bs';
import { HiOutlineLibrary } from 'react-icons/hi';
import { useLibraryContext } from '../context/libraryContext';
import { useStudentContext } from '../context/studentContext';
import { useBooksContext } from '../context/bookContext';
import Loading from '../components/Loading';

const StatsContainer = () => {
  const { libraries, isLoading: libraryLoading } = useLibraryContext();
  const { students, isLoading: studentLoading } = useStudentContext();
  const { books, isLoading: bookLoading } = useBooksContext();

  if (libraryLoading || studentLoading || bookLoading) {
    return <Loading center />;
  }

  const defaultStats = [
    {
      title: 'Počet knižníc',
      count: libraries?.length || 0,
      icon: <HiOutlineLibrary />,
      color: '#e9b949',
      bcg: '#fcefc7',
    },
    {
      title: 'Počet študentov',
      count: students?.length || 0,
      icon: <BsFilePersonFill />,
      color: '#647acb',
      bcg: '#e0e8f9',
    },
    {
      title: 'Počet kníh',
      count: books?.length || 0,
      icon: <BsBook />,
      color: '#d66a6a',
      bcg: '#ffeeee',
    },
  ];

  return (
    <Wrapper>
      {defaultStats.map((item, index) => {
        return <StatsItem key={index} {...item} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  row-gap: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
  }
  @media (min-width: 1120px) {
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 1rem;
  }
`;

export default StatsContainer;
