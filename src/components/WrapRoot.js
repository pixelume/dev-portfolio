import React, { useEffect, useState } from "react";
// import { Grommet } from "grommet";
import { ThemeProvider } from "styled-components";
// import { theme, grommetTheme } from "../styles/Theme";
import { theme } from "../styles/Theme";
import GlobalStyle from "../styles/GlobalStyle";
// import { useStaticQuery, graphql } from "gatsby";
import "@fontsource/montserrat";
import { useStaticQuery, graphql } from "gatsby";

export const Context = React.createContext();

const WrapRoot = ({ children }) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allContentfulProject {
        nodes {
          name
          techStack
          slug
          image {
            gatsbyImageData
          }
        }
      }
    }
  `);

  const providerValue = {
    projectsArray: data.allContentfulProject.nodes
  };

  return (
    // <Grommet theme={grommetTheme}>
    <>
      <GlobalStyle />
      <Context.Provider value={providerValue}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Context.Provider>
    </>
    // </Grommet>
  );
};

export default WrapRoot;
