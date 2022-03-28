import React from "react";
import { Link } from "react-router-dom";
import { CartProvider } from "../context/CartContext";
import { dameTotal } from "../helpers/index";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const CartBody = () => {
    const { cart, removeItem, clearCart } = CartProvider();

    return (
        <div className="container">
            <div className={`${cart.length > 0 && " d-flex justify-content-between aling-items-center"} px-4`}>
                <h1 className="text-center my-5">Checkout</h1>
                {cart.length > 0 && <i onClick={() => clearCart()} className="fas fa-trash-alt pointer btn my-5 fs-3 text-danger text-center"></i>}
            </div>

            {cart.length > 0 && (
                <div className="container border border-dark rounded m-lg-5 ">
                    <div className="row">
                        <div className="container col-12 col-md-6 my-4 py-2 container-scroll">
                            {cart.map((item, index) => (
                                <CartItem key={index} item={item}/>
                            ))}
                        </div>
                        <div className="col col-12 col-md-6 py-2 my-4">
                            <Checkout total={dameTotal(cart)} compra={cart} />
                        </div>
                    </div>
                </div>
            )}
            {cart.length < 1 && (
                <div className="container full-height d-flex align-items-center justify-content-center">
                    <div>
                        <h3 className="text-center">El carrito está vacío</h3>
                        <div className="my-5 d-flex">
                            <Link to="/" className="btn btn-primary w-100">
                                Volver al inicio
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartBody;