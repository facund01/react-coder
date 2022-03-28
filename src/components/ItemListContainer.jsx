import React, { useEffect } from 'react';
import { GlobalProvider } from '../context/GlobalContext';
import useFirebase from '../hooks/useFirebase';
import ItemList from './ItemList';

const ItemListContainer = () => {

    const { items, getData } = useFirebase();
    const { load } = GlobalProvider();

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            {load ? <h3 className='container text-center mt-3'>Cargando... </h3> : (
                <div className="bg-venom full-height">
                    <ItemList data={items} />
                </div>
            )}
        </div>
    );
};

export default ItemListContainer;