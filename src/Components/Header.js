import React, { useState, useEffect, useRef } from 'react';
import { LuShoppingBag } from "react-icons/lu";
import Order from './Order';
import Categories from './Categories';

const showOrders = (props) => {
  let summa = 0;
  props.orders.forEach(el => summa += Number.parseFloat(el.price) * el.quantity);
  return (
    <div>
      {props.orders.map(el => (
        <Order
          onDelete={props.onDelete}
          key={el.id}
          item={el}
          onQuantityChange={props.onQuantityChange}
        />
      ))}
     <p className='summa'>Сумма: {summa.toLocaleString('ru-RU', { minimumFractionDigits: 3 })}сом</p>
      <li className='order-now' onClick={props.onOrderNowClick}>Оформить заказ</li>
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
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [orderFormOpen, setOrderFormOpen] = useState(false);
  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const [presentationImages] = useState([
    { image: '/img/png5.jpg', text1: 'Все самое интересное', text2: 'У нас на сайте' },
    { image: '/img/png8.jpg', text1: 'Все для ', text2: 'кассы' },
    { image: '/img/png7.jpg', text1: 'Неисправна техника?', text2: 'Приходите к нам!' },
    { image: '/img/png6.jpg', text1: '', text2: '' },
    { image: '/img/png8.jpg', text1: '', text2: '' }
  ]);

  const [orderDetails, setOrderDetails] = useState({
    name: '',
    address: '',
    phone: '',
    deliveryMethod: 'Курьер'
  });

  const sidebarRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContentIndex((prevIndex) => (prevIndex + 1) % presentationImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [presentationImages.length]);

  const handleNextSlide = () => {
    setCurrentContentIndex((prevIndex) => (prevIndex + 1) % presentationImages.length);
  };

  const handlePrevSlide = () => {
    setCurrentContentIndex((prevIndex) => (prevIndex - 1 + presentationImages.length) % presentationImages.length);
  };

  const handleOrderNowClick = () => {
    setOrderFormOpen(true);
    setCartOpen(false);
  };

  const handleOrderFormClose = () => {
    setOrderFormOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails({ ...orderDetails, [name]: value });
  };

  const handleOrderSubmit = (e) => {
    e.preventDefault();

    let summa = 0;
    props.orders.forEach(el => summa += Number.parseFloat(el.price) * el.quantity);

    let message = `Имя: ${orderDetails.name}\nАдрес: ${orderDetails.address}\nТелефон: ${orderDetails.phone}\nСпособ доставки: ${orderDetails.deliveryMethod}\n\nТовары:\n`;

    props.orders.forEach(item => {
      message += `${item.title} - ${item.price} (x${item.quantity})\n`;
    });

    message += `\nСумма: ${new Intl.NumberFormat().format(summa)}с`;

    const phoneNumber = '996223301206'; // номер
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    };

    const handleScroll = () => {
      setSidebarOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
      <div>
        <span className='logo'>
          <img src='/img/g.jpg' alt='' className='logo-image' />Alliance Service
        </span>
        <ul className='nav'>
          <li className='li' onClick={scrollToBottom}>Про нас</li>
          <li className='li' onClick={() => setSidebarOpen(!sidebarOpen)}>Каталог</li>
        </ul>
        <LuShoppingBag onClick={() => setCartOpen(!cartOpen)} className={`shop-card-button ${cartOpen && 'active'}`} />

        {cartOpen && (
          <div className='shop-cart'>
            {props.orders.length > 0 ? showOrders({ ...props, onOrderNowClick: handleOrderNowClick }) : showNothing()}
          </div>
        )}

        <div ref={sidebarRef} className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
          <h2>Каталог</h2>
          <Categories choseCategory={props.choseCategory} />
          <li className='kat' onClick={() => setSidebarOpen(false)}>Закрыть</li>
        </div>
      </div>
      <div className='presentation' style={{ backgroundImage: `url(${presentationImages[currentContentIndex].image})` }}>
        <div className='text-overlay'>
          <div className='text1'>{presentationImages[currentContentIndex].text1}</div>
          <div className='text2'>{presentationImages[currentContentIndex].text2}</div>
        </div>
        <li className='prev' onClick={handlePrevSlide}></li>
        <li className='next' onClick={handleNextSlide}></li>
      </div>

      {orderFormOpen && (
        <div className='order-form'>
          <h2>Оформление заказа</h2>
          <form onSubmit={handleOrderSubmit}>
            <label>
              Имя:
              <input type="text" name="name" value={orderDetails.name} onChange={handleInputChange} required />
            </label>
            <label>
              Адрес:
              <input type="text" name="address" value={orderDetails.address} onChange={handleInputChange} required />
            </label>
            <label>
              Телефон:
              <input type="text" name="phone" value={orderDetails.phone} onChange={handleInputChange} required />
            </label>
            <label>
              Способ доставки:
              <select name="deliveryMethod" value={orderDetails.deliveryMethod} onChange={handleInputChange}>
                <option value="courier">Курьер</option>
                <option value="pickup">Самовывоз</option>
              </select>
            </label>
            <button type="submit">Отправить</button>
            <button type="button" onClick={handleOrderFormClose}>Закрыть</button>
          </form>
        </div>
      )}
    </header>
  );
}
