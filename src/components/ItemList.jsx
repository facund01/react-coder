import React from 'react';
import Item from './Item';

const ItemList = ({ data }) => {
    return (
        <div className="row p-2 p-lg-5 full-height align-items-center">
            {data && data.map((d, i) => <Item key={i} item={d} />)}
        </div>
    );
};

export default ItemList;