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

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;

  li {
    margin-bottom: 0.5rem;
    &:before {
      content: '▪ ';
      margin-right: 0.5rem;
    }
  }
`;

const Contact: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <BackLink><Link to="/">{'← Paul Doho'}</Link></BackLink>
        <Title>Contact</Title>
        <Paragraph>I&apos;m happy to hear from you:</Paragraph>
        <List>
          <li><a href="mailto:pauldoho@outlook.com">pauldoho@outlook.com</a></li>
          <li><a href="https://www.linkedin.com/in/paul-doho-702b82200/">@pauldoho</a></li>
        </List>
        <Paragraph>I reply to every thoughtful note!</Paragraph>
      </Container>
    </>
  );
};

export default Contact;
