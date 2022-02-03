import styled from 'styled-components';

const Wrapper = styled.article`
  background: var(--white);
  border-radius: var(--borderRadius);
  display: grid;
  grid-template-rows: 1fr auto;
  box-shadow: var(--shadow-2);

  header {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--grey-100);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    h5 {
      letter-spacing: 0;
    }
  }
  .main-icon {
    width: 60px;
    height: 60px;
    display: grid;
    place-items: center;
    background: var(--primary-500);
    border-radius: var(--borderRadius);
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--white);
    margin-right: 2rem;
  }
  .info {
    h5 {
      margin-bottom: 0.25rem;
    }
    p {
      margin: 0;
      color: var(--grey-400);
      letter-spacing: var(--letterSpacing);
    }
  }
  .content {
    padding: 1rem 1.5rem;
  }
  .content-center {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    svg {
      font-size: 1.5rem;
    }
  }
  footer {
    margin-top: 1rem;
  }
  .edit-btn,
  .delete-btn,
  .add-book-btn {
    letter-spacing: var(--letterSpacing);
    cursor: pointer;
    height: 30px;
    display: flex;
    align-items: center;
  }
  .edit-btn {
    color: var(--green-dark);
    background: var(--green-light);
    margin-right: 0.5rem;
  }
  .delete-btn {
    color: var(--red-dark);
    background: var(--red-light);
  }
  .add-book-btn {
    color: blue;
    background: #b3b3ff;
  }
  &:hover .actions {
    visibility: visible;
  }
  .actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export default Wrapper;
