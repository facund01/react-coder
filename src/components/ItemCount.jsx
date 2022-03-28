import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartProvider } from '../context/CartContext';
import { verificaSiExisteEnCarrito } from '../helpers/index';

const ItemCount = ({ initial, stock, item }) => {

    const [count, setCount] = useState(initial);
    const { cart, addItem } = CartProvider();

    let producto = item && {
        ...item,
        count,
    };

    const onAddItem = () => {
        if (stock < 0 || count <= 0) return;
        addItem(producto);
    };

    const onAdd = () => {
        if (stock - 1 > count) {
            setCount(count + 1);
        };
    };

    const onReduce = () => {
        if (count > 1) {
            setCount(count - 1);
        };
    };

    return (
        <div className='container'>
            <div>
                {!verificaSiExisteEnCarrito(cart, item) ? (
                    <div className='row'>
                        <div className='col-4 d-flex justify-content-center'>
                            <button className='btn btn-danger mx-3' onClick={onReduce} disabled={count === initial ? true : false}>-</button>
                        </div>
                        <div className='col-4 d-flex justify-content-center fs-3'>
                            {count}
                        </div>
                        <div className='col-4 d-flex justify-content-center'>
                            <button className='btn btn-success mx-3' onClick={onAdd} disabled={count === stock ? true : false}>+</button>
                        </div>
                        <button className='btn btn-dark w-75 mx-auto my-3' onClick={() => onAddItem()}>Agregar al carrito</button>
                    </div>
                ) : (
                    <Link to={'/cart'} className='container btn btn-outline-primary rounded'>
                        <h4>Finalizar compra</h4>
                    </Link>
                )}
            </div>
        </div>
    )
};

export default ItemCount;