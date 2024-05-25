import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h3>Контакты</h3>
              <p>(+996)550-123-996+996 553 737 486
              </p>
              <p>allservice108@gmail.com</p>
            </div>
            <div className="col-md-4">
              <h3>Про нас</h3>
              <p>Мы на рынке уже на протежении 15-ти лет </p>
            </div>
            <div className="col-md-4">
              <h3>Адрес</h3>
              <p>Ахунбаева83 Кыргызстан(Бишкек) </p>
              <p>Работатаем 7/7 с 09:00 до 19:00</p>
            </div>
            <div class="icon-container">
                <a href="https://www.instagram.com/allianceservice/"><img src="./img/Instagram.webp" alt=""/></a>
                <a href="https://lalafo.kg/allservise"><img src="./img/lalafo-logo.png" alt=""/></a>
                <a href="https://www.facebook.com/AllianceService108/?locale=ru_RU"><img src="./img/f.jpg" alt=""/></a>
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
