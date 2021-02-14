'use strict';

// Instructions

// Before you begin, create a new repository within GitHub callled “cookiesPerHour-stand”. Make sure thatthis repository is propertly set up with a license and a readme. Clonethis repo down to your local machine

// Create two new pages within your project. One for Sales Data (sales.html) and another for the homepage (index.html).
// Sales Data

// Within your javascript file (example: app.js), create separate JS object literals for each shop location that outputs the following to the sales.html file:

//     Stores the min/max hourly customers, and the average cookiesPerHours per customer, in object properties
//     Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
//     Calculate and store the simulated amounts of cookiesPerHours purchased for each hour at each location using average cookiesPerHours purchased and the random number of customers generated
//     Store the results for each location in a separate array… perhaps as a property of the object representing that location
//     Display the values of each array as unordered lists in the browser

//     Calculating the sum of these hourly allAverages; your output for each location should look likethis:

//     Seattle
//         6am: 16 cookiesPerHours
//         7am: 20 cookiesPerHours
//         8am: 35 cookiesPerHours
//         9am: 48 cookiesPerHours
//         10am: 56 cookiesPerHours
//         11am: 77 cookiesPerHours
//         12pm: 93 cookiesPerHours
//         1pm: 144 cookiesPerHours
//         2pm: 119 cookiesPerHours
//         3pm: 84 cookiesPerHours
//         4pm: 61 cookiesPerHours
//         5pm: 23 cookiesPerHours
//         6pm: 42 cookiesPerHours
//         7pm: 57 cookiesPerHours
//         allAverage: 875 cookiesPerHours

// Display the lists on sales.html. We will be adding features tothis application and working with its layout in the upcoming labs.

// Here are the starting numbers that you’ll need to build these objects:
// Location 	Min / Cust 	Max / Cust 	Avg cookiesPerHour / Sale
// Seattle 	23 	65 	6.3
// Tokyo 	3 	24 	1.2
// Dubai 	11 	38 	3.7
// Paris 	20 	38 	2.3
// Lima 	2 	16 	4.6

// These numbers are simply Pat’s estimates for now, but eventually, once there has been some history collected that provides more accurate numbers, we’ll want the ability to update these numbers for each location, and to add/remove locations. But we’ll not build all of that today. Make sure to make each location is its own JavaScript object.
// Home Page

// Read below for the requirements of your index.html page.

// Note: Everything listed below is a stretch goal for lab 06. All of these requirements will be required for the final submission of the project, so start implementing these early.

// In addition to the provided picture of the fish, your index.html file should contain:

//     A custom Google font for highlights
//     A specified standard sans-serif web font for data (such as Arial, Verdana, or Helvetica)
//     A specified standard serif web font for text (such as Georgia, Times, etc.)
//     Specified different font colors for all three font usages
//     A background color for the default page background (make sure font colors have good contrast and are readable onthis background)
//     A different background color for elements such boxes and tables (so make sure the font colors contrast againstthis well, too!)
//     Anything else you’d like to add related to style. But remember: simplicity, clarity, and consistency are good things in design.
//     Be thoughtful about layout and overall organization of the page.
//     Include all of the typical stuff that you’ll find on the home page of a business: locations, storeHour, contact information, some text about how awesome the business is, etc. Be creative, and again, think about what is meaningful to a typical end user.

// Sales Data

let storeHour=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm',];
let seattle={
  location: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgcookiesPerHoursSales: 6.3,
  allAverage: 0,
  customerPerHour: [],
  cookiesPerHour: [],



  randomCustomerPerHour: function(){
    for (let i=0; i<storeHour.length-1; i=i+1) {
      this.customerPerHour.push(randomValue(this.minCust, this.maxCust));
    }
  },



  randomCookiesPerHour: function(){
    for (let i=0; i<storeHour.length-1; i=i+1) {
      this.cookiesPerHour.push(randomValue(this.minCust, this.maxCust)*Math.floor(this.avgcookiesPerHoursSales)
      );
      this.allAverage=this.allAverage+this.cookiesPerHour[i];
    }
    this.cookiesPerHour[this.cookiesPerHour.length]=this.allAverage;
  },



  createElement: function(){
    let mainElement=document.getElementById('mainElement');
    let paragraphElement=document.createElement('p');
    mainElement.appendChild(paragraphElement);
    paragraphElement.textContent=this.location;
    let unOrderdList=document.createElement('ul');
    mainElement.appendChild(unOrderdList);
    let listElement;



    for (let i=0; i < this.cookiesPerHour.length; i=i+1) {
      listElement=document.createElement('li');
      unOrderdList.appendChild(listElement);
      listElement.textContent =
        storeHour[i]+' : '+this.cookiesPerHour[i]+' '+'cookies';

    }
  },
};

seattle.randomCustomerPerHour();
seattle.randomCookiesPerHour();
seattle.createElement();




function randomValue(min, max) {
  return Math.floor(Math.random()*(max-min)+min);
}