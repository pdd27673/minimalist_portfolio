import React from 'react';
import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 2rem;
    background: #fafaf4; /* Light off-white background */
    font-family: 'Georgia', serif;
    color: #333;
  }
  
  a {
    color: #000;
    text-decoration: none;
    border-bottom: 1px solid #000;
    &:hover {
      opacity: 0.8;
    }
  }
`;

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const BackLink = styled.p`
  margin-bottom: 1.5rem;
  font-size: 1rem;
`;

const Title = styled.h1`
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const Paragraph = styled.p`
  margin-bottom: 1.5rem;
`;

const Colophon: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <BackLink><Link to="/">{'← Paul Doho'}</Link></BackLink>
        <Title>Colophon</Title>
        <Paragraph>
          This is a static site, built with React and served via a Vercel. < br/>
          The design is inspired by Mark McGranaghan's websie.
        </Paragraph>
        <Paragraph>
          It&apos;s set in a classic serif font. <br />
          The layout and styling are handled by <a href="https://styled-components.com/" target="_blank" rel="noopener noreferrer">styled-components</a>.
        </Paragraph>
      </Container>
    </>
  );
};

export default Colophon;
