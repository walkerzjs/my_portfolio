import React, { useEffect } from "react";
import SharedNavItem from "../../../../1_components/Layout/Navbar/Content/SharedNavItem";
import useScroll from "../../../Shared/useScroll";
/**  let element = document.getElementById(`${props.sectionId}`);

  console.log("element: ", element);
  return (
    <MenuItem_
      onClick={() =>
        window.scroll({
          behavior: "smooth",
          left: 0,
          top: element.offsetTop - 61,
        })
      } */
const SharedNavButton = (props) => {
  const onClick = useScroll(props.id);
  return <SharedNavItem id={props.id} label={props.label} onClick={onClick} />;
};

export default SharedNavButton;
