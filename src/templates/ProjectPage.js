import React from "react";
import { ColInSection, Section } from "../components/Layout";
// import { projectsArray } from "../data/projectsArray";
import { H3, P, mdComponents } from "../styles";
// import { StaticImage } from "gatsby-plugin-image";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { AiFillGithub } from "react-icons/ai";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { graphql } from "gatsby";
import ReactMarkdown from "react-markdown";

// const project = projectsArray[0];

const ProjectPage = ({ data }) => {
  const project = data.contentfulProject;
  const image = getImage(data.contentfulProject.image);
  return (
    <>
      <Section
        backgroundColor="dust"
        alignItems="center"
        justifyContent="center"
        padding="70px 0"
      >
        <ColInSection col={1} padding="1.5em 0">
          <H3 size={1.5} textAlign="center">
            {project.name}
          </H3>
        </ColInSection>
        <ColInSection col={2.3} padding="5px">
          <GatsbyImage image={image} />
          {/* <StaticImage
            src="../images/projects/01.jpg"
            alt="Eyechart Online Web Application"
            placeholder="dominantColor"
            style={{ borderRadius: 10, boxShadow: "0px 0px 3px -1px #000000" }}
            // layout="fixed"
            // width={350}
            // height={219}
          /> */}
        </ColInSection>
        <ColInSection col={3} paddingDesktop="0 0 0 1.2em">
          <ReactMarkdown components={mdComponents}>
            {project.summary.summary}
          </ReactMarkdown>
        </ColInSection>
      </Section>
      <Section justifyContent="center" backgroundColor="babyBlue" slanted={3}>
        <ColInSection col={1} padding="0 0 1.5em 0">
          <P textAlign="center">
            <a href={project.url}>
              <HiOutlineGlobeAlt />
              &nbsp;&nbsp;View Demo
            </a>{" "}
            |{" "}
            <a href={project.githubRepo}>
              <AiFillGithub />
              &nbsp; &nbsp;Github Repo
            </a>
          </P>
        </ColInSection>
        <ColInSection col={1.3}>
          <H3 textAlign="center">Tech Stack:</H3>
          <H3 textAlign="center" margin="1em 0">
            {project.techStack.join(" | ")}
          </H3>
        </ColInSection>
      </Section>
    </>
  );
};

export default ProjectPage;

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      slug
      name
      summary {
        summary
      }
      techStack
      url
      githubRepo
      image {
        gatsbyImageData
      }
    }
  }
`;
