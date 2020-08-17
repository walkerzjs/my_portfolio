import React from "react";
import styled from "styled-components";
import AnchorLink from "react-anchor-link-smooth-scroll";
import theme from "styled-theming";

const textColor = theme("mode", {
  light: "var(--black)",
  dark: "var(--white)",
});
// appl

const NavLink_ = styled.li`
  list-style: none;
  margin-right: 20px;
  /* width: 92px; */
  /* height: 2rem; */
  & a {
    font-size: 20px;
    letter-spacing: var(--unnamed-character-spacing-0);
    /* color: var(--black); */
    color: ${textColor};
    text-decoration: none;
    text-decoration: none;
    transition: all 0.2s ease-out;
    @media (max-width: 1450px) {
      font-size: 17.8px;
    }
  }

  cursor: pointer;

  /* text-decoration: none; */

  opacity: 1;
  @media (max-width: 166px) {
    font-size: 14px;
  }
`;

const SharedNavButton = (props) => {
  return (
    <NavLink_ aria-label={`link to ${props.label}`}>
      {(() => {
        switch (props.type) {
          case "external":
            return (
              <a href={props.id} rel="noopener noreferrer">
                {props.label}
              </a>
            );
          case "email":
            return (
              <a href={`mailto:${props.id}`} rel="noopener noreferrer">
                {props.label}
              </a>
            );

          default:
            return (
              <AnchorLink offset="70" href={`#${props.id}`}>
                {props.label}
              </AnchorLink>
            );
        }
      })()}
    </NavLink_>
  );
};

export default SharedNavButton;
