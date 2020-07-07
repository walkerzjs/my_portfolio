import React from "react";
import styled from "styled-components";
import Link from "next/link";

const NavLink_ = styled.li`
  list-style: none;
  a {
    text-decoration: none;
    width: 92px;
    height: 2rem;
    font-size: 2rem;
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--black);
    text-align: left;

    opacity: 1;
    @media screen and (max-width: 166px) {
      font-size: 1.4rem;
    }
  }
`;

const SharedNavButton = (props) => {
  return (
    <NavLink_>
      <Link href={`${props.id}`}>
        <a aria-label={props.ariaLabel}>{props.label}</a>
      </Link>
    </NavLink_>
  );
};

export default SharedNavButton;
