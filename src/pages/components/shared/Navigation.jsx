import React from "react";
import style from "./Shared.module.css";
import { FaSearch, FaHeart, FaMapMarkerAlt, FaUser } from "react-icons/fa";

const Navigation = () => {
  return (
    <div className={style["bottom-navigation"]}>
      <div className={style["nav-item"]}>
        <FaSearch className={style["nav-icon"]} />
        <span className={style["nav-label"]}>Explore</span>
      </div>
      <div className={style["nav-item"]}>
        <FaHeart className={style["nav-icon"]} />
        <span className={style["nav-label"]}>Wish List</span>
      </div>
      <div className={style["nav-item"]}>
        <FaMapMarkerAlt className={style["nav-icon"]} />
        <span className={style["nav-label"]}>Show Map</span>
      </div>
      <div className={style["nav-item"]}>
        <FaUser className={style["nav-icon"]} />
        <span className={style["nav-label"]}>Login</span>
      </div>
    </div>
  );
};

export default Navigation;
