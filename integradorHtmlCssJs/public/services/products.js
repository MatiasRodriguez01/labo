// ============== Productos ====================
import Swal from 'sweetalert2';
import { productoActivo } from "../../main";
import { handleGetProductLocalStorage, setInLocalStorage } from "../persistence/localStorage";
import { closeModal, openModal } from "../views/modal";
import { handleGetProductsToStore, handleRenderList } from "../views/store";

//// guardar o modificar elementos:
export const acceptButton = () => {
    const buttonAccept = document.getElementById('acceptButton');
    buttonAccept.addEventListener('click', () => {
        handleSaveOrModifyElements();
    });
};

const handleSaveOrModifyElements = () => {
    const nombre = document.getElementById('nombre').value;
    const imagen = document.getElementById('img').value;
    const precio = document.getElementById('precio').value;
    const categoria = document.getElementById('categoria').value;

    let object = null;

    if (productoActivo) {
        object = {
            ...productoActivo,
            nombre,
            imagen,
            precio,
            categoria
        }
    } else {
        object = {
            id: new Date().toISOString(),
            nombre,
            imagen,
            precio,
            categoria
        }
    }

    Swal.fire({
        title: "Correcto!",
        text: "Producto guardado correctamente!",
        icon: "success"
    });

    setInLocalStorage(object);
    handleGetProductsToStore();
    closeModal();
};


// funcion eliminar elemento
export const handleDeleteProduct = () => {

    Swal.fire({
        title: "¿Desea eliminar elemento?",
        text: "Si lo eliminas sera permanenete",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, Eliminar!"
      }).then((result) => {
        if (result.isConfirmed) {
            const products = handleGetProductLocalStorage();
            const result = products.filter((el) => el.id !== productoActivo.id)
            
            //// Setear el nuevo array
            localStorage.setItem('products', JSON.stringify(result));
        
            const newProduct = handleGetProductLocalStorage();
            handleRenderList(newProduct);
            closeModal(); 
        } else {
            closeModal(); 
            
        }
      });

    
};