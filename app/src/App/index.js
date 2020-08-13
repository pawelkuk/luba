import React, { useEffect, useState } from "react";

import Nav from "../Nav/index";
import About from "../About";
import Shop from "../Shop/index";
import ArtworkDetail from "../ArtworkDetail";
import Contact from "../Contact";
import Cart from "../Cart";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./style.css";
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

function App() {
  const [cart, setCart] = useStateWithLocalStorage("cart");
  const handleCartChange = (id) => {
    cart.set(id, cart.get(id) ? cart.get(id) + 1 : 1);
    setCart(new Map(cart));
  };
  return (
    <Router>
      <div className="app">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />

          <Route
            path="/shop/:id"
            render={(props) => (
              <ArtworkDetail
                {...props}
                cart={cart}
                onCartChange={handleCartChange}
              />
            )}
          />
          <Route
            path="/cart"
            render={(props) => (
              <Cart {...props} cart={cart} onCartChange={handleCartChange} />
            )}
          />
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
