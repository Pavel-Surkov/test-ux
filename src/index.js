import React from 'react';
import ReactDOM from 'react-dom';
import './css/normalize.css';
import './css/style.css';
import Payment from './jsx/payment';


(async function getData() {
  const response = await fetch('./json/data.json');
  if(response.ok) {
    const json = await response.json();
    console.log(json);
  } else {
    alert("Error: " + response.status);
  }
})();

//ReactDOM.render(<Payment />, document.getElementById('main'));