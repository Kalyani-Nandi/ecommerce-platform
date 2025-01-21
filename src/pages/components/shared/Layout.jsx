import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import styles from "./Shared.module.css";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        {children}
        <Footer />
      </main>
      <Navigation />
    </div>
  );
}

export default Layout;
