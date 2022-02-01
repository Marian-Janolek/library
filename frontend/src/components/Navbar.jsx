import { NavLink } from 'react-router-dom';
import links from '../utils/links';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-links">
        {links.map((link) => {
          const { text, path, id, icon } = link;
          return (
            <NavLink
              to={path}
              key={id}
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              <span className="icon">{icon}</span>
              {text}
            </NavLink>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  min-height: 100vh;
  height: 100%;
  width: 250px;
  box-shadow: 3px -2px 15px 1px rgba(0, 0, 0, 0.12);
  display: block;

  .nav-links {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
  }
  .nav-link {
    display: flex;
    align-items: center;
    color: var(--grey-500);
    padding: 1rem 0;
    padding-left: 2.5rem;
    text-transform: capitalize;
    transition: var(--transition);
  }
  .nav-link:hover {
    background: var(--grey-50);
    padding-left: 3rem;
    color: var(--grey-900);
  }
  .nav-link:hover .icon {
    color: var(--primary-500);
  }
  .icon {
    font-size: 1.5rem;
    margin-right: 1rem;
    display: grid;
    place-items: center;
    transition: var(--transition);
  }
  .active {
    color: var(--grey-900);
  }
  .active .icon {
    color: var(--primary-500);
  }
`;

export default Navbar;
