import React, { useEffect } from "react";
import styled from "styled-components";

const MenuItem_ = styled.li`
  font-size: 2rem;
  height: 5rem;
  width: 100%;
  padding-left: 10%;
`;

const MenuItem = (props) => {
  let element = null;
  useEffect(() => {
    element = document.getElementById(`${props.sectionId}`);
  });

  const onClick = () => {
    window.scroll({
      behavior: "smooth",
      left: 0,
      top: element.offsetTop - 62,
    });
  };

  console.log("element: ", element);
  return <MenuItem_ onClick={onClick}>{props.sectionName}</MenuItem_>;
};

export default MenuItem;
