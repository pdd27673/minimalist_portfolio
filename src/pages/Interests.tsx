import React from 'react';
import { Link } from 'react-router-dom';
import { Container, BackLinkContainer } from '../components/Layout';
import { styled } from 'styled-components';

const SectionHeading = styled.p`
  margin: 0rem; /* Less spacing after the bold heading */
`;
const SectionParagraph = styled.p`
    margin-top: 0.2rem; /* Less spacing after the bold heading */
`; 

const Interests: React.FC = () => {
  return (
    <Container>
      <BackLinkContainer><Link to="/">{'← Paul Doho'}</Link></BackLinkContainer>
      <h1>Interests</h1>

      <SectionParagraph>
        These are a few areas I’ve been thinking about and exploring. I’m sharing them
        in case you have similar interests—if so, I’d love to <Link to="/contact">hear</Link> from you!
      </SectionParagraph>

      <SectionHeading><strong>Photography &amp; Travel</strong></SectionHeading>
      <SectionParagraph>
        Photography is my way of capturing the world’s stories one frame at a time.
        I’m often drawn to new places, cultures, and landscapes, and traveling fuels
        that curiosity. Through photography, I try to preserve small moments—fleeting
        expressions, vivid colors, and quiet corners—that might otherwise go unnoticed.
      </SectionParagraph>

      <SectionHeading><strong>F1</strong></SectionHeading>
      <SectionParagraph>
        Formula 1 combines speed, engineering brilliance, and razor-sharp strategy.
        I’m fascinated by how teams balance technical innovation with human skill
        and split-second decision-making. It’s not just a race on Sunday; it’s a complex
        ecosystem where aerodynamics, data analytics, and driver instinct all come together.
      </SectionParagraph>

      <SectionHeading><strong>Psychology</strong></SectionHeading>
      <SectionParagraph>
        Understanding how we think, feel, and behave intrigues me. Psychology provides
        insights into what motivates us, how we form habits, and how we interact with others.
        By learning more about how the mind works, I hope to improve how I communicate,
        collaborate, and grow personally.
      </SectionParagraph>

      <SectionHeading><strong>Pan-Africanism</strong></SectionHeading>
      <SectionParagraph>
        I’m drawn to the idea of a united, empowered Africa—one that celebrates cultural diversity,
        fosters economic growth, and stands strong in the global arena. Pan-Africanism,
        at its core, is about solidarity and a shared vision for a prosperous future.
        I’m interested in understanding the history, philosophies, and movements that shape this vision.
      </SectionParagraph>

      <SectionParagraph>
        If you’d like to discuss any of these interests, or think I might be able to help
        in some way, please reach out! I’m always open to connecting, exchanging ideas, and
        learning from others who share these passions.
      </SectionParagraph>

      <SectionParagraph>
        — <a href="https://twitter.com/pauldavid__d">@pauldoho</a>
      </SectionParagraph>
    </Container>
  );
};

export default Interests;
