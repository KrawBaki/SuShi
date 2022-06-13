import React, { useState, useEffect } from 'react';
import Context from './components/Context';
import './App.scss';
import ProductList from './components/ProductList';
import Intro from './components/Intro';
import Header from './components/Header';

function App() {
    const [products, setProducts] = useState([
        {
            id: 1,
            photo: 'https://i.ibb.co/zxZ73WB/california-hit.jpg',
            title: 'Филадельфия хит ролл',
            gram: '180г.',
            price: '300',
        },
        {
            id: 2,
            photo: 'https://i.ibb.co/rMJS6nW/california-tempura.jpg',
            title: 'Калифорния темпура',
            gram: '205г.',
            price: '250',
        },
        {
            id: 3,
            photo: 'https://i.ibb.co/HHVQQQN/zapech-california.jpg',
            title: 'Запеченый ролл ',
            gram: '182г.',
            price: '230',
        },
        {
            id: 4,
            photo: 'https://i.ibb.co/HHVQQQN/zapech-california.jpg',
            title: 'Сет Минисан',
            gram: '212г.',
            price: '180',
        },
        {
            id: 5,
            photo: 'https://i.ibb.co/zxZ73WB/california-hit.jpg',
            title: 'Сет Хокку',
            gram: '200г.',
            price: '323',
        },
        {
            id: 6,
            photo: 'https://i.ibb.co/rMJS6nW/california-tempura.jpg',
            title: 'Сет Запеченный',
            gram: '270г.',
            price: '300',
        },
    ]);
    const [amount, setAmount] = useState(0);
    const [order, setOrder] = useState([]);
    const [totalSum, setTotalSum] = useState(0);

    function removeProduct(id, product) {
        setOrder(order.filter((p) => p.id !== id));
        let removeSum = 0;
        removeSum = +product.price * product.count;
        setTotalSum((prev) => prev - removeSum);
        setAmount((prev) => prev - product.count);
    }

    function getProduct(item, count, setCount) {
        setAmount((prev) => prev + count);
        setTotalSum((prev) => prev + item.price * count);
        let isInArray = false;
        order.forEach((elem) => {
            if (elem.id === item.id) {
                elem.count += count;
                isInArray = true;
            }
        });
        if (!isInArray) setOrder([...order, { ...item, count }]);
        setCount(1);
    }

    return (
        <div className='wrapper'>
            <Context.Provider value={{ getProduct, removeProduct }}>
                <Header total={totalSum} addAmountBasket={amount} productsItem={order} />
                <div className='container'>
                    <Intro />
                    <menu className='menu'>
                        <ProductList products={products} />
                    </menu>
                </div>
            </Context.Provider>
        </div>
    );
}

export default App;
