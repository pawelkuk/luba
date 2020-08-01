import React from "react";
import { Link } from "react-router-dom";

function Shop() {
  return (
    <div>
      <h1>
        <Link to={`/shop/${1}`}>1</Link>
      </h1>
      <h1>
        <Link to={`/shop/${2}`}>2</Link>
      </h1>
    </div>
  );
}

export default Shop;
