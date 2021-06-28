export default function FinalBlock(props) {

  return (
    <div classNameName="main__final__block">
      <p className="main__final__sum">Сумма для оплаты</p>
      <p className="main__final__cost">790 BYN</p>
      <a href="#" className="main__final__promo">У меня есть промо-код</a>
      <Bonuses />
      <div className="main__final__comment">
        <p className="main__final__comment-text">*Скидки не суммируются. <br/>После внесения платежа, отправьте копию квитанции на <a className="main__final__email" href="mailto:hello@ux-school.by">hello@ux-school.by</a></p>
      </div>
    </div>
      // <div className="main__final__lower">
      //   <div className="main__final__find-us">
      //     <h3 className="main__final__find-header">Как найти нас в ЕРИП:</h3>
      //     <ol className="main__final__find-list">
      //       <li className="main__final__find-item">
      //         <p className="main__final__find-str">Пункт Система «Расчет» (ЕРИП)</p>
      //       </li>
      //       <li className="main__final__find-item">
      //         <p className="main__final__find-str">Образование и развитие</p>
      //       </li>
      //       <li className="main__final__find-item">
      //         <p className="main__final__find-str">Дополнительное образование и развитие</p>
      //       </li>
      //       <li className="main__final__find-item">
      //         <p className="main__final__find-str">Тренинги, семинары, консультации</p>
      //       </li>
      //       <li className="main__final__find-item">
      //         <p className="main__final__find-str">Минск</p>
      //       </li>
      //       <li className="main__final__find-item">
      //         <p className="main__final__find-str">ИП Колесень И.Г.</p>
      //       </li>
      //       <li className="main__final__find-item">
      //         <p className="main__final__find-str">Посещение занятий</p>
      //       </li>
      //       <li className="main__final__find-item">
      //         <p className="main__final__find-str">Ввести ФИО ученика и сумму для оплаты</p>
      //       </li>
      //     </ol>
      //   </div>
      //   <div className="main__final__code">
      //     <img className="main__final__qr" src="./img/qr.png" width="200" alt="QR code">
      //     <p className="main__final__service-code">Код услуги: 4725501</p>
      //   </div> 
      // </div>
    
  );
}

function Bonuses() {
  return (
    <div className="main__final__bonus">
      <BonusRow 
        text="Рассрочка на 2 месяца от UX Mind School"
        name="рассрочка" />
      <BonusRow 
        text="Я студент-очник / я раньше учился у вас (скидка 10%)"
        name="скидка" />
    </div>
  );
}

function BonusRow(props) {
  return (
    <div className="main__final__row">
      <label className="main__final__label">
        <input className="main__final__checkbox" type="checkbox" name={props.name} />
        <span className="main__final__slider round"></span>
      </label>
      <p className="main__final__text">{props.text}</p>
    </div>
  );
}