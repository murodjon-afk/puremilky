import "../App.css"; 
import Header from "../components/header"; 
import SecondText from "../components/second"; 
import MilkyCard from "../components/card"; 
import PromoCard from "../components/promocard"; 
import QuestionForm from "../components/QuesionForm";
import Footer from "../components/Footer";





const About = () => {
  return (
    <>
      
      <div className="main-page">
      <Header />
      <div className="main-text">
        <h1>PUREMILKY</h1>
        <h3>МОЛОЧНОЕ ПРОДУКЦИЯ ВЫСЩЕГО КАЧЕСТВА</h3>
      </div>
      <div className="milky"></div>
      </div>


      <div className="second-page">
         <SecondText></SecondText>
        <div className="cards">
        <MilkyCard></MilkyCard>
        <MilkyCard></MilkyCard>
        <MilkyCard></MilkyCard>
        <MilkyCard></MilkyCard>
        <MilkyCard></MilkyCard>
        <MilkyCard></MilkyCard>
        </div>
      </div>

      <div className="third-page"><div className="img-third"></div></div>

      <div className="four-page">
        <div className="four-text">
          <h1>Пруимущества Продуктов</h1>
          <p>Puremilky - молочная продукция фермерского производства, изготавливается согласно 
          требованиям европейского качества</p>
        </div>

        <div className="img-four"></div>
      </div>

      <div className="five-page">
      <div className="news-container">
      <h2 className="news-title">
        Новости <br /> <span>и акции</span>
      </h2>
      <p className="news-description">
        Puremilky - молочная продукция фермерского производства, изготавливается согласно требованиям европейского качества.
      </p>
      <div className="news-controls">
        <button className="news-btn">❮</button>
        <button className="news-btn">❯</button>
      </div>
    </div>
    <div className="promo-parent">
    <PromoCard></PromoCard>
    <PromoCard></PromoCard>
    <PromoCard></PromoCard>
 
    </div>
      </div>

      <div className="six-page">
        <div className="six-text">
          <h1>О Нашей <br />Компании</h1>
          <button className="Next">Подробное</button>
        </div>

       <div className="vid">
       <div className="video-img"><div className="youtube"></div></div>
       <div className="texts">
       <h1>Группа компаний «Siyob»</h1><br />
       <p>Группа компаний «Siyob» - многопрофильный холдинг по производству и реализации товаров народного потребления, на протяжении 10 лет на рынке Узбекистана. Одной из компаний в составе холдинга стала компания «PureMilky Works»</p><br />
       <p>«PureMilky Works» самый крупный молочный завод в Узбекистане. Специализируется на производстве натуральной молочной и масложировой продукции. Основанное в 2013 году, предприятие имеет в составе, молочный и масложировой заводы.</p>
       </div>
       </div>

       <QuestionForm />
       <Footer />  
      </div>
    </>
  );
};

export default About;
