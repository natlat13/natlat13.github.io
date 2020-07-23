// Nav Bar Ham Button
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

//5 Day Forecast
const apiForecast = "https://api.openweathermap.org/data/2.5/forecast?lat=20.5083&lon=-86.9458&units=imperial&APPID=f10fe0a4423c6d05fbdfb9677e974545";

fetch(apiForecast)
    .then((response) => response.json())
    .then((jsonObject) => {

        const fiveDayForecast = jsonObject.list.filter(x => x.dt_txt.includes("12:00:00"));
        const daysOfWeek = ["SUN", "MON", "TUES", "WED", "THURS", "FRI", "SAT"];

        let i = 0;
        fiveDayForecast.forEach(forecast => {
            let d = new Date(forecast.dt_txt);
            document.getElementById(`temp${i + 1}`).innerHTML = `${forecast.main.temp.toFixed(0)}&deg;F`;
            document.getElementById(`day${i + 1}`).textContent = daysOfWeek[d.getDay()];
            const imgsrc = `http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`;
            const desc = forecast.weather[0].description;
            document.getElementById(`icon${i + 1}`).setAttribute('src', imgsrc);
            document.getElementById(`icon${i + 1}`).setAttribute('alt', desc);
            i++;

        });
    })


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