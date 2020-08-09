import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArtworkThumbnail from "./ArtworkThumbnail";
import axios from "axios";

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
  const API_ENDPOINT = `http://0.0.0.0:8000/concrete-artwork/`;
  const [artworks, setArtworks] = useState();
  useEffect(() => {
    axios.get(API_ENDPOINT).then((res) => setArtworks(res.data));
  }, [API_ENDPOINT]);
  console.log(artworks);

  return (
    <div className="shopping-list">
      {artworks
        ? // ? artworks.map((artwork) => console.log(artwork.images[0].image)} />)
          artworks.map((artwork) => <ArtworkThumbnail artwork={artwork} />)
        : "not found"}
      {/* <h1>
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
      </h1> */}
    </div>
  );
}

export default Shop;
