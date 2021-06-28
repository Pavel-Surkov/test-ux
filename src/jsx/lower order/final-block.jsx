export default function FinalBlock() {
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
    <div className="main__final__block">
      <p className="main__final__sum">Сумма для оплаты</p>
      <p className="main__final__cost">790 BYN</p>
      <a href="#" className="main__final__promo">У меня есть промо-код</a>
      <Bonuses />
      <div className="main__final__comment">
        <p className="main__final__comment-text">*Скидки не суммируются. <br/>После внесения платежа, отправьте копию квитанции на <a className="main__final__email" href="mailto:hello@ux-school.by">hello@ux-school.by</a></p>
      </div>
      <FinalLower items={listItems}/>
    </div>
  );
}

function FinalLower(props) {
  return (
    <div className="main__final__lower">
        <LeftColList items={props.items}/>
        <div className="main__final__code">
          <img className="main__final__qr" src="./img/qr.png" width="200" alt="QR code" />
          <p className="main__final__service-code">Код услуги: 4725501</p>
        </div> 
      </div>
  );
}

function LeftColList(props) {
  const items = props.items

  return (
    <div className="main__final__find-us">
      <h3 className="main__final__find-header">Как найти нас в ЕРИП:</h3>
      <ol className="main__final__find-list">
        { items.map( value => {
          return (
            <li className="main__final__find-item" key={value}>
              <p className="main__final__find-str">{value}</p>
            </li>
          );
        }) }
      </ol>
    </div>
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