const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=f10fe0a4423c6d05fbdfb9677e974545";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsonObject) => {
        document.getElementById('currently').textContent = jsonObject.weather[0].description;
        document.getElementById('temp').textContent = jsonObject.main.temp;
        document.getElementById('humidity').textContent = jsonObject.main.humidity;
        document.getElementById('wind-speed').textContent = jsonObject.wind.speed;
        document.getElementById('windchill').innerHTML = windChill(jsonObject.main.temp, jsonObject.wind.speed);

    });

const apiURL2 = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=f10fe0a4423c6d05fbdfb9677e974545";

fetch(apiURL2)
    .then((response) => response.json())
    .then((jsonObject) => {

        const fiveDayForecast = jsonObject.list.filter(x => x.dt_txt.includes("15:00:00"));
        const daysOfWeek = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

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


function windChill(tempF, speed) {
    if (tempF <= 50 && speed > 3) {
        let f = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * tempF * Math.pow(speed, 0.16));
        return Math.round(f) + "&deg;F";
    }
    else {
        return "N/A";
    }
}


//footer date
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
