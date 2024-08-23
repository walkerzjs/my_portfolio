import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import theme from "styled-theming";

const color = theme("mode", {
  light: "invert(0)",
  dark: "invert(1)",
});
const SidebarToggle_ = styled.button`
  background: none;
  border: none;
  margin-right: 2rem;
  img {
    display: block;
    width: 4rem;
    height: 4rem;
    filter: ${color};
    transition: all 0.2s ease-out;
  }

  cursor: pointer;
`;

const SidebarToggle = (props) => {
  const themeContext = useContext(ThemeContext);
  return (
    <SidebarToggle_ className="SidebarToggle" aria-label={props.ariaLabel}>
      <img src="/navMenuToggle.svg" alt="Sidebar menu toggle" />
    </SidebarToggle_>
  );
};

export default SidebarToggle;
