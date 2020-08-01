import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "./Nav";
import About from "./About";
import Shop from "./Shop";
import Artwork from "./Artwork";
import Contact from "./Contact";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  // const [ping, setPing] = useState("ping");
  // useEffect(() => {
  //   axios
  //     .get("http://0.0.0.0:8000/ping/")
  //     .then((res) => res.data)
  //     .then((data) => setPing(data.message));
  // }, []);

  return (
    <Router>
      <div className="app">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={Artwork} />
          <Route path="/contact" component={Contact} />
        </Switch>
        {/* <p>{ping}</p> */}
      </div>
    </Router>
  );
}
function Home() {
  return <h1>Home page</h1>;
}
export default App;
