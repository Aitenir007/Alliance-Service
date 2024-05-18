import React, { useState, useEffect } from 'react';
import { LuShoppingBag } from "react-icons/lu";
import Order from './Order';

const showOrders = (props) => {
  let summa = 0;
  props.orders.forEach(el => summa += Number.parseFloat(el.price));
  return (
    <div>
      {props.orders.map(el => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}
      <p className='summa'>Сумма: {new Intl.NumberFormat().format(summa)}$</p>
    </div>
  );
};

const showNothing = () => {
  return (
    <div className='empty'>
      <h2>Товара нет</h2>
    </div>
  );
};

export default function Header(props) {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  const [cartOpen, setCartOpen] = useState(false);
  const [currentContent, setCurrentContent] = useState({
    image: '/img/png2.jpg',
    text1: 'Все самое интересное',
    text2: 'Умар на час'
  });

  useEffect(() => {
    const images = [
      {
        image: '/img/png2.jpg',
        text1: 'Все самое интересное',
        text2: 'Умар на час'
      },
      {
        image: '/img/png3.jpg',
        text1: '12',
        text2: '34'
      },
      {
        image: '/img/png4.jpg',
        text1: 'Не исправна техника?',
        text2: 'Приходите к нам!'
      }
    ];
    let currentIndex = 0;

    function changeBackgroundContent() {
      currentIndex = (currentIndex + 1) % images.length;
      setCurrentContent(images[currentIndex]);
    }

    const interval = setInterval(changeBackgroundContent, 10000);
    setCurrentContent(images[currentIndex]);

    return () => clearInterval(interval);
  }, []);

  return (
    <header>
      <div>
        <span className='logo'>
          <img src='/img/g.jpg' alt='' className='logo-image' />Alliance Service
        </span>
        <ul className='nav'>
          <li className='li' onClick={scrollToBottom}>Про нас</li>
          <li className='li' onClick={scrollToBottom}>Контакты</li>
        </ul>
        <LuShoppingBag onClick={() => setCartOpen(!cartOpen)} className={`shop-card-button ${cartOpen && 'active'}`} />
        
        {cartOpen && (
          <div className='shop-cart'>
            {props.orders.length > 0 ? showOrders(props) : showNothing()}
          </div>
        )}
      </div>
      <div className='presentation' style={{ backgroundImage: `url(${currentContent.image})` }}>
        <div className='text-overlay'>
          <div className='text1'>{currentContent.text1}</div>
          <div className='text2'>{currentContent.text2}</div>
        </div>
      </div>
    </header>
  );
}
