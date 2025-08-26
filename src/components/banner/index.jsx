import React from "react";
import styles from "./Banner.module.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Welcome to ShopCart</h1>
        <p className={styles.subtitle}>
          Discover the latest trends and exclusive deals today!
        </p>
      </div>
    </div>
  );
};

export default Banner;