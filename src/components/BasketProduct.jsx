import React, { useState, useContext, useEffect } from 'react';
import Context from './Context';
import '../App.scss';

const BasketProduct = ({ product, checksTotalSum }) => {
    const { removeProduct } = useContext(Context);

    return (
        <div className='basket-product'>
            <img
                className='basket-photo'
                style={{ width: '100px', height: '100px' }}
                src={product.photo}
            />
            <div className='basket-info'>
                <p className='basket-title'>{product.title}</p>
                <p className='basket-gramm'>6 шт. / {product.gram}</p>
                <p className='basket-price'>{product.price} ₽</p>
                <p className='basket-amount'>
                    {product.count} шт. {/* Удаление товаров из корзинки */}
                    <button
                        onClick={() => removeProduct(product.id, product)}
                        className='basket-btn'>
                        Удалить
                    </button>
                </p>
            </div>
        </div>
    );
};

export default BasketProduct;
