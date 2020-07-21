import React from "react";
import styled from "styled-components";
import theme from "styled-theming";

const backgroundColor = theme("mode", {
  light: "var(--white)",
  dark: "var(--black)",
});

const borderBottom = theme("mode", {
  light: "2px solid #e5e5e5",
  dark: "2px solid var(--black)",
});

export const Nav = styled.nav`
  z-index: 1000;
  position: sticky;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 7rem;
  background-color: ${backgroundColor};
  border-bottom: ${borderBottom};
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background-color 0.2s ease-out, border-bottom 0.2s ease-out;
`;

const Navbar = (props) => {
  return <Nav aria-label="Navigation bar">{props.children}</Nav>;
};

export default Navbar;
