import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addCart, delCart, clearCart } from "../redux/action";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(addCart(item));
  };

  const handleDel = (item) => {
    dispatch(delCart(item));
  };

  const renderCartItems = () => {
    if (state.length === 0) {
      return (
        <div className="empty-cart-container">
          <h3>Your Cart is Empty</h3>
        </div>
      );
    }

    return state.map((product) => (
      <div key={product.id} className="cart-item-container">
        <div className="cart-item-image">
          <img
            src={product.image}
            alt={product.title}
            height="200px"
            width="180px"
          />
        </div>
        <div className="cart-item-details">
          <h3>{product.title}</h3>
          <p className="lead fw-bold">
            {product.qty} X ${product.price} = $
            {product.qty * product.price}
          </p>
          <div className="button-container">
            <button
              className="quantity-button"
              onClick={() => handleDel(product)}
            >
              <i className="fa fa-minus"></i>
            </button>
            <button
              className="quantity-button"
              onClick={() => handleAdd(product)}
            >
              <i className="fa fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
    ));
  };

  const renderButtons = () => {
    if (state.length === 0) {
      return null;
    }

    return (
      <div className="checkout-button-container">
        <NavLink to="/checkout" className="checkout-button">
          Proceed to Checkout
        </NavLink>
        <button className="empty-button" onClick={() => dispatch(clearCart())}>
          Empty Cart
        </button>
      </div>
    );
  };

  return (
    <div className="cart-container">
      {renderCartItems()}
      {renderButtons()}
    </div>
  );
};

export default Cart;
