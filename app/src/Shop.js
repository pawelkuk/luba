import React from "react";
import { Link } from "react-router-dom";
import ArtworkThumbnail from "./ArtworkThumbnail";
function Shop() {
  return (
    <div>
      <h1>
        <Link to={`/shop/${1}`}>
          <ArtworkThumbnail />
        </Link>
      </h1>
      <h1>
        <Link to={`/shop/${2}`}>
          <ArtworkThumbnail />
        </Link>
      </h1>
    </div>
  );
}

export default Shop;
