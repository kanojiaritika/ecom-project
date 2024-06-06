import products from "./api/products.json";
import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS";
import { getCartProductFromLS } from "./getCartProducts";
import { incrementDecrement } from "./incrementDecrement";
import { removeProdFromCart } from "./removeProdFromCart";
import { updateCartProductTotal } from "./updateCartProductTotal";

let cartProducts = getCartProductFromLS();

let filterProducts = products.filter((currProd) => {
  return cartProducts.some((currElem) => currElem.id === currProd.id);
});

console.log(filterProducts);

// TO UPDATE THE addToCart Page
const cartElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate");

const showCartProduct = () => {
  filterProducts.forEach((currProd) => {
    const { category, id, image, name, stock, price } = currProd;

    let productClone = document.importNode(templateContainer.content, true);

    const lSActualData = fetchQuantityFromCartLS(id, price);

    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productQuantity").textContent =
      lSActualData.quantity;
    productClone.querySelector(".productPrice").textContent =
      lSActualData.price;


    productClone.querySelector(".stockElement").addEventListener("click", () => incrementDecrement(event, id, stock, price));

    productClone
      .querySelector(".remove-to-cart-button")
      .addEventListener("click", () => removeProdFromCart(id));

    cartElement.appendChild(productClone);
  });
};

showCartProduct();
updateCartProductTotal();
