import React from "react";
import { Section, ColInSection } from "../components/Layout";
import Lottie from "react-lottie";
import animationDataDev from "../images/lotties/41504-developer-is-programming-using-notebook.json";
import animationDataEdu from "../images/lotties/lf30_editor_wsf0ndww.json";
import animationDataHero from "../images/lotties/14800-superman.json";
import animationDataBuilding from "../images/lotties/23745-building.json";
import animationDataWork from "../images/lotties/48055-working-online.json";
import { H1, P, H3 } from "../styles";
import Logo from "../images/svg/pieterWolmarans.svg";
import { AiFillGithub, AiTwotonePhone } from "react-icons/ai";
import {
  SiReact,
  SiRedux,
  SiStyledComponents,
  SiReactrouter,
  SiGatsby,
  SiFirebase,
  SiJavascript,
  SiStrapi,
  SiCss3,
  SiHtml5,
  SiPython,
  SiNodeDotJs,
  SiMysql,
  SiAdobephotoshop,
  SiSketch,
} from "react-icons/si";
import ReactTooltip from "react-tooltip";
import Cards from "../components/Cards/Cards";
import { projectsArray } from "../data/projectsArray";
import Snake from "../components/Snake";
import { StaticImage } from "gatsby-plugin-image";
import styled from 'styled-components'

const SuperHeading = styled(H3)`
  margin-bottom: -35px;
  opacity: 0.7;
`

const Home = (props) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationDataDev,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <ReactTooltip effect="solid" type="light" />
      <Section
        background="radial-gradient(circle at 20% 50%, rgba(169,212,217,1) 0%, rgba(91,158,166,1) 100%)"
        justifyContent="center"
        padding="40px 0px 70px"
        height="100vh"
      >
        <ColInSection
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          style={{ position: "absolute", top: 0 }}
          color="white"
          col={1}
        >
          <Logo style={{ width: 200, marginLeft: "3vw" }} />
          <div
            style={{
              fontSize: "1.2em",
              display: "flex",
              alignItems: "center",
              marginRight: "3vw",
            }}
          >
            <a href="https://github.com/pixelume">
              <AiFillGithub style={{ fontSize: "1.2em" }} />
            </a>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <AiTwotonePhone style={{ fontSize: "1.1em" }} />
            <span style={{ fontSize: "1em" }}>&nbsp;+27 82 839 4959</span>
          </div>
        </ColInSection>
        <ColInSection textAlign="center" col={2.3}>
          <Lottie options={defaultOptions} height={370} width={370} />
        </ColInSection>
        <ColInSection textAlign="center" color="white" col={2.3}>
          <H1>Hello, I'm Pieter</H1>
          <P style={{ fontSize: "1.15em" }}>
            A front end developer with a strong background in design. Specialising
            in React, Gatsby, Firebase, Strapi, JAMStack and serverless
            architechture. I love development more than I love Ice cream.{" "}
          </P>
        </ColInSection>
      </Section>
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
          <H3 color="white">Software (proficient): </H3>
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
            </div>
            <div data-tip="Redux" style={{ margin: "0.9em 0.9em 0 0" }}>
              <SiRedux />
            </div>
            <div
              data-tip="Styled Components"
              style={{ margin: "0.9em 0.9em 0 0" }}
            >
              <SiStyledComponents />
            </div>
            <div data-tip="React Router" style={{ margin: "0.9em 0.9em 0 0" }}>
              <SiReactrouter />
            </div>
            <div data-tip="Gatsby" style={{ margin: "0.9em 0.9em 0 0" }}>
              <SiGatsby />
            </div>
            <div data-tip="Firebase" style={{ margin: "0.9em 0.9em 0 0" }}>
              <SiFirebase />
            </div>
            <div data-tip="Javascript" style={{ margin: "0.9em 0.9em 0 0" }}>
              <SiJavascript />
            </div>
            <div data-tip="Strapi" style={{ margin: "0.9em 0.9em 0 0" }}>
              <SiStrapi />
            </div>
            <div data-tip="CSS 3" style={{ margin: "0.9em 0.9em 0 0" }}>
              <SiCss3 />
            </div>
            <div data-tip="HTML 5" style={{ margin: "0.9em 0.9em 0 0" }}>
              <SiHtml5 />
            </div>
            <div data-tip="Photoshop" style={{ margin: "0.9em 0.9em 0 0" }}>
              <SiAdobephotoshop />
            </div>
            <div data-tip="Sketch" style={{ margin: "0.9em 0.9em 0 0" }}>
              <SiSketch />
            </div>
          </div>
          <H3 color="white">Software (familiar): </H3>
          <div
            style={{
              display: "flex",
              flexFlow: "row wrap",
              fontSize: "3em",
              margin: "0 0",
            }}
          >
            <div data-tip="Python" style={{ margin: "0.9em 0.9em 0 0" }}>
              <SiPython />
            </div>
            <div data-tip="Node Js" style={{ margin: "0.9em 0.9em 0 0" }}>
              <SiNodeDotJs />
            </div>
            <div data-tip="MySQL" style={{ margin: "0.9em 0.9em 0 0" }}>
              <SiMysql />
            </div>
          </div>
        </ColInSection>
        <ColInSection textAlign="center" col={3}>
          <Lottie
            options={{ ...defaultOptions, animationData: animationDataHero }}
            height={370}
            width={370}
          />
        </ColInSection>
      </Section>
      <Section
        background="radial-gradient(circle, rgba(240,248,255,1) 0%, rgba(169,212,217,1) 100%)"
        // backgroundColor="aliceBlue"
        justifyContent="center"
        slanted={3}
        padding="40px 0px 90px"
      >
        <ColInSection textAlign="center" col={4}>
          <Lottie
            options={{
              ...defaultOptions,
              animationData: animationDataBuilding,
            }}
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
      <Section
        // backgroundColor="caramel"
        background="radial-gradient(circle, rgba(235,240,242,1) 0%, rgba(217,163,132,1) 100%)"
        justifyContent="center"
        alignItems="flex-start"
        slanted={3}
        up
        padding="40px 0 90px"
      >
        <ColInSection textAlign="center" col={2.3}>
          <Lottie
            options={{ ...defaultOptions, animationData: animationDataEdu }}
            height={370}
            width={370}
          />
        </ColInSection>
        <ColInSection textAlign="center" color="slategrey" col={2.3}>
          <SuperHeading>Education</SuperHeading>
          <H1>I've read some books and wrote some tests</H1>
          <div style={{ margin: "1em 0", color: "inherit" }}>
            <H3 color="slategrey">
              Studied towards B.Sc, Computer Science (Incomplete) (CGPA of 3.67)
            </H3>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "20px 0",
              }}
            >
              <a href="https://uopeople.edu">
                <StaticImage
                  src="../images/128_University_of_the_People_color_logo_mtSudu.png"
                  alt="University of the People"
                  placeholder="dominantColor"
                  layout="fixed"
                  width={100}
                  height={80}
                  style={{ minWidth: 100 }}
                />
              </a>
              <P color="slategrey" margin="auto 0 auto 10px">
                University of the People, Pasadena California, Jul 2017 – Sep
                2018
              </P>
            </div>
            <P>
              <strong>Completed Courses:</strong>
              <br />
              Online Education Strategies, College Algebra, Introduction to
              Statistics, English Composition 2, Programming Fundamentals,
              Programming 1, Programming 2, Computer Systems, Databases 1,
              Communications and Networking, Web Programming 1, Operating
              Systems 1, Software Engineering 1
            </P>
          </div>
          <hr />
          <div style={{ margin: "20px 0" }}>
            <H3 color="slategrey">Bachelor of Optometry (Completed)</H3>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "20px 0",
              }}
            >
              <a href="https://www.uj.ac.za">
                <StaticImage
                  src="../images/avatars-000071652739-1l0yuy-original.jpg"
                  alt="University of Johannesburg"
                  placeholder="dominantColor"
                  layout="fixed"
                  width={100}
                  height={100}
                  style={{ minWidth: 100 }}
                />
              </a>
              <P margin="auto 0 auto 10px">University of Johannesburg, Jan 1996 – Dec 2001</P>
            </div>
          </div>
        </ColInSection>
      </Section>
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
          <Lottie options={{...defaultOptions, animationData: animationDataWork}} height={370} width={370} />
        </ColInSection>
      </Section>
    </>
  );
};

export default Home;
