import FinalBlock from "./final-block";

export default function Final(props) {
  return (
    <section className="final">
      <div className="col-lg-9">
        <h2 className="final__header">
          { props.headerValue }
        </h2>
        <FinalBlock />
      </div>
    </section>
  );
}