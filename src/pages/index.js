import React from "react";
import { Section, ColInSection } from "../components/Layout";
import Lottie from "react-lottie";
// import animationDataBuilding from "../images/lotties/23745-building.json";
import animationDataWork from "../images/lotties/48055-working-online.json";
import { H1, P, H3, SuperHeading } from "../styles";
import ReactTooltip from "react-tooltip";
import ImgWithDescription from '../components/Layout/Blocks/ImgWithDescription';
import getDefaultOptions from '../images/lotties/getDefaultOptions';
import Skills from "../components/Layout/Blocks/Skills";
import Projects from "../components/Layout/Blocks/Projects";
import Education from "../components/Layout/Blocks/Education";
import WorkExperience from '../components/Layout/Blocks/WorkExperience';

const Home = (props) => {

  return (
    <>
      <ReactTooltip effect="solid" type="light" />
      <ImgWithDescription/>
      <Skills/>
      <Projects/>
      <Education/>
      <WorkExperience/>
    </>
  );
};

export default Home;
