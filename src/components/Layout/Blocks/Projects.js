import React, {useContext} from 'react';
import animationDataBuilding from "../../../images/lotties/23745-building.json";
import { ColInSection, Section } from '../';
import Lottie from "react-lottie";
import {H1, SuperHeading} from '../../../styles'
import getDefaultOptions from '../../../images/lotties/getDefaultOptions';
import Cards from "../../../components/Cards/Cards";
// import { projectsArray } from "../../../data/projectsArray";
import { Context } from '../../WrapRoot';

const Projects = props => {
  const {projectsArray} = useContext(Context)

  return (
    <Section
        background="radial-gradient(circle, rgba(240,248,255,1) 0%, rgba(169,212,217,1) 100%)"
        // backgroundColor="aliceBlue"
        justifyContent="center"
        slanted={3}
        padding="40px 0px 90px"
      >
        <ColInSection textAlign="center" col={4}>
          <Lottie
            options={getDefaultOptions(animationDataBuilding)}
            height={200}
            width={200}
          />
        </ColInSection>
        <ColInSection textAlign="center" color="slategrey" col={2}>
          <SuperHeading>Projects</SuperHeading>
          <H1>I've built a few things</H1>
        </ColInSection>
        <ColInSection col={1} padding="50px 0 0">
          <Cards projectsArray={projectsArray} />
        </ColInSection>
      </Section>
  );
}

export default Projects;