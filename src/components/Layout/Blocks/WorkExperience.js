import React from "react";
import animationDataWork from "../../../images/lotties/48055-working-online.json";
import { ColInSection, Section } from "../";
import Lottie from "react-lottie";
import { H1, P, SuperHeading, H3 } from "../../../styles";
import getDefaultOptions from "../../../images/lotties/getDefaultOptions";
import { StaticImage } from "gatsby-plugin-image";

const WorkExperience = (props) => {
  //Logic

  return (
    <Section
      background="radial-gradient(circle at 80% 50%, rgba(169,212,217,1) 0%, rgba(91,158,166,1) 100%)"
      justifyContent="center"
      padding="40px 0px 70px"
      // height="100vh"
      slanted={3}
      flexFlow="row wrap-reverse"
      alignItems="flex-end"
    >
      <ColInSection textAlign="center" color="white" col={2.3}>
        <SuperHeading>Work Experience</SuperHeading>
        <H1>I've learned a few things</H1>
        <div style={{ margin: "1em 0", color: "inherit" }}>
          <H3>React Developer at Eyechart Online. Sept 2018 - Current</H3>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "20px 0",
            }}
          >
            <a href="https://eyechart.online">
              <StaticImage
                src="../../../images/ECO_512x512.png"
                alt="University of the People"
                placeholder="dominantColor"
                layout="fixed"
                width={100}
                height={100}
                style={{ minWidth: 100 }}
              />
            </a>
            <P margin="auto 0 auto 10px">
              Eyechart Online, Port Elizabeth, South Africa
            </P>
          </div>
          <P>
            <strong>Responsible for the development, maintaintenance and expansion of
            new features for the Eyechart Online web application.</strong>
            <br /><br/>
            Eyechart Online is a modern web application written for optometrists and
            ophthalmologists. It includes various tests and charts used by eye
            care professionals when evaluating a person's visual skills and
            abilities. It is a replacement for the static bulb-based chart
            projector normally used by optometrists for displaying charts and it
            also includes a whole range of other tests used for assessing visual
            skills. It includes user authentication, a firebase real-time
            database for user management and licence subscription management and
            a custom Payfast payment gateway integration for subscription
            payments.
          </P>
        </div>
        <hr style={{margin: '40px 0'}}/>
        <div style={{ margin: "1em 0", color: "inherit" }}>
          <H3>Freelance Frontend Developer, July 2018 - Current</H3>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "20px 0",
            }}
          >
              <StaticImage
                src="../../../images/freelance.png"
                alt="Freelance"
                placeholder="dominantColor"
                layout="fixed"
                width={100}
                height={100}
                style={{ minWidth: 100 }}
              />
            <P margin="auto 0 auto 10px">
              Various front-end, JAMstack and serverless projects completed as a freelance front-end javascript developer. July 2018 - Current.
            </P>
          </div>
          <P>
            Some of my completed projects can be seen here.
          </P>
        </div>
      </ColInSection>
      <ColInSection textAlign="center" col={2.3}>
        <Lottie
          options={getDefaultOptions(animationDataWork)}
          height={370}
          width={370}
        />
      </ColInSection>
    </Section>
  );
};

export default WorkExperience;
