import React from "react";
import SharedNavItem from "../../../../1_components/Layout/Navbar/Content/SharedNavItem";

const SharedNavButton = (props) => {
  return <SharedNavItem id={props.id} label={props.label} type={props.type} />;
};

export default SharedNavButton;
