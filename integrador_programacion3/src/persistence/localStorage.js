//==========LOCALSTORAGE=========
//traer productos localstorage
export const handleGetProductLocalStorage = () => {
    const products = JSON.parse(localStorage.getItem("products"));
    if (products) {
      return products;
    } else {
      return [];
    }
  };
  //guardarEn localStorage
  //recibir un producto
  export const setInLocalStorage = (productIn) => {
    if (productIn) {
      //traer los elementos
      let producsInLocal = handleGetProductLocalStorage();
      const existingIndex = producsInLocal.findIndex(
        (productsLocal) => productsLocal.id === productIn.id
      );
      
      //verificar si el elemento existe
      if (existingIndex !== -1) {
        //si existe debe reemplazarse
        producsInLocal[existingIndex] = productIn;
      } else {
        //si no agregarse
        producsInLocal.push(productIn);
      }
      //setear el nuevo array
      localStorage.setItem("products", JSON.stringify(producsInLocal));
    }
  };