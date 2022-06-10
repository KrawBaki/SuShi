import { logDOM } from '@testing-library/react';
import React, { useState, useEffect, useContext } from 'react';
import BasketProduct from './BasketProduct';
import Context from './Context';

const Basket = ({ productOrder, allSum }) => {
    const [value, setValue] = useState('');

    return (
        <div className='box'>
            <div className='basket'>
                <h3>Ваш заказ</h3>

                {/* Проверка корзины */}

                {productOrder.length !== 0 ? (
                    ''
                ) : (
                    <div className='box-info checkedBasket'>Корзинка пуста</div>
                )}

                {/* Добавление товаров в корзинку */}
                {productOrder.map((product) => {
                    return <BasketProduct product={product} key={product.id} />;
                })}
            </div>
            <hr />
            <div className='total'>
                <p className='delivery'>
                    Доставка: <span>бесплатно</span>
                </p>
                <p className='total-sum'>
                    Итого:
                    <span className='res'>
                        {' ' + allSum}
                        <span> ₽</span>
                    </span>
                </p>
            </div>
            <hr />
            <form className='contacts'>
                <p className='contacts-desr'>Оформить заказ</p>
                <input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className='inp'
                    placeholder='Ваш номер телефона'
                />
                <button className='contacts-btn'>Заказать</button>
            </form>
        </div>
    );
};

export default Basket;
