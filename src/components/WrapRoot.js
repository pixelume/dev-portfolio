import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import { Grommet } from "grommet";
import { ThemeProvider } from "styled-components";
// import { theme, grommetTheme } from "../styles/Theme";
import { theme } from "../styles/Theme";
// import GlobalStyle from "../styles/GlobalStyle";
// import { useStaticQuery, graphql } from "gatsby";
import "@fontsource/montserrat";
import { useStaticQuery, graphql } from "gatsby";
import WhatsAppWidget from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";

export const Context = React.createContext();

const WaContainer = styled.div`
  width: 84px;
  height: 84px;
  position: fixed;
  bottom: 0px;
  right: -30px;
`;

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
    projectsArray: data.allContentfulProject.nodes,
  };

  return (
    // <Grommet theme={grommetTheme}>
    <>
      <Context.Provider value={providerValue}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Context.Provider>
      <WaContainer>
        <WhatsAppWidget
          textReplyTime="Typically replies within a couple of minutes"
          phoneNumber="+27828394959"
          companyName="Pieter Wolmarans"
          message="Hi there. How can I help you?"
        />
      </WaContainer>
    </>
    // </Grommet>
  );
};

export default WrapRoot;
