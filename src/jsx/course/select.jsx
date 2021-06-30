export default function Select(props) {
  const courses = props.courses;

  return (
    <select name="course" className="select-wrapper__select">
      { courses.map(course => {
        return (
          <option key={course} value={course}>{course}</option>
        );
      }) }
    </select>
  );
}