import React from "react";
import { Link } from "react-router-dom";

function ArtworkThumbnail({ artwork }) {
  return (
    <div>
      <Link to={`/shop/${artwork.id}`}>
        <img key={artwork.id} src={artwork.images[0].image} />
      </Link>
    </div>
  );
}

export default ArtworkThumbnail;
