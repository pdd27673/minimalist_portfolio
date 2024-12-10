import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container, BackLinkContainer } from '../components/Layout';

const Title = styled.h1`
  font-size: 1.4rem;
  font-weight: normal;
  margin: 0rem;
`;

const Date = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin: 0;
`;

const Paragraph = styled.p`
  margin-bottom: 1.5rem;
`;

const OnStartingOut: React.FC = () => {
    return (
        <>
            <Container>
                <BackLinkContainer><Link to="/">{'← Paul Doho'}</Link></BackLinkContainer>
                <Title>On Starting Out, Learning the Flow, and the Kindness of Colleagues</Title>
                <Date>2024-12</Date>

                <Paragraph>
                    Not long ago, I was fresh out of college, stepping into a world I knew mostly from textbooks
                    and late-night coding sessions. At Goldman Sachs, everything felt bigger: there were more stakeholders,
                    more complex codebases, and a release process that involved branching, pull requests, and careful reviews—things
                    I’d only read about before.
                </Paragraph>

                <Paragraph>
                    In the early days, I sometimes felt out of my depth. Acronyms I didn’t understand, deployment steps that
                    felt intricate, and teammates who seemed fluent in a professional language I was just starting to learn.
                    What surprised me most was everyone’s patience. Senior engineers took time to explain branching strategies
                    and walk me through my first pull requests. Teammates reassured me that questions and small mistakes were
                    part of growing into the role.
                </Paragraph>

                <Paragraph>
                    Over time, I picked up the rhythm of sprints, got comfortable with standups, and came to appreciate
                    the subtlety of code review. Git flow became second nature, and releasing a new version turned from
                    anxiety-inducing to a moment of accomplishment. But more important than the technical skills was
                    the understanding of how to learn from others, how to ask questions, and how to integrate into a once-unfamiliar environment.
                </Paragraph>

                <Paragraph>
                    Looking back, what stands out is not just the code I wrote or the tools I learned, but the people who helped
                    me navigate the journey. Their guidance transformed an intimidating start into an experience of growth and camaraderie.
                </Paragraph>
            </Container>
        </>
    );
};

export default OnStartingOut;
