import { useState, useEffect } from "react";
import FirstStep from "./first-step";

export default function PaymentInstruction() {
  const [data, setData] = useState({
    'courseType': [],
    'paymentMethods': []
  });

  useEffect( async () => {
    const response = await fetch('./json/data.json');
    if(response.ok) {
      const json = await response.json();
      setData(json);
      console.log(json)
    } else {
      alert("Error: " + response.status);
    }
  }, [])

  return (
    <>
      <FirstStep courses={data['courseType']} />
      {/* <SecondStep payMethods={data['paymentMethods']} />
      <ThirdStep /> */}
    </>
  );
}