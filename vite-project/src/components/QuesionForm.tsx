

function QuestionForm() {
  return (
    <div className="question-form">
      <div className="question-text">
        <h2>ОСТАЛИСЬ ВОПРОСЫ?</h2>
        <p>
          Заполните небольшую заявку <br />
          и мы свяжемся с вами <br />
          в течение 2х рабочих дней
        </p>
      </div>
      <form className="form-container">
        <input type="text" placeholder="ВАШЕ ИМЯ" className="input-field" />
        <input type="text" placeholder="НОМЕР ТЕЛЕФОНА" className="input-field" />
        <button type="submit" className="submit-button">Отправить заявку</button>
      </form>
    </div>
  );
}

export default QuestionForm;
