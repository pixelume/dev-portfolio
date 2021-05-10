import React from 'react';
import { ColInSection, Section } from '../';
import Logo from '../../../images/svg/pieterWolmarans.svg';
import {
  AiFillGithub,
  AiTwotonePhone
} from 'react-icons/ai';
import Lottie from "react-lottie";
import animationDataDev from "../../../images/lotties/41504-developer-is-programming-using-notebook.json";
import {H1, P} from '../../../styles'
import getDefaultOptions from '../../../images/lotties/getDefaultOptions';

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
          <Lottie options={getDefaultOptions(animationDataDev)} height={370} width={370} />
        </ColInSection>
        <ColInSection textAlign="center" color="white" col={2.3}>
          <H1>Hello, I'm Pieter</H1>
          <P style={{ fontSize: "1.15em" }}>
            A front end developer with a strong background in design. Specialising
            in React, Gatsby, Firebase, Strapi, JAMStack and serverless
            architecture. I love development more than I love Ice cream.{" "}
          </P>
        </ColInSection>
      </Section>
  );
}

export default ImgWithDescription;