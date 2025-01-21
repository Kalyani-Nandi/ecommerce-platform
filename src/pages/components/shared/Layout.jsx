import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Navigation />
    </div>
  );
}

export default Layout;
