import React from 'react';
import logo from '../img/logo/logo.svg';
import '../App.scss';

const Header = () => {
    return (
        <header className='header'>
            <img className='header-logo' src={logo} />
            <h1 className='header-tilte'>Доставка роллов</h1>
            <p className='header-desr'>Оперативно и вкусно</p>
        </header>
    );
};

export default Header;
