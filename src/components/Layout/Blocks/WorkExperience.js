import React from 'react';
import animationDataWork from "../../../images/lotties/48055-working-online.json";
import { ColInSection, Section } from '../';
import Lottie from "react-lottie";
import {H1, P, SuperHeading} from '../../../styles'
import getDefaultOptions from '../../../images/lotties/getDefaultOptions';

const WorkExperience = props => {
  //Logic

  return (
    <Section
        background="radial-gradient(circle at 80% 50%, rgba(169,212,217,1) 0%, rgba(91,158,166,1) 100%)"
        justifyContent="center"
        padding="40px 0px 70px"
        // height="100vh"
        slanted={3}
        flexFlow="row wrap-reverse"
      >
        <ColInSection textAlign="center" color="white" col={2.3}>
          <SuperHeading>Work Experience</SuperHeading>
          <H1>I've learned a few things</H1>
          <P style={{ fontSize: "1.15em" }}>
            List of all my work experience comes here.
          </P>
          <P style={{ fontSize: "1.15em" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </P>
        </ColInSection>
        <ColInSection textAlign="center" col={2.3}>
          <Lottie options={getDefaultOptions(animationDataWork)} height={370} width={370} />
        </ColInSection>
      </Section>
  );
}

export default WorkExperience;