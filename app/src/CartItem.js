import React from "react";
function CartItem({ quantity, artwork }) {
  return (
    <div>
      <img src={artwork.images[0].image} alt="" />
      <div>Price: {artwork.price} zł</div>
      <div>quantity: {quantity}</div>
    </div>
  );
}

export default CartItem;
