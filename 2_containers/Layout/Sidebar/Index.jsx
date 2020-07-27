import React from "react";
import styled from "styled-components";
import SideMenu from "./SideMenu/Index";
import Modal from "./Modal";
// import { useSelector, useDispatch } from "react-redux";

const Sidebar_ = styled.div``;

const Sidebar = (props) => {
  // const isOpen = useSelector((state) => state.sidebarReducer.isOpen);

  return (
    <Sidebar_ aria-label="Sidebar">
      <SideMenu />
      <Modal />
    </Sidebar_>
  );
};

export default Sidebar;
