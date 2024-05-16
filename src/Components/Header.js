import React, { useState } from 'react';
import { LuShoppingBag } from "react-icons/lu";
import Order from './Order';

const showOrders = (props)=>{
  let summa = 0
  props.orders.forEach(el => summa += Number.parseFloat(el.price));
    return(
      <div>
        {props.orders.map(el=>(
          <Order onDelete={props.onDelete} key={el.id} item = {el}/>
        ))}
        <p className='summa'>Сумма:{new Intl.NumberFormat().format(summa)}$</p>
      </div>
    )

}

const showNothing = ()=>{
  return(<div className='empty'>
    <h2>Товара нет</h2>
  </div>)
}
export default function Header(props) {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };
  let[cartOpen, setCartOpen] = useState(false)
  return (
    <header>
      <div>
      <span className='logo'>
      <img src='./img/g.jpg' alt='' className='logo-image' />Alliance Service</span>
        <ul className='nav'>
          <li className='li' onClick={scrollToBottom}>Про нас</li>
          <li className='li' onClick={scrollToBottom}>Контакты</li>
        </ul>
        <LuShoppingBag  onClick={()=> setCartOpen(cartOpen = !cartOpen)} className={`shop-card-button ${cartOpen && 'active'}`} />

        {cartOpen && (
          <div className='shop-cart'>
           {props.orders.length > 0 ?
           showOrders(props):showNothing()}
          </div>
        )}
      </div>
       <div className='presentation'></div>
    </header>
  );
}
