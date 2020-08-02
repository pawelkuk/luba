import React from "react";
import Nav from "./Nav";
import About from "./About";
import Shop from "./Shop";
import ArtworkDetail from "./ArtworkDetail";
import Contact from "./Contact";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={ArtworkDetail} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}
function Home() {
  return <h1>Home page</h1>;
}
export default App;
