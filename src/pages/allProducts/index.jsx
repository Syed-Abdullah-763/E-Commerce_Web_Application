import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Card from "../../components/card";
import styles from "./allproducts.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const [obj, setObj] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");

      setObj(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Navbar />

      <div className={styles.cardContainer}>
        {obj.map(({ title, price, rating, image, id }) => {
          return (
            <Link className={styles.link} to={`/product/${id}`}>
              <Card
                tittle={title}
                price={price}
                rating={rating.rate}
                imgUrl={image}
                key={id}
              />
            </Link>
          );
        })}
      </div>

      <Footer />
    </>
  );
};

export default AllProducts;
