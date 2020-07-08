import React from "react";
import styled from "styled-components";
import SidebarToggle from "../../../Shared/SidebarToggle";
import { toggleSideDrawer } from "../../../../../3_data/actions/sidebarActions";
import { useDispatch } from "react-redux";
const SidebarToggle_ = styled.div``;

const SidebarToggleDrawer = (props) => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(toggleSideDrawer());
  };
  return (
    <SidebarToggle_ onClick={onClick}>
      <SidebarToggle />
    </SidebarToggle_>
  );
};

export default SidebarToggleDrawer;
