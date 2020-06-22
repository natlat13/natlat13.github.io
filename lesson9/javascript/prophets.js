const requestURL = "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        for (let i = 0; i < jsonObject.prophets.length; i++) {
            let card = document.createElement("section");
            let h2 = document.createElement("h2");
            let p = document.createElement('p');
            let p2 = document.createElement('p');
            let img = document.createElement('img');

            h2.textContent = jsonObject.prophets[i].name + ' ' + jsonObject.prophets[i].lastname;
            p.textContent = "Birthdate: " + jsonObject.prophets[i].birthdate;
            p2.textContent = "Birthplace: " + jsonObject.prophets[i].birthplace;
            img.setAttribute('src', jsonObject.prophets[i].imageurl);


            card.appendChild(h2);
            card.appendChild(p);
            card.appendChild(p2);
            card.appendChild(img);

            document.querySelector('div.cards').appendChild(card);

        }
    });




