
import { renderCategories } from "./public/services/categories";
import { acceptButton } from "./public/services/products";
import { handleSearchProductByName } from "./public/services/searchBar";
import { cancelButton, openModal } from "./public/views/modal";
import { handleGetProductsToStore } from "./public/views/store";
import "./style.css"

// ================= HEADER ===================

export const buttonAddElement = () => {
  // el boton de header que dice agregar elemento
  const buttonAdd = document.getElementById('buttonAddElement');
  buttonAdd.addEventListener('click', () => {
    openModal()
  });
}

// botton search
const buttonSearch = document.getElementById('buttonSearch');
buttonSearch.addEventListener('click', () => {
  handleSearchProductByName()
})

/// ============= APLICACION ==================


export let categoriaActiva = null;

export const setCategoriaActiva = (categoriaIn) => {
  categoriaActiva = categoriaIn;
}

export let productoActivo = null;

export const setProductoActivo = (productoIn) => {
  productoActivo = productoIn;
}

handleGetProductsToStore();
renderCategories();

// ============= PRODUCTOS ==================
// funcion llama al boton agregar elemento
buttonAddElement();

// button cancel
cancelButton();

// button accept
acceptButton()


