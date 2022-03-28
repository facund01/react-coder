import React, { useContext } from 'react';
import { CartProvider } from '../context/CartContext';
import CategoryIcon from './CategoryIcon';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
    return (
        <div className="w-100  full-height">
            <div className="container py-4">
                <div className='row'>
                    <div className='col-md-6'>
                        <img src={item.img2} className="img-fluid shadow-lg rounded" style={{ height: "700px", width: '700px' }} alt={item.name} />
                    </div>
                    <div className='col-md-6'>
                        <h2 className='text-center'>{item.name}</h2>
                        <h6 className='text-center fs-5 fw-light lh-base p-lg-3'>{item.description}</h6>
                        <div className="d-flex justify-content-between border border-secondary rounded px-4 align-items-center">
                            <p className="fs-4 m-0">Plataforma</p>
                            <CategoryIcon category={item.category} size="fs-3" />
                        </div>
                        <div className="d-flex justify-content-between border border-secondary rounded my-2 px-4 align-items-center">
                            <p className="fs-4 m-0">Disponibles</p>
                            <p className="m-0 text-uppercase">{item.stock}</p>
                        </div>
                        <div className="d-flex justify-content-between border border-secondary rounded my-2 px-4 align-items-center">
                            <p className="fs-4 m-0">Precio</p>
                            <p className="m-0">US$ {item.price}</p>
                        </div>
                        <div className="border border-secondary rounded py-4">
                            {<ItemCount item={item} stock={item.stock} initial={1}/>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;