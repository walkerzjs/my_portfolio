import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar/Index";
import styled from "styled-components";
import axios from "axios";

const Layout = (props) => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
