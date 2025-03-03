const Header = () => {
    return (
      <header>
        <div className="img"></div>
        <div className="hd-btns">
          <button className="main">Главная</button>
          <button className="products">Продукция</button>
          <button className="inf-comp">О компании</button>
          <button className="recept">Рецепты</button>
          <button className="blog">Блог</button>
          <button className="contact">Контакты</button>
          <button className="vacanse">Вакансия</button>
        </div>
  
        <div className="language">
          <button className="uz">UZB</button>
          <button className="ru">RUS</button>
          <button className="eng">ENG</button>
        </div>
      </header>
    );
  };
  
  export default Header;


