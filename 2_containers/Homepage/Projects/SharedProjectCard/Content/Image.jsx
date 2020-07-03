import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Image_ = styled.div`
  & img {
    /* background: var(--blue-1) 10% 0% repeat padding-box; */
    background-color: var(--blue-1);
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: none;
    display: block;
    border-radius: 5px;
  }
  width: 100%;
  height: 30%;

  opacity: 1;
`;

const Image = (props) => {
  const image = useSelector((state) => state.projectsReducer[props.id].image);
  return (
    <Image_>
      <img src={image} alt="project screenshot" />
    </Image_>
  );
};

export default Image;
