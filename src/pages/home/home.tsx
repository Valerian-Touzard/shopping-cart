import React, { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchListOfProducts();
  },[]);

  const fetchListOfProducts = async () => {
    setLoading(true);
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    if (data) {
      setLoading(false);
      setProducts(data);
    }
  };
  return (
    <div>
      {loading ? 
        <div className="min-h-screen w-full flex justify-center items-center">
          <Circles height={'120'} width={'120'} color="rgb(127,29,29)" visible={true} />
        </div>
      : null}
    </div>
  );
};

export default Home;
