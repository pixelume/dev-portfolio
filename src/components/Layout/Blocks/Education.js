import React from 'react';
import animationDataEdu from "../../../images/lotties/lf30_editor_wsf0ndww.json";
import { ColInSection, Section } from '../';
import Lottie from "react-lottie";
import {H1, P, H3, SuperHeading} from '../../../styles'
import getDefaultOptions from '../../../images/lotties/getDefaultOptions';
import { StaticImage } from 'gatsby-plugin-image';

const Education = props => {
  //Logic

  return (
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
            options={getDefaultOptions(animationDataEdu)}
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
                  src="../../../images/128_University_of_the_People_color_logo_mtSudu.png"
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
                  src="../../../images/avatars-000071652739-1l0yuy-original.jpg"
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
  );
}

export default Education;