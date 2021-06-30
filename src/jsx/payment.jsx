import Breadcrumbs from "./breadcrumbs/breadcrumbs"
import PaymentInstructionBlock from "./payment-instruction";

export default function Payment() {
  return (
    <div className="main__wrapper">
      <Breadcrumbs />
      <h1 className="main__header">Оплатить курс</h1>
      <PaymentInstructionBlock />
    </div>
  );
} 