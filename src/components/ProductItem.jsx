import React, { useState, useContext } from 'react';
import '../App.scss';
import Context from './Context';

const ProductItem = ({ product }) => {
    const { getProduct } = useContext(Context);
    const [count, setCount] = useState(1);

    const decrement = () => {
        if (count <= 1) {
            setCount(1);
        } else {
            setCount(count - 1);
        }
    };

    const increment = () => {
        setCount(count + 1);
    };
    return (
        <div className='product-item'>
            <div className='product-ww'>
                <img className='product-img' src={product.photo} />
                <h2 className='product-title'>{product.title}</h2>
            </div>
            <p className='product-amountInBox'>6 шт.</p>
            <div className='product-computed'>
                <div className='product-add'>
                    <div onClick={decrement} className='product-minus'>
                        -
                    </div>
                    <div className='product-amount'>{count}</div>
                    <div onClick={increment} className='product-plus'>
                        +
                    </div>
                </div>
                <div className='product-info'>
                    <p className='product-gramm'>{product.gram}</p>
                    <p className='product-price'>{product.price} ₽</p>
                </div>
            </div>
            <button onClick={() => getProduct(product, count, setCount)} className='btn'>
                + в корзинку
            </button>
        </div>
    );
};

export default ProductItem;
