import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalProvider } from '../context/GlobalContext';
import useFirebase from '../hooks/useFirebase';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

    const { id } = useParams();
    const { individual, getIndividualData } = useFirebase();
    const { load } = GlobalProvider();

    useEffect(() => {
        getIndividualData({ id });
    }, []);

    return (
        <div>
            {load ? <h3 className='container text-center mt-3'>Cargando... </h3> : (
                <div>
                    {individual && <ItemDetail item={individual} />}
                </div>
            )}
        </div>
    );
};

export default ItemDetailContainer;