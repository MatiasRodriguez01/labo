
// RENDER

import { categoriaActiva } from "../../main";
import { handleGetProductLocalStorage } from "../persistence/localStorage";
import { handleRenderList } from "../views/store";

const handleFilterProductsByCategory = (categoriaIn) => {
    const products = handleGetProductLocalStorage();

    switch(categoriaIn) {
        case categoriaActiva:
            handleRenderList(products);
            break;
        case "todo":
            handleRenderList(products);
            break;
        case "Hamburguesas":
        case "Papas":
        case "Gaseosas":
            const result = products.filter((el) => el.categoria === categoriaIn)
            handleRenderList(result);
            break;
        case "mayorPrecio":
            const resultMayorPrecio = products.sort((a, b) => b.precio - a.precio)
            handleRenderList(resultMayorPrecio);
            break;
        case "menorPrecio":
            const resultMenorPrecio = products.sort((a, b) => a.precio - b.precio)
            handleRenderList(resultMenorPrecio);
            break;
        default:
            break;
    };
};



// funcion renderCategorias
export const renderCategories = () => {
    const ulList = document.getElementById('listFilter')
    ulList.innerHTML = `
    <li id="todo">Todos los productos</li>
    <li id="Hamburguesas">Hamburguesas</li>
    <li id="Papas">Papas</li>
    <li id="Gaseosas">Gaseosas</li>
    <li id="mayorPrecio">Mayor Precio</li>
    <li id="menorPrecio">Menor Precio</li>
    `
    const liElements = ulList.querySelectorAll('li');
    liElements.forEach((liElement) => {
        liElement.addEventListener('click', () => {
            handleClick(liElement)
        });
    });

    const handleClick = (elemento) => {
        handleFilterProductsByCategory(elemento.id);
        liElements.forEach((el) => {
            if (el.classList.contains('liActive')){
                el.classList.remove('liActive')
            } else {
                if (elemento === el){
                    el.classList.add('liActive')
                }
            }
        })
    }
};
