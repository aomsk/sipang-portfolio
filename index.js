hamburger = document.querySelector(".hamburger");
hone = document.querySelector(".Hone");
about = document.querySelector(".About");
skills = document.querySelector(".Skills");
projects = document.querySelector(".Projects");
contact = document.querySelector(".Contact");

hamburger.onclick = function () {
  navbar = document.querySelector(".nav-bar");
  navbar.classList.toggle("active");
};
hone.onclick = function () {
  navbar = document.querySelector(".nav-bar");
  navbar.classList.toggle("active");
};
about.onclick = function () {
  navbar = document.querySelector(".nav-bar");
  navbar.classList.toggle("active");
};
skills.onclick = function () {
  navbar = document.querySelector(".nav-bar");
  navbar.classList.toggle("active");
};
projects.onclick = function () {
  navbar = document.querySelector(".nav-bar");
  navbar.classList.toggle("active");
};
contact.onclick = function () {
  navbar = document.querySelector(".nav-bar");
  navbar.classList.toggle("active");
};

const observer = new IntersectionObserver((entries) => {
  console.log("observer: ", observer);
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // console.log("entry.isIntersecting: ", entry.isIntersecting);
      entry.target.classList.add("show");
    } else {
      // console.log("entry.isIntersecting: ", entry.isIntersecting);
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((element) => observer.observe(element));
