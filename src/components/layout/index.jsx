import React from "react";
import Content from "../content";
import Sidebar from "../sidebar";

const Layout = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
      }}
    >
      <Sidebar />
      <Content />
    </div>
  );
};

export default Layout;
