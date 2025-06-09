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
    <Container role="main">
      <p>
        This is the site of <strong>Paul Doho</strong>, software engineer and aspiring entrepreneur.
      </p>
      <p>
        I&apos;m currently working with the engineering team at <a href="https://www.goldmansachs.com/" aria-label="Visit Goldman Sachs website"><i>Goldman Sachs</i></a>, 
        focusing on internal tooling and infrastructure projects.
      </p>
      <p>
        I contributed to the creation of a documentation portal at Goldman Sachs that changed how teams share 
        and discover information. 
        <br /><br />
        On the side, I&apos;m contributing to a project in Cote d'Ivoire, helping 
        to bring streamlined technology solutions to the housing sector. 
        <br />
        I am also working on a tennis court booking application that will help players easily find and reserve available courts in their area.
        <br /><br />
        Previously, I built an <a href="https://github.com/pdd27673/Xgridz" aria-label="View Xgridz project on GitHub">app</a> for disability assessments, improving accessibility 
        for special education kids.
     </p>

      <nav aria-label="Recent entries">
        <EntriesList>
          <Entry><time dateTime="2024-12">2024-12</time> <Link to="/on-starting-out">On Starting Out, Learning the Flow</Link></Entry>
        </EntriesList>
      </nav>

      <nav aria-label="Site navigation">
        <MetaLinks>
          <MetaLink><Link to="/interests">Interests</Link></MetaLink>
          <MetaLink><Link to="/contact">Contact</Link></MetaLink>
          <MetaLink><Link to="/colophon">Colophon</Link></MetaLink>
          <MetaLink><a href="https://jupzx17kqb01mobk.public.blob.vercel-storage.com/2025_UK_Resume-vrqNNFp7ujSGxtedrU3IaI4sVIC8C3.pdf" aria-label="Download resume">Resume</a></MetaLink>
        </MetaLinks>
      </nav>
    </Container>
  );
};

export default Home;
