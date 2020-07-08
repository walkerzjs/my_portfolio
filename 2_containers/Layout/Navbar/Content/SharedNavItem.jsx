import React from "react";
import SharedNavItem from "../../../../1_components/Layout/Navbar/Content/SharedNavItem";

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
  let element = document.getElementById(`${props.id}`);
  const onClick = () => {
    window.scroll({
      behavior: "smooth",
      left: 0,
      top: element.offsetTop - 62,
    });
  };
  return <SharedNavItem id={props.id} label={props.label} onClick={onClick} />;
};

export default SharedNavButton;
