const images = document.querySelectorAll('[data-src]');

function preloadImage(img) {
  const src = img.getAttribute("data-src");
    if(!src) {
      return;
    }
    img.src = src;
    img.removeAttribute('data-src');
}

  const imgOptions = {
threshold: 0,
rootMargin: "0px 0px -200px 0px"
  };

  const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        preloadImage(entry.target);
        imgObserver.unobserve(entry.target);
      }
    });
  }, imgOptions);

  images.forEach(image => {
    imgObserver.observe(image);
  });



 /* Nav Bar */
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