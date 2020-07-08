import React, { useEffect } from "react";
import styled from "styled-components";
import Modal from "../../Shared/Modal";
import { useSelector, useDispatch } from "react-redux";
import { toggleSideDrawer } from "../../../3_data/actions/sidebarActions";

const Modal_Sidebar = (props) => {
  //   useEffect(() => {
  //     document.body.style.overflow = "hidden";
  //   });
  const isOpen = useSelector((state) => state.sidebarReducer.isOpen);
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(toggleSideDrawer());
  };
  return <Modal onClick={onClick} isOpen={isOpen} />;
};
export default Modal_Sidebar;
