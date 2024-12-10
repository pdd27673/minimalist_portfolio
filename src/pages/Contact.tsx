import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container, BackLinkContainer } from '../components/Layout';

const ContactList = styled.ul`
  li {
    &:before {
      content: '▪ ';
      margin-right: 0.5rem;
    }
  }
`;

const Contact: React.FC = () => (
  <Container>
    <BackLinkContainer><Link to="/">{'← Paul Doho'}</Link></BackLinkContainer>
    <h1>Contact</h1>
    <p>I&apos;m happy to hear from you:</p>
    <ContactList>
      <li><a href="mailto:pauldoho@outlook.com">pauldoho@outlook.com</a></li>
      <li><a href="https://www.linkedin.com/in/paul-doho-702b82200/">@pauldoho</a></li>
    </ContactList>
    <p>I reply to every thoughtful note!</p>
  </Container>
);

export default Contact;
