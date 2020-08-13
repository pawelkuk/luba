import React, { useEffect, useState } from "react";
import ArtworkThumbnail from "../ArtworkThumbnail";
import axios from "axios";
import "./style.css";

function Shop() {
  const API_ENDPOINT = `http://0.0.0.0:8000/concrete-artwork/`;
  const [artworks, setArtworks] = useState();
  useEffect(() => {
    axios.get(API_ENDPOINT).then((res) => setArtworks(res.data));
  }, [API_ENDPOINT]);

  return (
    <ul className="shopping-list">
      {artworks
        ? artworks.map((artwork) => (
            <ArtworkThumbnail key={artwork.id} artwork={artwork} />
          ))
        : "not found"}
    </ul>
  );
}

export default Shop;
