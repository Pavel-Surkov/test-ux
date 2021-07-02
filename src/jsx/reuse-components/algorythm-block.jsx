// Блок алгоритма - "скелет" для блоков final, payment и course
export default function AlgorythmBlock(props) {
  return (
    <section className={props.className}>
      <h2 className={props.headerClassName}>{props.headerText}</h2>
      <div className={props.blockClassName}>
        {props.children}
      </div>
    </section>
  );
}