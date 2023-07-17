const cart = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const handleCart = (state = cart, action) => {
  const product = action.payload;

  switch (action.type) {
    case "ADDITEM":
      // check if product exists
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        // increase qty
        const updatedCart = state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      } else {
        const updatedCart = [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      }

    case "DELITEM":
      const exist1 = state.find((x) => x.id === product.id);
      if (exist1.qty === 1) {
        const updatedCart = state.filter((x) => x.id !== exist1.id);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      } else {
        const updatedCart = state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      }

    default:
      return state;
  }
};

export default handleCart;
