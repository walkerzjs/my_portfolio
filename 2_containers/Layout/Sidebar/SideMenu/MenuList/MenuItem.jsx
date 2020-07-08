import React, { useEffect } from "react";
import styled from "styled-components";
import useScroll from "../../../../Shared/useScroll";

const MenuItem_ = styled.li`
  font-size: 2rem;
  height: 5rem;
  width: 100%;
  padding-left: 10%;
  cursor: pointer;
`;

const MenuItem = (props) => {
  const onClick = useScroll(props.sectionId);
  return <MenuItem_ onClick={onClick}>{props.sectionName}</MenuItem_>;
};

export default MenuItem;
