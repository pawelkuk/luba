import React, { useState, useEffect } from "react";
import Checkout from "./Checkout";
import axios from "axios";

import CartItem from "./CartItem";
function Cart({ cart }) {
  const [cartItems, setCartItems] = useState([]);
  const [checkoutSum, setCheckoutSum] = useState(0);
  useEffect(() => {
    for (const [uuid, quantity] of cart) {
      const API_ENDPOINT = `http://0.0.0.0:8000/concrete-artwork/${uuid}/`;
      axios
        .get(API_ENDPOINT)
        .then((res) => res.data)
        .then((artwork) =>
          setCartItems((old) => {
            setCheckoutSum((oldPrice) => oldPrice + Number(artwork.price));
            return [
              ...old,
              <CartItem
                key={artwork.id}
                quantity={quantity}
                artwork={artwork}
              />,
            ];
          })
        );
    }
  }, [cart]);
  return (
    <>
      {cartItems}
      <div>Checkout sum price: {checkoutSum} zł</div>
      <Checkout />
    </>
  );
}
export default Cart;
