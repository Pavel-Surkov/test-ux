import { useState, useEffect, useRef } from "react";
import FirstStep from "./course/course-block";
import SecondStep from "./payment/payment-block";
import ThirdStep from "./final/final";

export default function InstructionBlock() {
  const [data, setData] = useState({
    'courseType': [],
    'paymentMethods': []
  });

  const finalHeaderRef = useRef(null);

  useEffect( () => {
    (async () => {
      const response = await fetch('./json/data.json');

      if(response.ok) {
        const json = await response.json();
        setData(json);
      } else {
        alert("Error: " + response.status);
      }
    })()
  }, [])

  const handleClickCheckbox = e => {
    const checkboxes = document.querySelectorAll('.methods__block');
    const finalHeader = finalHeaderRef.current;

    const target = e.target.closest('label');
    if(target == null) return false;
    if(target.hasAttribute('checked')) {
      e.preventDefault();
    } else {
      checkboxes.forEach(el => {
        if(el.hasAttribute('checked')) el.removeAttribute('checked');
      });
      target.setAttribute('checked', '');
      const value = target.dataset.value;
      finalHeader.innerHTML = `3. Как оплатить ${value}`;
    }
  } 

  return (
    <>
      <FirstStep courses={data['courseType']} />
      <SecondStep payMethods={data['paymentMethods']} onClick={ e => handleClickCheckbox(e) } />
      <ThirdStep finalHeaderRef={ finalHeaderRef } />
    </>
  );
}