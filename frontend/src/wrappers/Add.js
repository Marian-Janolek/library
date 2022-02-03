import styled from 'styled-components';

const Wrapper = styled.article`
  background: var(--white);
  border-radius: var(--borderRadius);
  box-shadow: var(--shadow-2);
  padding: 1rem 1.5rem;

  h2 {
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    font-size: 2rem;
    font-weight: var(--font-semi-bold);
    margin-bottom: 1rem;
  }
  table {
    max-width: 80vw;
    background-color: var(--white-color);
  }
  table,
  th {
    border: 1px solid var(--dark-color-light);
    border-collapse: collapse;
  }

  th,
  td {
    padding: 0.5rem;
  }
  th {
    text-transform: uppercase;
  }
  td {
    color: var(--dark-color);
  }
  tr:nth-child(even) {
    background-color: var(--dark-color-lighten);
  }
  .name,
  .icons,
  .email {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .delete-btn {
    color: var(--red-dark);
    background: var(--red-light);
  }
  .add-student-btn {
    color: blue;
    background: #b3b3ff;
  }
  .btn-flex {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }
`;

export default Wrapper;
