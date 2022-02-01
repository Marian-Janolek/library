import styled from 'styled-components';
import StatsItem from './StatsItem';
import { BsBook, BsFilePersonFill } from 'react-icons/bs';
import { HiOutlineLibrary } from 'react-icons/hi';
const StatsContainer = () => {
  const defaultStats = [
    {
      title: 'Počet knižníc',
      count: 5,
      icon: <HiOutlineLibrary />,
      color: '#e9b949',
      bcg: '#fcefc7',
    },
    {
      title: 'Počet študentov',
      count: 22,
      icon: <BsFilePersonFill />,
      color: '#647acb',
      bcg: '#e0e8f9',
    },
    {
      title: 'Počet kníh',
      count: 188,
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
