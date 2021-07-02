import { useState, useEffect } from "react";
import AlgorythmBlock from "./reuse-components/algorythm-block";
import SelectPaymentField from "./components/select-payment-field";
import FinalBlock from "./components/final-block";
import Select from "./components/select";

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
      <AlgorythmBlock
        className="course"
        headerClassName="course__header"
        blockClassName="select-wrapper"
        headerText="1. Выберите тип курса">
        <Select courses={ data['courseType'] } />
      </AlgorythmBlock>
      <AlgorythmBlock
        className="payment"
        headerClassName="payment__header"
        blockClassName="col-lg-9"
        headerText="2. Выберите способ оплаты">
        <SelectPaymentField 
          payMethods={ data['paymentMethods'] } 
          onChange={ e => handleChangeCheckbox(e) } />
      </AlgorythmBlock>
      <AlgorythmBlock
        className="final"
        headerClassName="final__header"
        blockClassName="col-lg-9"
        headerText={ headerValue }>
        <FinalBlock />
      </AlgorythmBlock>
    </>
  );
}