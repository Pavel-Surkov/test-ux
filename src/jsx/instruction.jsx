import { useState, useEffect } from "react";
import CourseBlock from "./course/course-block";
import PaymentBlock from "./payment/payment-block";
import Final from "./final/final";

export default function InstructionBlock() {
  const [data, setData] = useState({
    'courseType': [],
    'paymentMethods': []
  });
  const [headerValue, setHeaderValue] = useState('3. Как оплатить через ЕРИП');

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

  const handleChangeCheckbox = e => {
    const value = e.target.dataset.value;
    setHeaderValue(`3. Как оплатить ${value}`);
  }

  return (
    <>
      <CourseBlock courses={data['courseType']} />
      <PaymentBlock
        payMethods={data['paymentMethods']} 
        onChange={ e => handleChangeCheckbox(e) } />
      <Final headerValue={ headerValue } />
    </>
  );
}