import { getCartProductFromLS } from "./getCartProducts";
import { showToast } from "./showToast";

import { updateCartValue } from "./updateCartValue";

export const removeProdFromCart = (id) => {
  let cartProducts = getCartProductFromLS();
  cartProducts = cartProducts.filter((currProd) => currProd.id != id);

  localStorage.setItem("cartProductsLS", JSON.stringify(cartProducts));

  let removeDiv = document.getElementById(`card${id}`);
  if (removeDiv) {
    removeDiv.remove();

    // SHOW TAST WHEN PRODUCT ADDED TO CART
    showToast("delete", id);
  }

  updateCartValue(cartProducts);
};
