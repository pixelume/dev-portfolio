import React from 'react';
import styled, { css } from "styled-components";

const baseSize = {
  desktop: 3,
  mobile: 2.5,
};

const H1 = styled.h1`
  color: ${({ theme }) => theme.greyBlue};
  text-align: ${(props) => props.textAlign || "left"};
  font-size: ${(props) => props.size? props.size*baseSize.mobile: baseSize.mobile}em;
  @media only screen and (orientation: landscape) {
    font-size: ${(props) => props.size? props.size*baseSize.desktop: baseSize.desktop}em;
  }
  font-weight: bold;
`;
const H3 = styled.h3`
  color: ${({ color, theme }) => theme[color] || color || "inherit"};
  /* color: slategrey; */
  text-align: ${(props) => props.textAlign || "left"};
  font-size: ${(props) => props.size? props.size*(baseSize.mobile / 2.5): (baseSize.mobile / 2.5)}em;
  text-transform: uppercase;
  font-weight: bold;
  margin: ${(props) => props.margin || "auto"};
  letter-spacing: ${baseSize.mobile / 50}em;
  @media only screen and (orientation: landscape) {
    font-size: ${(props) => props.size? props.size*(baseSize.desktop / 3): (baseSize.desktop / 3)}em;
    letter-spacing: ${baseSize.desktop / 50}em;
  }
`;

const SuperHeading = styled(H3)`
  margin-bottom: -35px;
  opacity: 0.7;
`

const P = styled.p`
  color: ${({ color, theme }) => theme[color] || color || theme.greyBlue};
  text-align: ${(props) => props.textAlign || "left"};
  margin: ${(props) => props.margin || "auto"};
  ${(props) =>
    props.lineHeight
      ? css`
          line-height: ${props.lineHeight};
        `
      : css`
          line-height: 1.7em;
        `}
  @media only screen and (orientation: landscape) {
    /* padding-left: 15px;
    padding-right: 15px; */
    box-sizing: border-box;
  }
`;

const Img = styled.img`
  width: 100%;
  border-radius: 15px;
  box-shadow: 0px 0px 3px -1px #000000;
`;

const imgStyle = {
  width: '100%',
  borderRadius: '15px',
  boxShadow: '0px 0px 3px -1px #000000',
}

const mdComponents = {
  h1: ({children}) => <H1>{children}</H1>,
  p: ({ children }) => <P>{children}</P>,
  h3: ({children}) => <H3>{children}</H3>
};

export { H1, H3, SuperHeading, P, Img, imgStyle, mdComponents };
