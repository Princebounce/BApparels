// Check if there is a "cart" item in the local storage and parse it to get the cart data.
// If no cart data is found in local storage, initialize an empty cart array.
const cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];

// The reducer function for handling the cart state and managing cart items.
const handleCart = (state = cart, action) => {
  const product = action.payload;

  switch (action.type) {
    case "ADDITEM":
      // Check if the product already exists in the cart by matching its ID.
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        // If the product exists, increase its quantity by 1.
        const updatedCart = state.map((x) => (x.id === product.id ? { ...x, qty: x.qty + 1 } : x));
        // Save the updated cart to local storage and return the updated cart.
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      } else {
        // If the product is new, add it to the cart with a quantity of 1.
        const updatedCart = [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
        // Save the updated cart to local storage and return the updated cart.
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      }

    case "DELITEM":
      // Check if the product exists in the cart.
      const exist1 = state.find((x) => x.id === product.id);
      if (exist1.qty === 1) {
        // If the product quantity is 1, remove it from the cart.
        const updatedCart = state.filter((x) => x.id !== exist1.id);
        // Save the updated cart to local storage and return the updated cart.
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      } else {
        // If the product quantity is greater than 1, decrease its quantity by 1.
        const updatedCart = state.map((x) => (x.id === product.id ? { ...x, qty: x.qty - 1 } : x));
        // Save the updated cart to local storage and return the updated cart.
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      }

    default:
      // If the action type is not recognized, return the current state (unchanged).
      return state;
  }
};

// Export the handleCart reducer function.
export default handleCart;
