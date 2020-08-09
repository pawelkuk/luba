import React from "react";

const AddToCart = ({ cart, onCartChange, id }) => {
  return (
    <button type="button" onClick={() => onCartChange(id)}>
      Add to cart {cart.get(id)}
    </button>
  );
};

export default AddToCart;
