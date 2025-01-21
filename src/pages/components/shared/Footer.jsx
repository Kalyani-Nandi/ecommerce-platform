import React from "react";
import { FaHeart } from "react-icons/fa";
import styles from "./Shared.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Made with <FaHeart style={{ color: "red", verticalAlign: "middle" }} />{" "}
        by the team at <strong>PropSoch</strong>
      </p>
      <p>&copy; {new Date().getFullYear()} PropSoch. All rights reserved.</p>
      <p>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#007bff", textDecoration: "none" }}
        >
          Visit Us
        </a>
      </p>
    </footer>
  );
}

export default Footer;
