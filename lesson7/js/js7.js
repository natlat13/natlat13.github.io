let imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

imagesToLoad.forEach((img) => {
    loadImages(img);
  }); 

  /*const imgOptions = {};
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

  images.forEach(imgage => {
    imgObserver.observe(image);
  });
*/

  
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