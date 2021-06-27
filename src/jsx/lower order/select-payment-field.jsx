export default function SelectPaymentField(props) {
  const methods = props.payMethods;
  const values = ['ЕРИП', 'кредит от Альфа-банка', 'расссрочку', 'отделение банка', 'картой'];

  return (
    <div className="main__payment__methods">
      { methods.map((method, index) => {
        const value = values[index] ? values[index] : method;

        return (
          <article 
            className="main__payment__block col-lg-4" 
            dataValue={value} 
            onClick={ props.onClick }
            key={value}>
            <p className="main__payment__method">{method}</p>
            <div className="main__payment__radio"></div>
          </article> 
        );
      }) }      
    </div>
  );
}