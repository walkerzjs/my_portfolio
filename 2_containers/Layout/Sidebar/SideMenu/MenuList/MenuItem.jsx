import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { toggleSideDrawer } from "../../../../../3_data/actions/sidebarActions";
const MenuItem_ = styled.li`
  & a {
    text-decoration: none;
    color: var(--black);
    text-align: left;
  }
  font-size: 2rem;
  height: 5rem;
  width: 100%;
  padding-left: 10%;
  /* display: flex;
  justify-content: flex-end; */
`;

const MenuItem = (props) => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(toggleSideDrawer());
  };
  let element = document.getElementById(`${props.sectionId}`);

  console.log("element: ", element);
  return (
    <MenuItem_
      onClick={() =>
        window.scroll({
          behavior: "smooth",
          left: 0,
          top: element.offsetTop - 62,
        })
      }
    >
      {props.sectionName}
    </MenuItem_>
  );
};

export default MenuItem;
