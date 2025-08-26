import React from "react";
import styles from "./footer.module.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>ShopEase</div>

        <ul className={styles.links}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.activeLink}` : styles.link
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.activeLink}` : styles.link
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.activeLink}` : styles.link
              }
            >
              All Products
            </NavLink>
          </li>
        </ul>

        <div className={styles.social}>
          <h4>🌐 Facebook</h4>
          <h4>🐦 Twitter</h4>
          <h4>📸 Instagram</h4>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} MyLogo. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
