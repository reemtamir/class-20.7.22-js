'use strict';
document.body.classList.add('p-5');
const elDiv = document.createElement('div');
elDiv.classList.add('row');
document.body.appendChild(elDiv);
const elDiv2 = document.createElement('div');
elDiv2.classList.add('row');
document.body.appendChild(elDiv2);
const elNumbersBtn = document.createElement('button');
elNumbersBtn.type = 'button';
elNumbersBtn.classList.add(
  ...['btn', 'btn-outline-secondary', 'col-6', 'm-auto']
);
elNumbersBtn.innerHTML = 'Create Even Numbers List';
elNumbersBtn.setAttribute('onclick', 'createUlEvenNumbers()');
elDiv.appendChild(elNumbersBtn);

const cards = [
  {
    title: 'shampoo',
    img: 'https://www.plaineproducts.com/wp-content/uploads/shampoo-16-rmv-p.jpg',
    price: 23.4,
    category: 'shower',
    barcode: '4043945',
    link: `https://shop.super-pharm.co.il/care/hair-care/shampoo/%D7%A9%D7%9E%D7%A4%D7%95-%D7%9C%D7%A9%D7%99%D7%A2%D7%A8-%D7%A8%D7%92%D7%99%D7%9C/p/604212?gclid=Cj0KCQjwlemWBhDUARIsAFp1rLV_X2Wi9itygvjO_k2BXCvDWN4IyHqbBCeLI-G3EE0W4COhJd3fBaAaAsrXEALw_wcB`,
  },
  {
    title: 'Cornflakes',
    img: `//images.kglobalservices.com/www.kelloggs.com/en_us/product/product_4508485/prod_img-4813038_prod_img-4813038.png`,
    price: 60,
    category: 'food',
    barcode: 'A-5455',
    link: `https://www.shufersal.co.il/online/he/%D7%A7%D7%98%D7%92%D7%95%D7%A8%D7%99%D7%95%D7%AA/%D7%A1%D7%95%D7%A4%D7%A8%D7%9E%D7%A8%D7%A7%D7%98/%D7%97%D7%98%D7%99%D7%A4%D7%99%D7%9D%2C-%D7%9E%D7%AA%D7%95%D7%A7%D7%99%D7%9D-%D7%95%D7%93%D7%92%D7%A0%D7%99-%D7%91%D7%95%D7%A7%D7%A8/%D7%93%D7%92%D7%A0%D7%99%D7%9D-%D7%95%D7%97%D7%98%D7%99%D7%A4%D7%99-%D7%93%D7%92%D7%A0%D7%99%D7%9D/%D7%A7%D7%95%D7%A8%D7%A0%D7%A4%D7%9C%D7%A7%D7%A1-%D7%95%D7%93%D7%92%D7%A0%D7%99-%D7%91%D7%95%D7%A7%D7%A8-%D7%9C%D7%99%D7%9C%D7%93%D7%99%D7%9D/c/A250216`,
  },
  {
    title: 'Cola',
    img: `https://s3-symbol-logo.tradingview.com/coca-cola--600.png`,
    price: 80.5,
    category: 'drinks',
    barcode: 'B-986453',
    link: `https://cocacola.co.il/`,
  },
  {
    img: `https://www.school-market.co.il/src.ashx?p=2&f=3290x634960839324156334_L.jpg&w=210&h=210&t=1`,
    title: 'Bamba red',
    price: 90.3,
    category: 'food',
    barcode: 'C-68645',
    link: `https://www.amazon.com/Strawberry-Snacks-Natural-1-05oz-Family/dp/B00GMYAP2Q`,
  },
];

const user = {
  name: 'daniel',
  age: 23,
  email: 'd@notmyrealmail.com',
  phone: '058666666:smiling_imp:',
  address: {
    city: 'tlv',
    street: 'not found',
    number: 666,
  },
};
createUlObj(user, user.address);
function createUlObj(obj, obj2) {
  let objList = document.createElement('ul');
  objList.classList.add(...['text-info']);
  elDiv.appendChild(objList);

  for (let key in obj) {
    let li = `<li>${key} => ${
      typeof obj[key] !== 'object' ? obj[key] : 'A new obj 👇 '
    }</li>`;

    objList.innerHTML += li;
  }
  let objList2 = document.createElement('ul');
  objList2.classList.add(...['text-danger']);
  objList.appendChild(objList2);
  for (let key in obj2) {
    let li = `<li>${key} => ${
      typeof obj2[key] !== 'object' ? obj2[key] : 'A new obj 👇 '
    }</li>`;
    objList2.innerHTML += li;
  }
  objList2.innerHTML += `</ul>`;
  objList.innerHTML += `</ul>`;
}

function createUlEvenNumbers(num1, num2) {
  let elUl = document.createElement('ul');
  elDiv.appendChild(elUl);
  num1 = Number(prompt('Enter first EVEN number'));
  num2 = Number(prompt('Enter second EVEN number'));
  if ((num1 + num2) % 2 !== 0) {
    alert('Try again with EVEN numbers');
    return;
  }
  if (num1 === num2) {
    alert('Try again with  DIFFERENT numbers');
    return;
  }
  for (let i = num1; i <= num2; i += 2) {
    let elLi = document.createElement('li');
    elUl.appendChild(elLi);
    elLi.innerHTML = i;
  }
  elUl.innerHTML += '</ul>';
}

const elCardsBtn = document.createElement('button');
elCardsBtn.type = 'button';
elCardsBtn.innerHTML = 'Create Cards';
elCardsBtn.classList.add(...['btn', 'btn-outline-primary', 'col-6', 'm-auto']);
elCardsBtn.setAttribute('onclick', 'createCard(cards)');
elDiv.appendChild(elCardsBtn);
function createCard(arr) {
  for (let key of arr) {
    let card = document.createElement('div');
    card.classList.add(...['card', 'text-center', 'col']);
    card.style = 'width: 18rem';
    card.innerHTML += ` 
 <div style="width:150px" class="card-body text-center m-auto">
 <img class="w-75 " src="${key.img}" class="card-img-top m-auto" alt="${key.title} img"></div>
  <div><h5 class="card-title">${key.title}</h5></div>
  <div>
 <ul class="list-group list-group-flush">
   <li class="list-group-item"> Price: ${key.price}</li>
   <li class="list-group-item">Category: ${key.category}</li>
   <li class="list-group-item">Barcode: ${key.barcode}</li>
 </ul></div>
 <div class="card-body">
   <a href="${key.link}" target="_blank class="card-link">Buy now</a></div>`;
    elDiv2.appendChild(card);
  }
}
