import React, { useState, useEffect } from "react";
import axios from "axios";
function ArtworkDetail(props) {
  const API_ENDPOINT = `http://0.0.0.0:8000/concrete-artwork/${props.match.params.id}/`;
  const [artwork, setArtwork] = useState({});
  useEffect(() => {
    axios.get(API_ENDPOINT).then((res) => setArtwork(res.data));
  }, [API_ENDPOINT]);
  const format = artwork.format;
  console.log(artwork);
  return (
    <div>
      <div>Creation date: {artwork.creation_date || "not found"}</div>
      <div>Format: {format ? format.name : "not found"}</div>
      <img src={artwork.images ? artwork.images[0].image : ""} alt="" />
      <div>Price: {artwork ? artwork.price : "not found"} zł</div>
      <div>Author: {artwork.author ? artwork.author.name : "not found"}</div>
      <div>
        Material: {artwork.material ? artwork.material.name : "not found"}
      </div>
      <div>Category: {artwork ? artwork.category : "not found"}</div>
    </div>
  );
}

export default ArtworkDetail;
