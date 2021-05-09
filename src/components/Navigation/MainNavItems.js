import React, { useContext } from "react";
import styled, { css, keyframes } from "styled-components";
import { Context } from "../RootElement";
import { Link } from 'gatsby';

const NavLink = styled(Link).attrs({
  activeClassName: "active"
})`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  padding: 10px 10px;
  color: ${({highlite}) => highlite? "white": "grey"};
  border-bottom: 5px solid transparent;
  border-top: 5px solid transparent;
  border-left: 1px solid lightgrey;
  font-size: inherit;
  background-color: inherit;
  cursor: pointer;
  @media (min-width: ${({ theme }) => theme.mobileMenu}) {
    /* border-right: 1px solid lightgrey; */
    ${({highlite}) => highlite? css`
      /* background-color: teal; */
      &::before {
        content: "";
        position: absolute;
        left: 2%;
        top: calc(0.25 * ${({theme}) => theme.headerHeightBig} - 5px);
        width: 96%;
        height: calc(0.5 * ${({theme}) => theme.headerHeightBig});
        background-color: teal;
        border-radius: 10px;
        z-index: -10;
        animation: ${blink} 1.33s ease-out infinite;
      }
    `
      : null}
    &:hover, &.active {
      /* box-sizing: border-box; */
      padding: 0px 10px;
    }
    &:hover {
      border-bottom: 5px solid ${({ theme }) => theme.skyBlue};
    }
    &.active {
      border-bottom: 5px solid ${({ theme }) => theme.fadedGreyBlue};
    }
    /* &:last-child {
      border-right: none;
    } */
  }
  /* color: ${({ theme }) => theme.primaryDark}; */
  transition: color 0.3s linear;
  &.active {
    color: ${({ theme }) => theme.fadedGreyBlue};
  }
  &:hover {
    color: ${({ theme }) => theme.skyBlue};
    /* text-decoration: underline; */
  }
  @media (max-width: ${({ theme }) => theme.mobileMenu}) {
    font-size: 1rem;
    text-align: center;
    padding: 20px 0px;
    border-bottom: 1px solid lightgrey;
    &:first-child {
      border-top: 1px solid lightgrey;
    }
  }
`

const blink = keyframes`
  0% {
    opacity: 1;
  }
  20% {
    opacity: .5;
  }
  100% {
    opacity: 1;
  }
`

const MainNavItems = ({setNavOpen, navOpen, navData}) => {
  const { user, setUser } = useContext(Context);

  return navData.map((navItem, idx) => {
    if (
      ((!user) && navItem.show !== "loggedIn") || // signed out
      (user.jwt && navItem.show !== "loggedOut" && ["Any", user.user.role.name].includes(navItem.role)) // signed in
    ) {
      if (navItem.text === "Sign Out") {
        return (
          <NavLink 
            as="button" 
            key={idx} 
            onClick={() => {
              setUser(false)
              if (navOpen) {
                setNavOpen(false)
              }
            }}
          >
            {navItem.icon}&nbsp;{navItem.text}
          </NavLink>
        )
      } else {
        return (
          <NavLink 
            key={idx}
            to={navItem.link} 
            exact
            onClick={() => {
              if (navOpen) {
                setNavOpen(false)
              }
            }}
          >
            {navItem.icon}&nbsp;{navItem.text}
          </NavLink>
        );
      }
    }
    return null;
  });
};

export default MainNavItems;