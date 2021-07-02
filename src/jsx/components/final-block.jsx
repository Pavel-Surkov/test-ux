import React, { useState } from "react";

export default React.memo(function FinalBlock() {
  const listItems = [
    'Пункт Система «Расчет» (ЕРИП)',
    'Образование и развитие',
    'Дополнительное образование и развитие',
    'Тренинги, семинары, консультации',
    'Минск',
    'ИП Колесень И.Г.',
    'Посещение занятий',
    'Ввести ФИО ученика и сумму для оплаты'
  ];

  return (
    <div className="total">
      <p className="total__sum">Сумма для оплаты</p>
      <p className="total__cost">790 BYN</p>
      <button className="total__promo">У меня есть промо-код</button>
      <Bonuses />
      <div className="comment">
        <p className="comment__text">*Скидки не суммируются. <br/>После внесения платежа, отправьте копию квитанции на 
          <a className="comment__email" href="mailto:hello@ux-school.by">hello@ux-school.by</a>
        </p>
      </div>
      <FinalLower items={listItems}/>
    </div>
  );
})

//Нижний блок с QR кодом и списком
function FinalLower(props) {
  return (
    <div className="total-lower">
      <LeftColList items={props.items}/>
      <div className="total-code">
        <img className="total-code__qr" src="./img/qr.png" width="200" alt="QR code" />
        <p className="total-code__service">Код услуги: 4725501</p>
      </div> 
    </div>
  );
}

function LeftColList(props) {
  const items = props.items

  return (
    <div className="find-us">
      <h3>Как найти нас в ЕРИП:</h3>
      <ol>
        { items.map( value => {
          return (
            <li key={value}>
              <p>{value}</p>
            </li>
          );
        }) }
      </ol>
    </div>
  );
}

// Блок с чекбоксами. 
// Состояние добавил с рассчетом, что чекбоксы будут влиять на сумму.
function Bonuses() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(prev => !prev);
  }

  return (
    <div className="bonus">
      <BonusRow 
        text="Рассрочка на 2 месяца от UX Mind School"
        name="рассрочка"
        onChange={ handleChange } />
      <BonusRow 
        text="Я студент-очник / я раньше учился у вас (скидка 10%)"
        name="скидка"
        onChange={ handleChange } />
    </div>
  );
}

function BonusRow(props) {
  return (
    <label className="bonus__row">
      <div className="bonus__label">
        <input 
        className="bonus__checkbox" 
        type="checkbox" 
        onChange={ props.onChange }
        name={props.name} />
        <span className="bonus__slider"></span>
      </div>
      <p className="bonus__text">{props.text}</p>
    </label>
  );
}