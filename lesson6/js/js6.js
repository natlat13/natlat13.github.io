function toggleMenu () {
    document.getElementsByClassName("navigation")[0]
    .classList.toggle("responsive");
}

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

let da = new Date();
let dayOfWeek = da.getDay();

if (dayOfWeek == 5) {
    document.getElementById("banner").style.display = 'block';
}
else {
    document.getElementById("banner").style.display = 'none';
}


var tempF = parseFloat(document.getElementById("high").innerHTML);
var speed = parseFloat(document.getElementById("wind-speed").innerHTML);
var chill = windChill(tempF, speed);

function windChill(tempF, speed) {
    if (tempF <= 50 && speed > 3){
        let f = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * tempF * Math.pow(speed, 0.16));
    return Math.round(f) + "&deg;F";
    }
    else {
        return "N/A";
    }
}
document.getElementById("windchill").innerHTML = chill;

//Font loader
WebFont.load({
    google: {
      families: [
         'Playfair Display, Open Sans Condensed'
      ]
    }
  });