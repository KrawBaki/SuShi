import React, { useState, useEffect } from 'react';
import Context from './components/Context';
import './App.scss';
import Basket from './components/Basket';
import ProductList from './components/ProductList';
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
            title: 'Запеченый ролл «Калифорния»',
            gram: '182г.',
            price: '230',
        },
        {
            id: 4,
            photo: 'https://i.ibb.co/Fm8g5Lg/philadelphia.jpg',
            title: 'Филадельфия',
            gram: '230г.',
            price: '320',
        },
    ]);
    const [order, setOrder] = useState([]);
    const [totalSum, setTotalSum] = useState(0);

    function removeProduct(id, product) {
        setOrder(order.filter((p) => p.id !== id));
        let removeSum = 0;
        removeSum = +product.price * product.count;
        setTotalSum((prev) => prev - removeSum);
    }

    function getProduct(item, count, setCount) {
        setTotalSum((prev) => prev + +item.price * count);
        setCount(1);

        let isInArray = false;
        order.forEach((elem) => {
            if (elem.id === item.id) {
                elem.count += count;
                isInArray = true;
            }
        });
        if (!isInArray) setOrder([...order, { ...item, count }]);
    }

    return (
        <Context.Provider value={{ getProduct, removeProduct }}>
            <div className='wrapper'>
                <div className='container'>
                    <Header />
                    <menu className='menu'>
                        <ProductList products={products} />
                        <Basket allSum={totalSum} productOrder={order} />
                    </menu>
                </div>
            </div>
        </Context.Provider>
    );
}

export default App;
