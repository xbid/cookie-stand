'use strict';

// Sales Data

let storeHour = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm',];
let container = document.getElementById('container');

let table = document.createElement('table');
container.appendChild(table);

// let arrofTotals = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
// let secondArr = [];

function Location(locationName, min, max, avg) {
  this.locationName = locationName;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.customerPerHour = [];
  this.numofCookiesPerHour = [];
  this.total = 0;
  // console.log(this);
}

Location.prototype.randomCustomerPerHour = function(){
  for (let i = 0; i < storeHour.length; i++) {
    this.customerPerHour.push(randomValue(this.min,this.max));
  }
};
Location.prototype.cookiesSoldPerHour = function(){
  for (let i = 0; i < storeHour.length; i++) {
    this.numofCookiesPerHour.push(Math.ceil(this.customerPerHour[i] * this.avg));
    this.total += this.numofCookiesPerHour[i];

    // arrofTotals[i] = arrofTotals[i] + this.numofCookiesPerHour[i];

  }
};

Location.prototype.render = function(){

  let tr = document.createElement('tr');
  table.appendChild(tr);

  let locationTitle = document.createElement('td');
  tr.appendChild(locationTitle);
  locationTitle.textContent = this.locationName;

  let td;
  for (let i = 0; i < this.numofCookiesPerHour.length; i++) {
    td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = this.numofCookiesPerHour[i];

  }
  let dailyTotal = document.createElement('td');
  tr.appendChild(dailyTotal);
  dailyTotal.textContent = this.total;
};

let seattle = new Location('Seattle', 23, 65, 6.3);
let tokyo = new Location('tokyo',3,24,1.2);
let dubai = new Location('dubai',11,38,3.7);
let paris = new Location('paris',20,38,2.3);
let lima = new Location('lima',2,16,4.6);
let arrOfObjects = [seattle,tokyo,dubai,paris,lima];

headerRow();

seattle.randomCustomerPerHour();
seattle.cookiesSoldPerHour();
seattle.render();

tokyo.randomCustomerPerHour();
tokyo.cookiesSoldPerHour();
tokyo.render();

dubai.randomCustomerPerHour();
dubai.cookiesSoldPerHour();
dubai.render();

paris.randomCustomerPerHour();
paris.cookiesSoldPerHour();
paris.render();

lima.randomCustomerPerHour();
lima.cookiesSoldPerHour();
lima.render();

footerRow();

// for (let i =0; i <seattle.numofCookiesPerHour.length; i++){
//   console.log(seattle.numofCookiesPerHour[i]);
// }

function headerRow(){

  let tr = document.createElement('tr');
  table.appendChild(tr);

  let emptyCell = document.createElement('th');
  tr.appendChild(emptyCell);

  let th;
  for (let i = 0; i < storeHour.length; i++) {
    th = document.createElement('th');
    tr.appendChild(th);
    th.textContent = storeHour[i];
  }
  let dailyTotalCell = document.createElement('th');
  tr.appendChild(dailyTotalCell);
  dailyTotalCell.textContent = 'Daily Location Total';
}

function footerRow (){
  let tr = document.createElement('tr');
  table.appendChild(tr);

  let thTotal = document.createElement('th');
  tr.appendChild(thTotal);
  thTotal.textContent = 'Totals';

  let th;
  let sum;
  let allTotals=0;
  for(let i=0 ; i < storeHour.length; i++){
    sum=0;
    for (let j = 0; j < arrOfObjects.length; j++) {
      sum = sum + arrOfObjects[j].numofCookiesPerHour[i];
    }
    allTotals = allTotals + sum;
    th = document.createElement('th');
    tr.appendChild(th);
    th.textContent = sum;
  }
  let theTotals = document.createElement('th');
  tr.appendChild(theTotals);
  theTotals.textContent=allTotals;
  // let th;
  // for (let i = 0; i < storeHour.length; i++) {
  //   th = document.createElement('th');
  //   tr.appendChild(th);
  //   th.textContent = arrofTotals[i];
  //   // console.log(this);

  // }
}




function randomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
