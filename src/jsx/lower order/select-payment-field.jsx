export default function SelectPaymentField(props) {
  const methods = props.payMethods;
  const values = ['ЕРИП', 'кредит от Альфа-банка', 'расссрочку', 'отделение банка', 'картой'];

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
          <article 
            className="main__payment__block col-lg-4" 
            data-value={value} 
            onClick={ props.onClick }
            key={value}>
            <p className="main__payment__method" dangerouslySetInnerHTML={{__html: method}}></p>
            <div className="main__payment__radio"></div>
          </article> 
        );
      }) }      
    </div>
  );
}