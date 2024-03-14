import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootStateStore } from "../../store";
import { Product } from "../home/home";

const Cart = () => {

  const [total, setTotal] = useState(0) 

  const {cart} = useSelector((state : RootStateStore) => state);

  useEffect(() => {
    setTotal(cart.reduce((acc: number, curr: Product) => acc + curr.price, 0))
  }, [])

  console.log(cart, total);
  

  return <div>Cart</div>;
};

export default Cart;
