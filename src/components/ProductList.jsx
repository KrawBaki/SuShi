import React from 'react';
import ProductItem from './ProductItem';
import '../App.scss';

const ProductList = (props) => {
    return (
        <div className='products'>
            {props.products.map((product) => {
                return <ProductItem key={product.id} product={product} />;
            })}
        </div>
    );
};

export default ProductList;
