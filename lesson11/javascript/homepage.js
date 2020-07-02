const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const townsArray = jsonObject['towns']
        for (let i = 0; i < townsArray.length; i++) {

            var towns = townsArray.filter(town => (town.name == 'Preston' || town.name == 'Soda Springs' || town.name == 'Fish Haven'));
            
           towns = towns[i];


            let townCard = document.createElement('section');
            let div = document.createElement('div');
            let townName = document.createElement('h2');
            let year = document.createElement('p');
            let pop = document.createElement('p');
            let rain = document.createElement('p');
            let img = document.createElement('img');


            townName.innerHTML = towns.name;
            year.innerHTML = `Year Founded: ${towns.yearFounded}`;
            pop.innerHTML = `Population: ${towns.currentPopulation}`;
            rain.innerHTML = `Annual Rain Fall ${towns.averageRainfall}`;
            img.setAttribute('src', "images/" + towns.photo);
            img.setAttribute('alt', "pic of " + towns.name);


            townCard.appendChild(div);
            div.appendChild(townName);
            div.appendChild(year);
            div.appendChild(pop);
            div.appendChild(rain);
            townCard.appendChild(img);


            document.querySelector('div.townCard').appendChild(townCard);
        }

    });

/* Nav Bar */
function toggleMenu() {
    document.getElementsByClassName('navigation')[0]
        .classList.toggle('responsive');
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