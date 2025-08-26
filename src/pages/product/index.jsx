import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import styles from "./product.module.css";
import axios from "axios";
import { data, useParams } from "react-router-dom";

const Product = () => {
  const params = useParams();

  const [singleProduct, setSingleProduct] = useState({});
  const [rating, setRating] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${params.id}`
      );

      setRating(response.data.rating);
      setSingleProduct(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Navbar />

      <div className={styles.container}>
        <div className={styles.left}>
          <img src={singleProduct.image} alt="" />
        </div>
        <div className={styles.right}>
          <h1>{singleProduct.title}</h1>
          <h3>
            <b>Description</b>: {singleProduct.description}
          </h3>
          <h1>{singleProduct.price}$</h1>
          <h3>
            Ratings: {rating.rate} {`(${rating.count})`}
          </h3>
          <button>Buy Now</button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Product;
