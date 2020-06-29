const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperialAPPID=f10fe0a4423c6d05fbdfb9677e974545";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsonObject) => {

        document.getElementById('weather-summary').textContent - jsonObject.list[0].weather[0].description;

        const forecast = jsonObject.list.filter(x => x.dt_txt.include("18:00:00"));
        const daysOfWeek = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
        console.log(forecast);
        let i = 0;
        forecast.forEach(fiveDayforecast => {
            let d = new Date(fiveDayforecast.dt_txt);
            document.getElementById(`temp.${i + 1}`).innerHTML = `${fiveDayforecast.main.temp.tofixed(0)}&deg;F`;
            document.getElementById(`day${i + 1}`).textContent = daysOfWeek[d.getday()];
            const imgsrc = `http://openweathermap.org/img/wn/${fiveDayforecast.weather[0].icon}@2x.png`;
            const desc = fiveDayforecast.weather[0].description;
            document.getElementById(`icon${i + 1}`).setAttribute('src', imgsrc);
            document.getElementById(`icon${i + 1}`).setAttribute('alt', desc);
            i++;

        });
    })

var tempF = parseFloat(document.getElementById("high").innerHTML);
var speed = parseFloat(document.getElementById("wind-speed").innerHTML);
var chill = windChill(tempF, speed);

function windChill(tempF, speed) {
    if (tempF <= 50 && speed > 3) {
        let f = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * tempF * Math.pow(speed, 0.16));
        return Math.round(f) + "&deg;F";
    }
    else {
        return "N/A";
    }
}
document.getElementById("windchill").innerHTML = chill;

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
