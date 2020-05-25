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