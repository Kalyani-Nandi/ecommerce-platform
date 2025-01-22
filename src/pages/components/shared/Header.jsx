import React from "react";
import style from "./Shared.module.css";
import Link from "next/link";

function Header() {
  return <div className={style["header"]}>
    <Link href={"/"}>Propsoch</Link>
  </div>;
}

export default Header;
