import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArtworkThumbnail from "./ArtworkThumbnail";
const useStateWithLocalStorage = (localStorageKey) => {
  const [value, setValue] = useState(
    new Map(JSON.parse(localStorage.getItem(localStorageKey))) || new Map()
  );

  useEffect(() => {
    localStorage.setItem(
      localStorageKey,
      JSON.stringify(Array.from(value.entries()))
    );
  }, [value, localStorageKey]);

  return [value, setValue];
};

const AddToCart = ({ cart, onCartChange, id }) => {
  return (
    <button type="button" onClick={() => onCartChange(id)}>
      Add to cart {cart.get(id)}
    </button>
  );
};
function Shop() {
  const [cart, setCart] = useStateWithLocalStorage("cart");

  const handleCartChange = (id) => {
    cart.set(id, cart.get(id) ? cart.get(id) + 1 : 1);
    setCart(new Map(cart));
  };
  return (
    <div>
      <h1>
        <Link to={`/shop/${1}`}>
          <ArtworkThumbnail />
        </Link>
        <AddToCart cart={cart} onCartChange={handleCartChange} id={1} />
      </h1>
      <h1>
        <Link to={`/shop/${2}`}>
          <ArtworkThumbnail />
        </Link>
        <AddToCart cart={cart} onCartChange={handleCartChange} id={2} />
      </h1>
    </div>
  );
}

export default Shop;
