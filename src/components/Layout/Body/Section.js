import styled, { css } from "styled-components";

const Section = styled.section`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-flow: ${props => props.flexFlow? props.flexFlow: 'row wrap'};
  border-radius: ${(props) => props.borderRadius || "none"};
  justify-content: ${(props) => props.justifyContent || "space-between"};
  align-items: ${(props) => props.alignItems || "center"};
  align-content: ${(props) => props.alignContent || "center"};
  ${(props) =>
    props.alignSelf
      ? css`
          align-self: ${props.alignSelf};
        `
      : null}
  padding: ${(props) => props.padding || "40px 0px"};
  background-color: ${(props) =>
    props.theme[props.backgroundColor] ||
    props.backgroundColor ||
    "transparent"};
  margin: ${(props) => props.margin || "0px"};
  position: ${(props) =>
    props.slanted ? "relative" : props.position || "static"};
  overflow: visible;
  z-index: 0;
  ${(props) =>
      props.background
        ? css`
            background: ${props.background};
          `
        : null}
  @media only screen and (orientation: landscape) {
    padding-left: 5vw;
    padding-right: 5vw;
    ${({ height }) =>
    height
      ? css`
          height: ${height};
        `
      : null}
    ${({ minHeight }) =>
    minHeight
      ? css`
          min-height: ${minHeight};
        `
      : null}
  }
  ${(props) =>
    props.slanted
      ? css`
          &::before {
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            background: inherit;
            z-index: -1;
            bottom: 0;
            left: 0;
            transform-origin: ${props => props.up? `left `: `right`} center;
            transform: skewY(${props => props.up? `-${props.slanted}deg`: `${props.slanted}deg`});
          }
        `
      : null}
`;

export { Section };

    /* &:first-child {
      min-height: calc(100vh - ${({ theme }) => theme.headerHeightBig});
      align-items: stretch;
    } */
