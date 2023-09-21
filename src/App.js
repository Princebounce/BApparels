import React from "react";
import "./App.css";
import Home from "./component/home";
import Navbar from "./component/navbar";
import { Route, Switch } from "react-router-dom";
import About from "./component/about";
import Contact from "./component/contact";
import Product from "./component/product";
import Products from "./component/products";
import Signup from "./component/signup";
import Login from "./component/login";
import Cart from "./component/cart";
import Checkout from "./component/checkout";
import Footer from "./component/footer"; // Import the Footer component
import Privacy from "./component/privacy";

function App() {
  const handleFormSwitch = (formType) => {
    // Implement logic to switch between login and signup forms
    console.log("Switching to", formType);
  };

  return (
    <>
      <Navbar />
      <div className="content-wrapper"> 
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/products/:id" component={Product} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/privacy" component={Privacy} />
          <Route exact path="/checkout" component={Checkout} />
          <Route
            exact
            path="/signup"
            render={(props) => (
              <Signup {...props} onFormSwitch={handleFormSwitch} />
            )}
          />
          <Route
            exact
            path="/login"
            render={(props) => (
              <Login {...props} onFormSwitch={handleFormSwitch} />
            )}
          />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
