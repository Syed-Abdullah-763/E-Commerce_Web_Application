import React from "react";
import styles from "./card.module.css";

const Card = ({tittle, price, rating, imgUrl}) => {
  return (
    <>
      <div className={styles.container}>
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
