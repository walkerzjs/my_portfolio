import React from "react";
import styled from "styled-components";
import AnchorLink from "react-anchor-link-smooth-scroll";
import theme from "styled-theming";

const textColor = theme("mode", {
  light: "var(--black)",
  dark: "var(--white)",
});
const MenuItem_ = styled.li`
  & a {
    font-size: 2rem;
    height: 5rem;
    width: 100%;
    padding-left: 10%;
    text-decoration: none;
    color: ${textColor};
    display: block;
    display: flex;
    align-items: center;
    transition: all 0.2s ease-out;
  }

  cursor: pointer;
`;

const MenuItem = (props) => {
  return (
    <MenuItem_>
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
              <AnchorLink
                offset="62"
                href={`#${props.id}`}
                aria-label={`Click to ${props.label} section`}
              >
                {props.label}
              </AnchorLink>
            );
        }
      })()}
    </MenuItem_>
  );
};

export default MenuItem;
