import "./style.css";
import products from "./api/products.json";
import { showProductsContainer } from "./homeProductCards";
import { homeQuantityToggle } from "./homeQuantityToggle";


// Defining a function that takes an array of products as an input
showProductsContainer(products);

