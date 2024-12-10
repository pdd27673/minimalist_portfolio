import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 3rem auto;
  padding: 0 1rem; /* light horizontal padding so text isn't flush to the edges */
  text-align: left;
`;

export const BackLinkContainer = styled.p`
  margin-bottom: 2rem;
  font-size: 1rem;

  a {
    color: #777;
  }
`;
