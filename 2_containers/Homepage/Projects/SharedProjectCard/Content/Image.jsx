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
    object-position: 50% 0%;
    border: none;
    display: block;
    border-radius: 5px;
  }
  width: 100%;
  height: 30%;

  opacity: 1;
`;

const Image = (props) => {
  const { image, title } = useSelector(
    (state) => state.projectsReducer[props.id]
  );
  const address = useSelector(
    (state) => state.projectsReducer[props.id].website
  );
  return (
    <Image_>
      <a
        href={address}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Link to ${title} project website`}
      >
        <img src={image} alt={`Screenshot of ${title} project website`} />
      </a>
    </Image_>
  );
};

export default Image;
