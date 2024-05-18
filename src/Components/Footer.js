import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h3>Контакты</h3>
              <p>(+996)550-123-996</p>
              <p>example@gmail.com</p>
            </div>
            <div className="col-md-4">
              <h3>Про нас</h3>
              <p>dfbdbfbbdfb</p>
            </div>
            <div className="col-md-4">
              <h3>Адрес</h3>
              <p>Ахунбаева83 Кыргызстан(Бишкек) </p>
            </div>
            <div class="icon-container">
                <a href="https://www.instagram.com/allianceservice/"><img src="./img/Instagram.webp" alt=""/></a>
                <a href="link2"><img src="icon2.png" alt=""/></a>
                <a href="link3"><img src="icon3.png" alt=""/></a>
              </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className='fo'> &copy; {new Date().getFullYear()} Все права защищены</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
