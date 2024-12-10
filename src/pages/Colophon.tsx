import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BackLinkContainer, Container } from '../components/Layout';

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
            <Container>
                <BackLinkContainer><Link to="/">{'← Paul Doho'}</Link></BackLinkContainer>
                <Title>Colophon</Title>
                <Paragraph>
                    This is a static site, built with React and served via a Vercel. < br />
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
