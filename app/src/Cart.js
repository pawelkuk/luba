import React, { useState, useEffect } from "react";
import Checkout from "./Checkout";
import axios from "axios";

import CartItem from "./CartItem";
function Cart({ cart }) {
  const [cartItems, setCartItems] = useState([]);
  const [artworks, setArtworks] = useState([]);
  const [checkoutSum, setCheckoutSum] = useState(0);
  useEffect(() => {
    for (const [uuid, quantity] of cart) {
      const API_ENDPOINT = `http://0.0.0.0:8000/concrete-artwork/${uuid}/`;
      axios
        .get(API_ENDPOINT)
        .then((res) => res.data)
        .then((artwork) =>
          setArtworks((old) => {
            return [...old, artwork];
          })
        );
    }
  }, [cart]);

  useEffect(() => {
    setCartItems(
      artworks.map((artwork) => (
        <CartItem
          key={artwork.id}
          quantity={cart.get(artwork.id)}
          artwork={artwork}
        />
      ))
    );
  }, [artworks, cart]);

  useEffect(() => {
    setCheckoutSum(
      artworks.reduce((prev, curr) => prev + curr.price * cart.get(curr.id), 0)
    );
  }, [artworks, cart]);

  return (
    <>
      {cartItems.length ? cartItems : "Cart is empty"}
      <div>Checkout sum price: {checkoutSum} zł</div>
      <Checkout />
    </>
  );
}
export default Cart;
