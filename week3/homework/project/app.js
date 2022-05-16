const amount = document.getElementById('billAmount');
const service = document.getElementById('mySelect');
const people = document.getElementById('People');
const select = document.getElementById('btn1');
const price = document.getElementById('price');
const each = document.getElementById('each');

select.addEventListener('click', calculate);

function calculate() {
  const amountNum = parseInt(amount.value);
  const serviceNum = parseInt(service.value);
  const peopleNum = parseInt(people.value);

  const priceNum = parseFloat(
    (amountNum * (serviceNum / 100)) / peopleNum,
  ).toFixed(2);

  if (isNaN(priceNum)) {
    price.textContent = '';
  } else {
    price.textContent = priceNum;
  }

  if (peopleNum == 1) {
    each.textContent = '';
  } else {
    each.textContent = 'each';
    each.style.color = 'blue';
  }

  if (
    amount.value == '' ||
    people.value == '' ||
    service.value == '-- Choose an Option --'
  ) {
    each.textContent = 'You need to fill in all the fields!';
    each.style.color = 'red';
  }
}
