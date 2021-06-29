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

const checkboxes = document.querySelectorAll('.methods__block');
const checkboxesBlock = document.querySelector('.methods');
const finalHeader = document.querySelector('.final__header');

checkboxesBlock.addEventListener('click', e => {
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
});

//ReactDOM.render(<Payment />, document.getElementById('main'));