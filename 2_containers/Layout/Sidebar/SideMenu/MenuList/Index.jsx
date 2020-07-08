import React from "react";
import styled from "styled-components";
import MenuItem from "./MenuItem";

const MenuList_ = styled.ul`
  list-style: none;
  height: 100%;
  background-color: #f9f9f9;
  padding: 2rem;
  padding-top: 4rem;
`;

const MenuList = (props) => {
  return (
    <MenuList_>
      <MenuItem sectionId="aboutMe" sectionName="About Me" />
      <MenuItem sectionId="projects" sectionName="Projects" />
      <MenuItem sectionId="contact" sectionName="Contact" />
    </MenuList_>
  );
};

export default MenuList;
