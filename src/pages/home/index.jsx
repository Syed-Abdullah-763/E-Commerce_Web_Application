import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Card from "../../components/card";
import Banner from "../../components/banner";
import styles from "./home.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InputField from "../../components/inputField";

const HomePage = () => {
  const [obj, setObj] = useState([]);
  const [inputVal, setInputVal] = useState("");

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

  const filtered = obj.filter(({ title }) =>
    title.toLowerCase().includes(inputVal.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <Banner />
      <InputField
        type="text"
        placeholder="Search Your Product Here.."
        onChange={(event) => {
          setInputVal(event.target.value);
        }}
        value={inputVal}
      />

      <div className={styles.cardContainer}>
        {inputVal == "" ? (
          obj.map(({ title, price, rating, image, id }) => {
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
          })
        ) : filtered.length > 0 ? (
          filtered.map(({ title, price, rating, image, id }) => {
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
          })
        ) : (
          <p className={styles.notFound}>❌ Search result not found</p>
        )}
      </div>

      <Footer />
    </>
  );
};

export default HomePage;
