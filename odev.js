import data from "./data.js"
import { createTableElements } from "./main.js";

/*
  ALWAYS USE IMPORTED data ARRAY TO MAKE MANIPULATIONS
  ID for allcities table is #allcities
  ID for singlecity table is #singlecity
/*
/*
* PASS ARRAY TO createTableElements function to fill tables
* first argument - data
* second argument - tableId
* Example createTableElements([{name: "Istanbul"}], "allcities");
*/

/*
    ids for buttons and select
    Population - bigger than 500.000 => #populationBigger
    land area - less than 1000 => #landAreaLess
    Does any city has population less than 100.000? => #isPopulationLess
    Does every city has land area bigger than 100? => #isLandBigger
    city select => #selectcity
*/

/* RESET ACTION */
document.querySelector("#reset").addEventListener("click", () => {
  createTableElements(data, "allcities");
  createTableElements([], "singlecity")
});


/* START CODING HERE */

// Population - bigger than 500.000 
document.querySelector("#populationBigger").addEventListener("click", () => {

  const biggerThan500k = data.filter(value => value.population > 500000);
  createTableElements(biggerThan500k, "allcities");

});

/*  // Filter, bu şekilde de yazılabilir.
document.querySelector("#populationBigger").addEventListener("click", () => {
   let biggerThan500k = data.filter(function(value){
     if(value.population > 500000) {
        return true;
     }
   } 
  ); 
  createTableElements(biggerThan500k,"allcities"); 
});
*/

// land area - less than 1000
document.querySelector("#landAreaLess").addEventListener("click", () => {
  const landAreaLess1K = data.filter(value => value.landArea <= 1000);
  createTableElements(landAreaLess1K, "allcities");

});

// Does any city has population less than 100.000?
document.querySelector("#isPopulationLess").addEventListener("click", () => {
  const lessThan100K = data.find(value => value.population <= 100000);
  if (lessThan100K) {
    alert("YES => " + lessThan100K.name);
  } else {
    alert("NO");
  }
});

// Does every city has land area bigger than 100?
document.querySelector("#isLandBigger").addEventListener("click", () => {
  const everyLandAreaBT100 = data.every(value => value.landArea > 100);  // data içerisinde istenen özelliğe sahip tüm değerleri kontrol edip boolean değer döndürür.
  if (everyLandAreaBT100) {
    alert("YES");
  } else {
    alert("NO");
  }
});

// Choose yazan select secim yapildiginda 2. tablo olan, found item tablosunu selectde secilen sehir ile dolduralim.

// data içerisindeki city isimlerini array şeklinde tutuyoruz.
const cityNamesArray = data.map(value => value.name);
const citySelect = document.querySelector(".custom-select");
// Select City içeriğini boşaltıyoruz.
citySelect.innerHTML = ""

cityNamesArray.forEach((e) => {
  // cityleri, optionlar olarak create ediyoruz.
  const cityCreate = document.createElement("option");
  cityCreate.setAttribute("value", e);
  cityCreate.textContent = e;
  citySelect.appendChild(cityCreate);
});

// Choose yazan select secim yapildiginda 2. tablo olan, found item tablosunu selectde secilen sehir ile dolduralim.

// change eevnti ile Select City'de seçilen city name'ni alabiliyoruz.
citySelect.addEventListener("change", (e) => {
  const nameOfSelectedCity = e.target.value;
  const selectCity = data.filter(city => city.name === nameOfSelectedCity);
  createTableElements(selectCity, "singlecity");
});