import FinalBlock from "./lower order/final-block";

export default function ThirdStep(props) {
  return (
    <section className="final">
      <div className="col-lg-9">
        <h2 className="final__header" 
          ref={ props.finalHeaderRef }>
          3. Как оплатить через ЕРИП
        </h2>
        <FinalBlock />
      </div>
    </section>
  );
}