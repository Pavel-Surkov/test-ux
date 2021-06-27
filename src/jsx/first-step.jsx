import Select from "./lower order/select";

export default function FirstStep(props) {
  return (
    <section className="main__course">
      <h2 className="main__course__header">1. Выберите тип курса</h2>
      <div className="main__course__select-wrapper col-lg-6">
        <Select courses={props.courses} />
      </div>
    </section>
  );
}