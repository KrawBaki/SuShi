import React from 'react';
import logo from '../img/logo/logo.svg';
import '../App.scss';

const Intro = () => {
    return (
        <div className='intro-wd'>
            <header className='intro'>
                <img className='intro-logo' src={logo} />
                <h1 className='intro-tilte'>Доставка роллов</h1>
                <p className='intro-desr'>Оперативно и вкусно</p>
            </header>
        </div>
    );
};

export default Intro;
