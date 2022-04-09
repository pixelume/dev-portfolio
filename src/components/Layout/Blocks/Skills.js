import React from 'react';
import styled from 'styled-components'
import { ColInSection, Section } from '../';
import {
  SiReact,
  SiRedux,
  SiStyledComponents,
  SiMaterialUi,
  SiStorybook,
  SiReactrouter,
  SiGatsby,
  SiFirebase,
  SiJavascript,
  SiStrapi,
  SiCss3,
  SiHtml5,
  SiAdobephotoshop,
  SiSketch,
  SiAmazonaws,
  SiPython,
  SiNodeDotJs,
  SiMysql,
  SiTypescript,
} from 'react-icons/si';
import Lottie from "react-lottie";
import animationDataHero from "../../../images/lotties/14800-superman.json";
import {H1, H3, SuperHeading, P} from '../../../styles'
import getDefaultOptions from '../../../images/lotties/getDefaultOptions';


const TechTitle = styled(P)`
  font-size: 0.4em;
`

const Skills = () => {
  //Logic

  return (
    <Section
        // background="radial-gradient(circle, rgba(191,107,99,1) 0%, rgba(217,163,132,1) 100%);"
        backgroundColor="redLip"
        justifyContent="center"
        slanted={3}
        up
        padding="40px 0px 100px"
        flexFlow="row wrap-reverse"
      >
        <ColInSection textAlign="center" color="white" col={1.8}>
          <SuperHeading>Skills</SuperHeading>
          <H1>I know a few tricks</H1>
          <H3 color="white">I'm proficient in: </H3>
          <div
            style={{
              display: "flex",
              flexFlow: "row wrap",
              fontSize: "3em",
              margin: "0 0 1.5em",
            }}
          >
            <div data-tip="React JS" style={{ margin: "0.9em 0.9em 0 0" }}>
              <SiReact />
              <TechTitle>React</TechTitle>
            </div>
            <div
              data-tip="Redux"
              style={{ margin: "0.9em 0.9em 0 0" }}
            >
              <SiRedux />
              <TechTitle>Redux</TechTitle>
            </div>
            <div
              data-tip="Styled Components"
              style={{ margin: "0.9em 0.9em 0 0" }}
            >
              <SiStyledComponents />
              <TechTitle>Styled Components</TechTitle>
            </div>
            <div data-tip="Material-UI" style={{ margin: "0.9em 0.9em 0 0" }}>
              <SiMaterialUi />
              <TechTitle>Material-UI</TechTitle>
            </div>
            <div data-tip="Storybook" style={{ margin: "0.9em 0.9em 0 0" }}>
              <SiStorybook />
              <TechTitle>Storybook</TechTitle>
            </div>
            <div data-tip="React Router" style={{ margin: "0.9em 0.9em 0 0" }}>
              <SiReactrouter />
              <TechTitle>React Router</TechTitle>
            </div>
            <div data-tip="Gatsby" style={{ margin: "0.9em 0.9em 0 0" }}>
              <SiGatsby />
              <TechTitle>Gatsby</TechTitle>
            </div>
            <div data-tip="Firebase" style={{ margin: "0.9em 0.9em 0 0" }}>
              <SiFirebase />
              <TechTitle>Firebase</TechTitle>
            </div>
            <div data-tip="Javascript" style={{ margin: "0.9em 0.9em 0 0" }}>
              <SiJavascript />
              <TechTitle>Javascript</TechTitle>
            </div>
            <div data-tip="Typescript" style={{ margin: "0.9em 0.9em 0 0" }}>
              <SiTypescript />
              <TechTitle>Typescript</TechTitle>
            </div>
            <div data-tip="Strapi" style={{ margin: "0.9em 0.9em 0 0" }}>
              <SiStrapi />
              <TechTitle>Strapi</TechTitle>
            </div>
            <div data-tip="CSS 3" style={{ margin: "0.9em 0.9em 0 0" }}>
              <SiCss3 />
              <TechTitle>CSS</TechTitle>
            </div>
            <div data-tip="HTML 5" style={{ margin: "0.9em 0.9em 0 0" }}>
              <SiHtml5 />
              <TechTitle>HTML 5</TechTitle>
            </div>
            <div data-tip="Photoshop" style={{ margin: "0.9em 0.9em 0 0" }}>
              <SiAdobephotoshop />
              <TechTitle>Photoshop</TechTitle>
            </div>
            <div data-tip="Sketch" style={{ margin: "0.9em 0.9em 0 0" }}>
              <SiSketch />
              <TechTitle>Sketch</TechTitle>
            </div>
          </div>
          <H3 color="white">I'm familiar with: </H3>
          <div
            style={{
              display: "flex",
              flexFlow: "row wrap",
              fontSize: "3em",
              margin: "0 0",
            }}
          >
            <div data-tip="AWS" style={{ margin: "0.9em 0.9em 0 0" }}>
              <SiAmazonaws />
              <TechTitle>AWS</TechTitle>
            </div>
            <div data-tip="Python" style={{ margin: "0.9em 0.9em 0 0" }}>
              <SiPython />
              <TechTitle>Python</TechTitle>
            </div>
            <div data-tip="Node Js" style={{ margin: "0.9em 0.9em 0 0" }}>
              <SiNodeDotJs />
              <TechTitle>Node JS</TechTitle>
            </div>
            <div data-tip="MySQL" style={{ margin: "0.9em 0.9em 0 0" }}>
              <SiMysql />
              <TechTitle>MySQL</TechTitle>
            </div>
          </div>
        </ColInSection>
        <ColInSection textAlign="center" col={3}>
          <Lottie
            options={getDefaultOptions(animationDataHero)}
            height={370}
            width={370}
          />
        </ColInSection>
      </Section>
  );
}

export default Skills;