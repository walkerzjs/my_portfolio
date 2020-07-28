import React from "react";
import styled from "styled-components";
import MenuItem from "./MenuItem";
import theme from "styled-theming";
import ThemeToggle from "./ThemeToggle";
const backgroundColor = theme("mode", {
  light: "var(--white)",
  dark: "var(--grey-5)",
});

const MenuList_ = styled.ul`
  list-style: none;
  flex: 1;
  background-color: ${backgroundColor};
  padding: 2rem;
  padding-top: 3rem;
  transition: all 0.2s ease-out;
`;

const MenuList = (props) => {
  return (
    <MenuList_>
      <MenuItem sectionId="aboutMe" sectionName="About Me" />
      <MenuItem sectionId="projects" sectionName="Projects" />
      <MenuItem sectionId="contact" sectionName="Contact" />
      {/* <MenuItem sectionId="aboutMe" sectionName="About Me" />
      <MenuItem sectionId="projects" sectionName="Projects" />
      <MenuItem sectionId="contact" sectionName="Contact" />
      <MenuItem sectionId="aboutMe" sectionName="About Me" />
      <MenuItem sectionId="projects" sectionName="Projects" />
      <MenuItem sectionId="contact" sectionName="Contact" />
      <MenuItem sectionId="aboutMe" sectionName="About Me" />
      <MenuItem sectionId="projects" sectionName="Projects" />
      <MenuItem sectionId="contact" sectionName="Contact" />
      <MenuItem sectionId="aboutMe" sectionName="About Me" />
      <MenuItem sectionId="projects" sectionName="Projects" />
      <MenuItem sectionId="contact" sectionName="Contact" />
      <MenuItem sectionId="aboutMe" sectionName="About Me" />
      <MenuItem sectionId="projects" sectionName="Projects" />
      <MenuItem sectionId="contact" sectionName="Contact" />
      <MenuItem sectionId="aboutMe" sectionName="About Me" />
      <MenuItem sectionId="projects" sectionName="Projects" />
      <MenuItem sectionId="contact" sectionName="Contact" />
      <MenuItem sectionId="aboutMe" sectionName="About Me" />
      <MenuItem sectionId="projects" sectionName="Projects" />
      <MenuItem sectionId="contact" sectionName="Contact" />
      <MenuItem sectionId="aboutMe" sectionName="About Me" />
      <MenuItem sectionId="projects" sectionName="Projects" />
      <MenuItem sectionId="contact" sectionName="Contact" /> */}
      <ThemeToggle />
    </MenuList_>
  );
};

export default MenuList;
