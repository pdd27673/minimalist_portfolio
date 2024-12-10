import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../components/Layout';

const EntriesList = styled.ul`
  margin-bottom: 2rem;
`;

const Entry = styled.li`
  margin-bottom: 0.75rem;
  /* Removed font-size: now using global font-size */
`;

const MetaLinks = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-top: 2rem;
`;

const MetaLink = styled.li`
  margin-bottom: 0.5rem;
  /* Removed font-size: now using global font-size */

  &::before {
    content: '∞ ';
    margin-right: 0.5rem;
  }
`;

const Home: React.FC = () => {
  return (
    <Container>
      <p>
        This is the site of <strong>Paul Doho</strong>, software engineer and aspiring entrepreneur.
      </p>

      <p>
        I&apos;m currently working with the engineering team at <a href="https://www.goldmansachs.com/"><i>Goldman Sachs</i></a>, 
        focusing on internal tooling and infrastructure projects.
      </p>

      <p>
        I contributed to the creation of a documentation portal at Goldman Sachs that changed how teams share 
        and discover information. On the side, I&apos;m contributing to a project in Cote d'Ivoire, helping 
        to bring streamlined technology solutions to the housing sector. 
        <br />
        Previously, I built an <a href="https://github.com/pdd27673/Xgridz">app</a> for disability assessments, improving accessibility 
        for special education kids.
      </p>

      <EntriesList>
        <Entry><span>2024-12 </span><Link to="/on-starting-out">On Starting Out, Learning the Flow</Link></Entry>
      </EntriesList>

      <MetaLinks>
        <MetaLink><Link to="/interests">Interests</Link></MetaLink>
        <MetaLink><Link to="/contact">Contact</Link></MetaLink>
        <MetaLink><Link to="/colophon">Colophon</Link></MetaLink>
        <MetaLink><a href="https://jupzx17kqb01mobk.public.blob.vercel-storage.com/resume-fy6oOF5DyaaIyPTrrvt7hbUq3ohoxn.pdf">Resume</a></MetaLink>
      </MetaLinks>
    </Container>
  );
};

export default Home;
