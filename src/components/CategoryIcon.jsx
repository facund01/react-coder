import React from 'react';

const CategoryIcon = ({ category, size }) => {
    return (
        <div>
            {category === "xbox" ? (
                <i className={`fab fa-xbox text-success ${size}`}></i>
            ) : (
                <i className={`fab fa-playstation text-dark bg-light rounded ${size}`}></i>
            )}
        </div>
    );
};

export default CategoryIcon;