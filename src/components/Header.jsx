import React, { useState } from 'react';
import '../App.scss';
import logo from '../img/logo/logo.svg';
import basketLogo from '../img/logo/2849824-basket-buy-market-multimedia-shop-shopping-store_107977.png';
import ProductBasket from './ProductBasket';

const Header = ({ total, addAmountBasket, productsItem }) => {
    const [value, setValue] = useState('');
    const [modalStatus, setModalStatus] = useState(false);

    function showBasket() {
        setModalStatus(!modalStatus);
    }
    return (
        <header className='header'>
            <div className='header-logo'>
                <img width='30px' height='30px' src={logo} />
                <h2> SuShi</h2>
            </div>
            <div onClick={showBasket} className='basket'>
                <span>{addAmountBasket}</span>
                <img src={basketLogo} width='35px' height='35px' />
            </div>

            <div className={modalStatus ? 'fixed-overlay active' : 'fixed-overlay'}>
                <div className='modal'>
                    <div className='modal_container'>
                        <p onClick={() => setModalStatus(false)} className='close-popup'>
                            x
                        </p>
                        <h4 className='basket-title'>Ваш заказ</h4>
                        <div className='modal-info'>Thanks you!!!</div>
                        <div className='products-list'>
                            {productsItem.map((productItem) => {
                                return <ProductBasket product={productItem} key={productItem.id} />;
                            })}
                        </div>
                        <div className='total'>
                            <p className='delivery'>
                                Доставка: <span>бесплатно</span>
                            </p>
                            <p className='total-sum'>
                                Итого:
                                <span className='res'>
                                    <span>{total} ₽</span>
                                </span>
                            </p>
                        </div>
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
                </div>
            </div>
        </header>
    );
};

export default Header;
