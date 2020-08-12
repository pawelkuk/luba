import React from "react";
import { Link } from "react-router-dom";

function ArtworkThumbnail({ artwork }) {
  return (
    <Link to={`/shop/${artwork.id}`}>
      <img alt="" key={artwork.id} src={artwork.images[0].image} />
    </Link>
  );
}

export default ArtworkThumbnail;
