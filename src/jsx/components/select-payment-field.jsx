import { useEffect } from "react";

export default function SelectPaymentField(props) {
  const methods = props.payMethods;
  const values = [
    'через ЕРИП', 
    'через кредит от Альфа-банка', 
    'через рассрочку по карте «Халва»', 
    'в банковском отделении', 
    'картой'
  ];

  // Устанавливает 1-й чекбокс в состояние checked
  useEffect(() => {
    const firstCheckbox = document.querySelector('.methods__radio');
    
    if(firstCheckbox !== null) {
      firstCheckbox.checked = true;
    }
  }, [methods])

  return (
    <div className="methods">
      { methods.map((method, index) => {
        const value = values[index] ? values[index] : method;

        if(method === 'Кредит от Альфа-банка')  {
          method = 'Кредит <br/>от Альфа-банка';
        } else if(method === 'Рассрочка от 2 до 9 месяцев по карте «Халва»') {
          method = 'Рассрочка <br/>от 2 до 9 месяцев <br/>по карте «Халва»';
        }

        return (
          <div key={value} className="col-lg-4">
            <label
            className="methods__block">
              <input type="radio" 
                className="methods__radio" 
                name="payment" 
                value={index + 1}
                data-value={value} 
                onChange={ props.onChange } />
              <p className="methods__method-text" dangerouslySetInnerHTML={{__html: method}}></p>
            </label> 
          </div>
        );
      }) }      
    </div>
  );
}