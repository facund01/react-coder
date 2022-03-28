export const dameTotal = (cart) => {
    let suma = 0;
    for (let i = 0; i < cart.length; i++) {
        suma = suma + cart[i].cantidad * cart[i].precio;
    };
    return suma;
};

export const verificaSiExisteEnCarrito = (cart, item) => {
    // let existe = false;
    // for (let i = 0; i < carrito.length; i++) {
    //   if (carrito[i].id === item.id) existe = true;
    // }
    // return existe;
    return cart.some((a) => a.id === item.id);
};

export const unificarItems = (cart, item) => {
    // let array = carrito;
    // for (let i = 0; i < array.length; i++) {
    //   if (array[i].id === item.id) {
    //     array[i].cantidad = item.cantidad;
    //     array[i].stock = item.stock;
    //   }
    // }
    //return array;

    return cart.map((a) => {
        if (a.id === item.id) {
            a.cantidad = item.cantidad;
            a.stock = item.stock;
        };
        return a;
    });
};


export const validarTodoLLeno = (campos) => {
    // let invalid = false;
    // campos.map((campo) => campo === "" ? invalid = true : invalid = false)
    // return invalid
    return campos.some((campo) => campo === "");
};