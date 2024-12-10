import React from 'react';
import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 2rem;
    background: #fafaf4; /* Approximate light off-white background */
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

const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: normal;
  margin-bottom: 1rem;
`;

const Intro = styled.p`
  margin-bottom: 1.5rem;
`;

const Paragraph = styled.p`
  margin-bottom: 1.5rem;
`;

const EntriesList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-bottom: 2rem;
`;

const Entry = styled.li`
  margin-bottom: 0.75rem;
  font-size: 0.9rem;
`;

const MetaLinks = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-top: 2rem;
`;

const MetaLink = styled.li`
  margin-bottom: 0.5rem;
  font-size: 0.9rem;

  &::before {
    content: '∞ ';
    margin-right: 0.5rem;
  }
`;

const Home: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Intro>
          This is the site of <strong><Link to="/">Paul Doho</Link></strong>, software engineer and aspiring entrepeneur.
        </Intro>
        <Intro>
          I&apos;m currently working with the engineering team at <a href="https://goldmansachs.com"><strong>Goldman Sachs</strong></a>, focusing on internal tooling and infrastructure projects.
        </Intro>
        <Intro>I contributed to the creation of a documentation portal at Goldman Sachs that changed how teams share and discover information.
          On the side, I&apos;m contributing to a project in Cote d'Ivoire, helping to bring streamlined technology solutions to the housing sector.
          <br /> Previously, I built an <a href="https://github.com/pdd27673/Xgridz">app</a> for disability assessments, improving accessibility for special education kids.
        </Intro>

        <EntriesList>
          <Entry><span>2021-24</span> <Link to="/on-starting-out">On Starting Out, Learning the Flow</Link></Entry>
        </EntriesList>

        <MetaLinks>
          <MetaLink><a href="https://jupzx17kqb01mobk.public.blob.vercel-storage.com/resume-fy6oOF5DyaaIyPTrrvt7hbUq3ohoxn.pdf">Resume</a></MetaLink>
          <MetaLink><Link to="/Contact">Contact</Link></MetaLink>
          <MetaLink><Link to="/colophon">Colophon</Link></MetaLink>
        </MetaLinks>
      </Container>
    </>
  );
};

export default Home;
