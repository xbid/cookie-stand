'use strict';

// Sales Data

let storeHour=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let container=document.getElementById('container');



let seattle={
  location: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgcookiesPerHoursSales: 6.3,
  customerPerHour: [],
  cookiesPerHour: [],
  total: 0,


  randomCustomerPerHour: function(){
    for (let i=0; i<storeHour.length; i++) {
      this.customerPerHour.push(randomValue(this.minCust, this.maxCust));
    }
  },
  cookiesSoldPerHour: function(){
    for (let i=0; i<storeHour.length; i++) {
      this.cookiesPerHour.push(Math.ceil(this.customerPerHour[i]*this.avgcookiesPerHoursSales));
      this.total=this.total + this.cookiesPerHour[i];
    }
  },
  render: function(){
    let headerEl=document.createElement('h2');
    container.appendChild(headerEl);
    headerEl.textContent=this.location;

    let ulEl=document.createElement('ul');
    container.appendChild(ulEl);
    let liEl;

    for (let i=0; i < this.cookiesPerHour.length; i++) {
      liEl=document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${storeHour[i]} : ${this.cookiesPerHour[i]} Cookies`;
    }
    liEl=document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent='Total : ' + this.total + ' Cookies';
  },
};

seattle.randomCustomerPerHour();
seattle.cookiesSoldPerHour();
seattle.render();
//////////////////////////////////
let Tokyo={
  location: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgcookiesPerHoursSales: 1.2,
  total: 0,
  customerPerHour: [],
  cookiesPerHour: [],


  randomCustomerPerHour: function(){
    for (let i=0; i<storeHour.length; i++) {
      this.customerPerHour.push(randomValue(this.minCust, this.maxCust));
    }
  },
  cookiesSoldPerHour: function(){
    for (let i=0; i<storeHour.length; i++) {
      this.cookiesPerHour.push(Math.ceil(this.customerPerHour[i]*this.avgcookiesPerHoursSales));
      this.total=this.total + this.cookiesPerHour[i];
    }
  },


  render: function(){
    let headerEl=document.createElement('h2');
    container.appendChild(headerEl);
    headerEl.textContent=this.location;

    let ulEl=document.createElement('ul');
    container.appendChild(ulEl);
    let liEl;

    for (let i=0; i < this.cookiesPerHour.length; i++) {
      liEl=document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${storeHour[i]} : ${this.cookiesPerHour[i]} Cookies`;
    }
    liEl=document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent='Total : ' + this.total + ' Cookies';
  },
};

Tokyo.randomCustomerPerHour();
Tokyo.cookiesSoldPerHour();
Tokyo.render();
///////////////////////////////////////////////////
let Dubai={
  location: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgcookiesPerHoursSales: 3.7,
  total: 0,
  customerPerHour: [],
  cookiesPerHour: [],


  randomCustomerPerHour: function(){
    for (let i=0; i<storeHour.length; i++) {
      this.customerPerHour.push(randomValue(this.minCust, this.maxCust));
    }
  },
  cookiesSoldPerHour: function(){
    for (let i=0; i<storeHour.length; i++) {
      this.cookiesPerHour.push(Math.ceil(this.customerPerHour[i]*this.avgcookiesPerHoursSales));
      this.total=this.total + this.cookiesPerHour[i];
    }
  },


  render: function(){
    let headerEl=document.createElement('h2');
    container.appendChild(headerEl);
    headerEl.textContent=this.location;

    let ulEl=document.createElement('ul');
    container.appendChild(ulEl);
    let liEl;

    for (let i=0; i < this.cookiesPerHour.length; i++) {
      liEl=document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${storeHour[i]} : ${this.cookiesPerHour[i]} Cookies`;
    }
    liEl=document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent='Total : ' + this.total + ' Cookies';
  },
};

Dubai.randomCustomerPerHour();
Dubai.cookiesSoldPerHour();
Dubai.render();
//////////////////////////////////////////////
let Paris={
  location: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgcookiesPerHoursSales: 2.3,
  total: 0,
  customerPerHour: [],
  cookiesPerHour: [],


  randomCustomerPerHour: function(){
    for (let i=0; i<storeHour.length; i++) {
      this.customerPerHour.push(randomValue(this.minCust, this.maxCust));
    }
  },
  cookiesSoldPerHour: function(){
    for (let i=0; i<storeHour.length; i++) {
      this.cookiesPerHour.push(Math.ceil(this.customerPerHour[i]*this.avgcookiesPerHoursSales));
      this.total=this.total + this.cookiesPerHour[i];
    }
  },


  render: function(){
    let headerEl=document.createElement('h2');
    container.appendChild(headerEl);
    headerEl.textContent=this.location;

    let ulEl=document.createElement('ul');
    container.appendChild(ulEl);
    let liEl;

    for (let i=0; i < this.cookiesPerHour.length; i++) {
      liEl=document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${storeHour[i]} : ${this.cookiesPerHour[i]} Cookies`;
    }
    liEl=document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent='Total : ' + this.total + ' Cookies';
  },
};

Paris.randomCustomerPerHour();
Paris.cookiesSoldPerHour();
Paris.render();
//////////////////////////////////////////
let Lima={
  location: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgcookiesPerHoursSales: 4.6,
  total: 0,
  customerPerHour: [],
  cookiesPerHour: [],


  randomCustomerPerHour: function(){
    for (let i=0; i<storeHour.length; i++) {
      this.customerPerHour.push(randomValue(this.minCust, this.maxCust));
    }
  },
  cookiesSoldPerHour: function(){
    for (let i=0; i<storeHour.length; i++) {
      this.cookiesPerHour.push(Math.ceil(this.customerPerHour[i]*this.avgcookiesPerHoursSales));
      this.total=this.total + this.cookiesPerHour[i];
    }
  },


  render: function(){
    let headerEl=document.createElement('h2');
    container.appendChild(headerEl);
    headerEl.textContent=this.location;

    let ulEl=document.createElement('ul');
    container.appendChild(ulEl);
    let liEl;

    for (let i=0; i < this.cookiesPerHour.length; i++) {
      liEl=document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${storeHour[i]} : ${this.cookiesPerHour[i]} Cookies`;
    }
    liEl=document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent='Total : ' + this.total + ' Cookies';
  },
};

Lima.randomCustomerPerHour();
Lima.cookiesSoldPerHour();
Lima.render();


function randomValue(min, max) {
  return Math.floor(Math.random()*(max-min)+min);
}
