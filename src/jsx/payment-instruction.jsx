import { useState, useEffect, useRef } from "react";
import FirstStep from "./first-step";
import SecondStep from "./second-step";
import ThirdStep from "./third-step";

export default function PaymentInstructionBlock() {
  const [data, setData] = useState({
    'courseType': [],
    'paymentMethods': []
  });

  //Создает реф для заголовка пункта оплаты, чтобы изменять его через чекбоксы
  const finalHeaderRef = useRef(null);

  //Получает данные из локального json
  useEffect(() => {
    (async () => {
      const response = await fetch('./json/data.json');

      if(response.ok) {
        const json = await response.json();
        setData(json);
      } else {
        alert("Error: " + response.status);
      }
    })();
  }, [])

  //Реализует переключение чекбоксов
  const handleClickCheckbox = e => {
    const checkboxes = document.querySelectorAll('.main__payment__block');
    const finalHeader = finalHeaderRef.current;
    const target = e.target.closest('label');

    if(target === null) return false;

    if(target.hasAttribute('checked')) {
      e.preventDefault();
    } else {
      checkboxes.forEach(el => {
        if(el.hasAttribute('checked')) {
          el.removeAttribute('checked');
        }
      });
      
      target.setAttribute('checked', '');
      const value = target.dataset.value;
      finalHeader.innerHTML = `3. Как оплатить через ${value}`;
    }
  } 

  return (
    <>
      <FirstStep courses={data['courseType']} />{/*Передают данные из json как пропсы*/}
      <SecondStep payMethods={data['paymentMethods']} onClick={ e => handleClickCheckbox(e) } />
      <ThirdStep finalHeaderRef={ finalHeaderRef } />
    </>
  );
}