import React from "react";
import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import { Route, Switch } from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";
import Product from "./component/Product";
import Products from "./component/Products";
import Signup from "./component/Signup";
import Login from "./component/Login";
import Cart from "./component/Cart";
import Checkout from "./component/Checkout";
import Footer from "./component/Footer"; // Import the Footer component
import Privacy from "./component/Privacy";

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
