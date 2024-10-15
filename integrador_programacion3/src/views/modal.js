//=========== POPUP =================

import { productoActivo, setproductoActivo } from "../../main";

//import { handleDeleteProduct } from "../services/products";

const cancelButton = document.getElementById('cancelButton')
cancelButton.addEventListener('click', () => {
    closeModal();
})



/// funciones de abrir y cerrar 

export const openModal = () => {
    const modal = document.getElementById('modalPopUP');
    modal.style.display = 'flex';
    

    if (productoActivo) {
        const nombre = document.getElementById('nombre'),
        img = document.getElementById('img'),
        precio = document.getElementById('precio'),
        categories = document.getElementById('categoria');

        img.value = productoActivo.img;
        categories.value = productoActivo.categories;
        precio.value = productoActivo.precio;
        nombre.value = productoActivo.nombre;
    }
}



export const closeModal = () => {
  const modal = document.getElementById('modalPopUP')
  modal.style.display = 'none'
  setproductoActivo(null);
  resetModal();
}

const resetModal = () => {
  const nombre = document.getElementById('nombre'),
    img = document.getElementById('img'),
    precio = document.getElementById('precio'),
    categories = document.getElementById('categoria')

  img.value = "";
  categories.value = "Selecccione un categoria";
  precio.value = "";
  nombre.value = "";
}

