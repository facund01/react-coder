import { createContext, useContext, useState } from "react";
import { unificarItems, verificaSiExisteEnCarrito } from "../helpers/index";
import { GlobalProvider } from "./GlobalContext";

const CartContext = createContext();

export const CartProvider = () => useContext(CartContext);

const CartState = ({ children }) => {

    const { setMostrarAlerta } = GlobalProvider();

    const [cart, setCart] = useState([]);

    const addItem = (item) => {
        if (verificaSiExisteEnCarrito(cart, item)) {
            setCart(unificarItems(cart, item));
            setMostrarAlerta(true);
            return;
        };
        setCart([...cart, item]);
        setMostrarAlerta(true);
    };

    const removeItem = (id) => {
        let newCart = cart.filter((e) => e.id !== id);
        setCart(newCart);
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addItem, clearCart, removeItem }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartState;