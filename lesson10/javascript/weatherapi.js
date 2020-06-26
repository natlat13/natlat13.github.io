const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={f10fe0a4423c6d05fbdfb9677e974545}"

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('current-temp').textContent = jsObject.main.temp;
    });