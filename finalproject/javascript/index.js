//JSON Pricing
const requestURL = "https://natlat13.github.io/finalproject/json/index.json";

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject){
console.log(jsonObject);
const pricing = jsonObject['pricing']
});

/* Nav Bar Ham Button*/
function toggleMenu() {
    document.getElementsByClassName('navigation')[0]
        .classList.toggle('responsive');
}

//Automatic Slideshow
var myIndex = 0;
carousel();
function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000); // Change image every 2 seconds
  }

  //Current Weather Section
const apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=20.5083&lon=-86.9458&units=imperial&APPID=f10fe0a4423c6d05fbdfb9677e974545";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsonObject) => {
        document.getElementById('currently').textContent = jsonObject.weather[0].description;
        document.getElementById('temp').innerHTML = `${jsonObject.main.temp}&deg;F`;
        document.getElementById('humidity').textContent = jsonObject.main.humidity + "%";
    });

//Footer
document.getElementById('year').textContent = new Date().getFullYear();

var d = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.getElementById("day").innerHTML = days[d.getDay()];

var date = new Date();
document.getElementById("date").innerHTML = date.getDate();

var m = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October",
    "November", "December"
];
document.getElementById("month").innerHTML = months[m.getMonth()]; 