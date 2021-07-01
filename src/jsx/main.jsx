import Breadcrumbs from "./components/breadcrumbs"
import InstructionBlock from "./instruction";

export default function Main() {
  return (
    <div className="main__wrapper">
      <Breadcrumbs />
      <h1 className="main__header">Оплатить курс</h1>
      <InstructionBlock />
    </div>
  );
} 