import React from 'react';
import { Link } from 'react-router-dom';
import CategoryIcon from './CategoryIcon';

const Item = ({ item }) => {
    return (
        <div className="col-sm-12 col-md-6 col-lg-4 my-4">
            <div className="card border-dark">
                <img src={item.img} className="card-img-top img-fluid" style={{ height: "300px" }} alt={item.name} />
                <div className="card-body">
                    <h6 className="card-title fs-4 text-center mb-3">{item.name}</h6>
                    <div className="row my-2 border rounded d-flex aling-items-center">
                        <div className="col-10">
                            <p className="fs-5 m-0 p-0">Disponibles</p>
                        </div>
                        <div className="col-2">
                            <span className="ml-3 fs-5 col-6">{item.stock}</span>
                        </div>
                    </div>
                    <div className="row my-2 border rounded d-flex aling-items-center">
                        <div className="col-10">
                            <p className="fs-5 m-0 p-0">Consola</p>
                        </div>
                        <div className="col-2">
                            <span className="ml-3 fs-5 col-6">
                                <CategoryIcon category={item.category} />
                            </span>
                        </div>
                    </div>
                    <div className="row my-2 border rounded d-flex aling-items-center">
                        <div className="col-10">
                            <p className="fs-5 m-0 p-0">Precio</p>
                        </div>
                        <div className="col-2">
                            <span className="ml-3 fs-6 col-6 text-right">US$ {item.price}</span>
                        </div>
                    </div>
                    <Link to={`/item/${item.id}`} className="btn btn-primary w-100">Ver más</Link>
                </div>
            </div>
        </div>
    );
};

export default Item;