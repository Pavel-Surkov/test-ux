export default function Breadcrumbs() {
  const items = ['Главная', 'Оплатить курс'];
  
  return (
    <ol className="breadcrumbs">
      { items.map(crumb => {
        if(crumb !== items[items.length - 1]) {
          return (
            <li className="breadcrumbs__item" key={crumb}>
              <a href="#" className="breadcrumbs__link">{crumb}</a>
            </li>
          );
        }
        return (
          <li className="breadcrumbs__item" key={crumb}>
            <a href="#" className="breadcrumbs__link" active="active">{crumb}</a>
          </li>
        );
      }) }
    </ol>
  );
}