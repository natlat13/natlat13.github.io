//JSON Pricing
const requestURL = "https://natlat13.github.io/finalproject/json/index.json";

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const pricing = jsonObject['pricing']
        let table = document.createElement('table');
        

        for (let i = 0; i < pricing.length; i++) {
            let tr = document.createElement('tr');
            let td = document.createElement('td');
            let td2 = document.createElement('td');
            let td3 = document.createElement('td');
            let td4 = document.createElement('td');
            let td5 = document.createElement('td');
            let td6 = document.createElement('td');

            td.textContent = pricing[i].type;
            td2.textContent = pricing[i].maxPerson;
            td3.textContent = pricing[i].reservation.halfDay;
            td4.textContent = pricing[i].reservation.fullDay;
            td5.textContent = pricing[i].walkIn.halfDay;
            td6.textContent = pricing[i].walkIn.fullDay;
            table.appendChild(tr);
            tr.appendChild(td);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tr.appendChild(td6);

            document.querySelector('table.price-table').appendChild(table);
        }
        let img = document.createElement('img');
    });

/* Nav Bar Ham Button*/
function toggleMenu() {
    document.getElementsByClassName('navigation')[0]
        .classList.toggle('responsive');
}

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