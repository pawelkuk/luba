import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [ping, setPing] = useState("ping");
  useEffect(() => {
    axios
      .get("http://0.0.0.0:8000/ping/")
      .then((res) => res.data)
      .then((data) => setPing(data.message));
  }, []);

  return (
    <div>
      <p>{ping}</p>
    </div>
  );
}

export default App;
