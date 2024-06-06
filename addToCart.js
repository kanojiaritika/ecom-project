import { getCartProductFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

getCartProductFromLS();

export const addToCart = (event, id, stock) => {
  let arrLocalStorageProduct = getCartProductFromLS();

  const currProdElem = document.querySelector(`#card${id}`);
  let quantity = currProdElem.querySelector(".productQuantity").innerText;
  let price = currProdElem.querySelector(".productPrice").innerText;
  // console.log(quantity, price);
  price = price.replace("Rs. ", "");

  let existingProd = arrLocalStorageProduct.find(
    (curProd) => curProd.id === id
  );

  if (existingProd && quantity > 1) {
    quantity = Number(existingProd.quantity) + Number(quantity);
    price = Number(price * quantity);
    let updatedCart = { id, quantity, price };

    updatedCart = arrLocalStorageProduct.map((curProd) => {
      return curProd.id === id ? updatedCart : curProd;
    });

    console.log(updatedCart);

    localStorage.setItem(
      "cartProductLS",
      JSON.stringify(arrLocalStorageProduct)
    );

    // Show Toast
    showToast("add", id);
  }

  if (existingProd) {
    return false;
  }

  price = Number(price * quantity);
  quantity = Number(quantity);

  arrLocalStorageProduct.push({ id, quantity, price });

  localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

  updateCartValue(arrLocalStorageProduct);

  // Show Toast
  showToast("add", id);
};
