import React from "react";
import styled from "styled-components";
import AnchorLink from "react-anchor-link-smooth-scroll";

const MenuItem_ = styled.li`
  & a {
    font-size: 2rem;
    height: 5rem;
    width: 100%;
    padding-left: 10%;
    text-decoration: none;
    color: var(--black);
    display: block;
    display: flex;
    align-items: center;
  }

  cursor: pointer;
`;

const MenuItem = (props) => {
  return (
    <MenuItem_>
      <AnchorLink
        offset="62"
        href={`/${props.sectionId}`}
        aria-label={`Click to ${props.sectionName} section`}
      >
        {props.sectionName}
      </AnchorLink>
    </MenuItem_>
  );
};

export default MenuItem;
