import React from "react";
import styled from "styled-components";
import Header from "./Header/Index";
import MenuList from "./MenuList/Index";
import { useSelector } from "react-redux";

const SideMenu_ = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  width: 250px;
  max-width: 100vw;
  height: 100vh;
  /* background-color: white; */
  z-index: 1200;

  transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s ease;
  /* transition-property: opacity, transform;
  transition-duration: 3s;
  transition-timing-function: ease; */
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};

  transform: ${(props) =>
    props.isOpen ? "translateX(0)" : "translateX(100%)"};
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
`;

const SideMenu = (props) => {
  const isOpen = useSelector((state) => state.sidebarReducer.isOpen);

  return (
    <SideMenu_ isOpen={isOpen}>
      <Header />
      <MenuList />
    </SideMenu_>
  );
};

export default SideMenu;
