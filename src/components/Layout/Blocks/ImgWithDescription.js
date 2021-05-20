import React from "react";
import styled from "styled-components";
import { ColInSection, Section } from "../";
import Logo from "../../../images/svg/pieterWolmarans.svg";
import { AiFillGithub, AiTwotonePhone } from "react-icons/ai";
import Lottie from "react-lottie";
import animationDataDev from "../../../images/lotties/41504-developer-is-programming-using-notebook.json";
import { H1, P } from "../../../styles";
import getDefaultOptions from "../../../images/lotties/getDefaultOptions";

const StLogo = styled(Logo)`
  width: 120px;
  margin-left: 3vw;
  @media screen and (orientation: landscape) {
    width: 200px;
  }
`;
const NrStyle = styled.span`
  font-size: 0.7em;
  @media screen and (orientation: landscape) {
    font-size: 1em;
  }
`;

const ImgWithDescription = () => {
  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animationDataDev,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };

  return (
    //JSX
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
        <StLogo />
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
          <NrStyle>&nbsp;+27 82 839 4959</NrStyle>
        </div>
      </ColInSection>
      <ColInSection textAlign="center" col={2.3}>
        <Lottie
          options={getDefaultOptions(animationDataDev)}
          height={370}
          width={370}
        />
      </ColInSection>
      <ColInSection textAlign="center" color="white" col={2.3}>
        <H1>Hello, I'm Pieter</H1>
        <P style={{ fontSize: "1em" }}>
          I'm a javascript developer with a strong design background. I focus
          mainly on front end development work with React (which is by far my
          favourite front end framework) and related technologies. My areas of
          expertise include working with serverless architectures and the JAM
          stack. I'm proficient in modern React, React Router, Redux for state
          management, Styled Components, Gatsby, Firebase Realtime Database,
          Firebase Authentication and Google Cloud Functions. I also often use
          headless CMS's like Contentful and Strapi. I care about sound design
          systems and web accessibility and am constantly educating myself on
          best practices. My passion project is a web application for eyecare
          professionals called Eyechart Online which I have launched
          commercially and for which I have paid subscribers.
        </P>
      </ColInSection>
    </Section>
  );
};

export default ImgWithDescription;
