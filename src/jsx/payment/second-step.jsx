import SelectPaymentField from "./select-payment-field";

export default function SecondStep(props) {
  return (
    <section className="payment">
      <div className="col-lg-9">
        <h2 className="payment__header">2. Выберите способ оплаты</h2>
        <SelectPaymentField payMethods={ props.payMethods } onClick={ props.onClick } />
      </div>
    </section>
  );
}