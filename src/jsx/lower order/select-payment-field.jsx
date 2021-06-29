import { useEffect } from "react";

export default function SelectPaymentField(props) {
  const methods = props.payMethods;
  const values = [
    'через ЕРИП', 
    'через кредит от Альфа-банка', 
    'через рассрочку по карте "Халва"', 
    'в банковском отделении', 
    'картой'
  ];

  useEffect(() => {
    const firstCheckbox = document.querySelector('.main__payment__block');
    
    if(firstCheckbox !== null) {
      firstCheckbox.setAttribute('checked', 'true');
    }
  }, [methods])

  return (
    <div className="main__payment__methods">
      { methods.map((method, index) => {
        const value = values[index] ? values[index] : method;

        if(method === 'Кредит от Альфа-банка')  {
          method = 'Кредит <br/>от Альфа-банка';
        } else if(method === 'Рассрочка от 2 до 9 месяцев по карте «Халва»') {
          method = 'Рассрочка <br/>от 2 до 9 месяцев <br/>по карте «Халва»';
        }

        return (
          <label
            className="main__payment__block col-lg-4" 
            data-value={value} 
            onClick={ props.onClick }
            key={value}>
            <p className="main__payment__method" dangerouslySetInnerHTML={{__html: method}}></p>
            <input type="radio" className="main__payment__radio" name="payment" value={index + 1}/>
          </label> 
        );
      }) }      
    </div>
  );
}