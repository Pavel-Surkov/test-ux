import Breadcrumbs from "./breadcrumbs";
import PaymentInstruction from "./payment-instruction";

export default function Payment() {
  return (
    <>
      <Breadcrumbs />
      <h1 className="main__header">Оплатить курс</h1>
      <PaymentInstruction />
    </>
  );
} 