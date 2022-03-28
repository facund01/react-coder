import React from 'react';
import { CartProvider } from '../context/CartContext';

const CartItem = ({ item }) => {

    const { removeItem } = CartProvider();

    return (
        <div className="card mb-3 border border-dark" style={{ maxWidth: "750px" }}>
            <div className="row g-0">
                <div className="col-md-5 d-flex align-items-center p-2">
                    <img src={item.img} className="rounded w-100 h-70" alt="..." />
                </div>
                <div className="col-md-7">
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <div className="row my-2 border rounded">
                            <div className="col-7">Cantidad</div>
                            <div className="col-5">{item.count}</div>
                        </div>
                        <div className="row my-2 border rounded">
                            <div className="col-7">Precio</div>
                            <div className="col-5">US$ {item.price}</div>
                        </div>
                        <button onClick={() => removeItem(item.id)} className="btn btn-danger mt-2 w-100">
                            <i className="fas fa-trash-alt mx-3"></i>
                            Eliminar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;