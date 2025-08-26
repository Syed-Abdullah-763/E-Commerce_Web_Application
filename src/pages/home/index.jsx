import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Card from "../../components/card";
import styles from "./home.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

const HomePage = () => {
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
          return <Card
            tittle={title}
            price={price}
            rating={rating.rate}
            imgUrl={image}
            key={id}
          />;
        })}
      </div>

      <Footer />
    </>
  );
};

export default HomePage;
