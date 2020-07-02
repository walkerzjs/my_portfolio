import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar/Sidebar";
import axios from "axios";
// import { Main } from "../../1_components/layout/layout";
const Layout = (props) => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
