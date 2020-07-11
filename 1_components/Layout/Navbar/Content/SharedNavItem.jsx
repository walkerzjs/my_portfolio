import React from "react";
import styled from "styled-components";
import AnchorLink from "react-anchor-link-smooth-scroll";

const NavLink_ = styled.li`
  list-style: none;

  /* width: 92px; */
  /* height: 2rem; */
  & a {
    font-size: 2rem;
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--black);
    text-decoration: none;
    text-decoration: none;
  }

  cursor: pointer;

  /* text-decoration: none; */

  opacity: 1;
  @media screen and (max-width: 166px) {
    font-size: 1.4rem;
  }
`;

const SharedNavButton = (props) => {
  return (
    <NavLink_ aria-label={`link to ${props.label} section`}>
      <AnchorLink offset="62" href={`#${props.id}`}>
        {props.label}
      </AnchorLink>
    </NavLink_>
  );
};

export default SharedNavButton;
