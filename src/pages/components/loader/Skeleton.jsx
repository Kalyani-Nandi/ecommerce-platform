// SkeletonLoader.js
import React from "react";
import style from "./Skeleton.module.css";

const SkeletonLoader = () => {
    return (
        <div className={style.skeleton}>
            <div className={style.skeletonImage}></div>
            <div className={style.skeletonText}></div>
            <div className={style.skeletonText}></div>
        </div>
    );
};

export default SkeletonLoader;
