

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="/Слой 1.png" alt="PureMilky" />
          <p>Puremilky 2025</p>
        </div>

        <div className="footer-menu">
          <h3>Меню</h3>
          <ul>
            <li>Продукция</li>
            <li>Рецепты</li>
            <li>Блог</li>
            <li>О Компании</li>
            <li>Вакансии</li>
            <li>Контакты</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Контактная информация</h3>
          <p>Поддержка: <strong>98 180-66-55</strong></p>
          <p>Электронная почта: <strong>98 180-66-55</strong></p>
          <div className="social-icons">
            <img src="/youtube.svg" alt="YouTube" />
            <img src="/instagram.svg" alt="Instagram" />
            <img src="/facebook.svg" alt="Facebook" />
          </div>
        </div>
      </div>
      <div className="footer-policy">
        <a href="#">Политика Конфиденциальности</a>
      </div>
    </footer>
  );
}

export default Footer;
