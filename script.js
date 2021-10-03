////////HEADER RESPONSIVE NAVBAR

const links = document.querySelectorAll("nav ul li a");
const icon = document.getElementById("icon");
const navShow = document.querySelector("nav ul");

links.forEach((link) => {
  link.addEventListener("click", function () {
    removeClass();

    link.classList.add("active");
  });
});

function removeClass() {
  links.forEach((cur) => {
    cur.classList.remove("active");
  });
}

icon.addEventListener("click", function () {
  navShow.classList.toggle("show");
});

/////sticky navbar
const nav = document.querySelector("nav");
window.addEventListener("scroll", function () {
  nav.classList.toggle("sticky", window.scrollY > 400);
});

//////animation

window.addEventListener("scroll", reveal);

function reveal() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((cur) => {
    const windowHeight = window.innerHeight;
    const revealTop = cur.getBoundingClientRect().top;
    const revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      cur.classList.add("active");
    } else {
      cur.classList.remove("active");
    }
  });
}

///implement google maps

function initMap() {
  const loc = { lat: 9.158984, lng: -83.743792 };

  const map = new google.maps.Map(document.querySelector(".map"), {
    zoom: 14,
    center: loc,
  });

  const marker = new google.maps.Marker({
    position: loc,
    map: map,
  });
}
