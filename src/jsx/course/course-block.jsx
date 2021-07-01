import Select from "./select";

export default function CourseBlock(props) {
  return (
    <section className="course">
      <h2 className="course__header">1. Выберите тип курса</h2>
      <div className="select-wrapper">
        <Select courses={props.courses} />
      </div>
    </section>
  );
}