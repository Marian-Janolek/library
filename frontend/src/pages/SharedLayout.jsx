import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import styled from 'styled-components';

const SharedLayout = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <Navbar />
        <div className="dashboard-page">
          <Outlet />
        </div>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }
  .dashboard-page {
    width: 90vw;
    margin: 0 auto;
    padding: 2rem 0;
  }
  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
      width: 90%;
    }
  }
`;

export default SharedLayout;
