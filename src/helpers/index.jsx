export const dameTotal = (cart) => {
    let suma = 0;
    for (let i = 0; i < cart.length; i++) {
        suma = suma + cart[i].cantidad * cart[i].precio;
    };
    return suma;
};

export const verificaSiExisteEnCarrito = (cart, item) => {
    return cart.some((a) => a.id === item.id);
};

export const unificarItems = (cart, item) => {
    return cart.map((a) => {
        if (a.id === item.id) {
            a.cantidad = item.cantidad;
            a.stock = item.stock;
        };
        return a;
    });
};


export const validarTodoLLeno = (campos) => {
    return campos.some((campo) => campo === "");
};