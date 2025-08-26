import React from "react";
import styles from "./card.module.css";
import { Link } from "react-router-dom";

const Card = ({ tittle, price, rating, imgUrl, onClick }) => {
  console.log(onClick);

  return (
    <>
      <div className={styles.container} onClick={onClick}>
        <div className={styles.top}>
          <img src={imgUrl} alt="" />
        </div>
        <div className={styles.bottom}>
          <h4>{tittle}</h4>
          <h3>{price}$</h3>
          <h5>Ratings: {rating}</h5>
        </div>
      </div>
    </>
  );
};

export default Card;
