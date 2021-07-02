export default function Breadcrumbs() {
  const items = ['Главная', 'Оплатить курс'];

  return (
    <ol className="breadcrumbs">
      { items.map(crumb => {
        return (
          <li className="breadcrumbs__item" key={crumb} >
            <a href="#" className="breadcrumbs__link">{crumb}</a>
          </li>
        );
      }) }
    </ol>
    
  );
}