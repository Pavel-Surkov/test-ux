import SelectPaymentField from "./lower order/select-payment-field";

export default function SecondStep(props) {
  return (
    <section className="main__payment col-lg-9">
        <h2 className="main__payment__header">2. Выберите способ оплаты</h2>
        <SelectPaymentField payMethods={ props.payMethods } onClick={ props.onClick } />
    </section>
  );
}