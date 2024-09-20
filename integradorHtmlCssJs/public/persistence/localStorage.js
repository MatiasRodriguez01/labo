///====================== LOCALSTORAGE ========================

export const handleGetProductLocalStorage = () => {
    const products = JSON.parse(localStorage.getItem('products'));
    if (products) {
        return products;
    } else {
        return []
    }
};

// Traer los elementos
// Recibir un producto
export const setInLocalStorage = (productIn) => {
    if (productIn) {
        let productsInLocal = handleGetProductLocalStorage();

        const existingIndex = productsInLocal.findIndex((productsLocal) =>
            productsLocal.id === productIn.id
        );
        // Verificar si el elemento exite
        if (existingIndex !== -1) {
            // si existe debe remplazarse
            productsInLocal[existingIndex] = productIn;
        } else {
            // si no agregarse
            productsInLocal.push(productIn);
        }
        //// Setear el nuevo array
        localStorage.setItem('products', JSON.stringify(productsInLocal));
    }
}