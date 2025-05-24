//Header Area
//Header Toggle
let headerArea = document.querySelector('#header_section');
let navToggleIcon = document.querySelector('#navToggle');

function navToggle() {
  headerArea.classList.toggle('header_show');

  navToggleIcon.classList.toggle('bi-x');
  navToggleIcon.classList.toggle('bi-list');
};


//Header Area
//Header Dropdown Toggle
let dropdownBtnIcon = document.querySelector('.dropdown_btn i.bi-menu-button');
let dropdownBtnSpan = document.querySelector('.dropdown_btn span');

let dropDown = document.querySelector('.dropdown_toggle');
let dropToggle = document.querySelector('.dropToggle');

function dropdownToggle() {
  dropdownBtnIcon.classList.toggle('dropdownBtnIcon');
  dropdownBtnSpan.classList.toggle('dropdownBtnSpan');

  dropDown.classList.toggle('dropShow');
  dropToggle.classList.toggle('dropIcon');
};


//Header Area
//Header Deep-Dropdown Toggle
let deepDropBtnSpan = document.querySelector('.dep_drop_btn span');

let deepDropDown = document.querySelector('.deepDropToggle');
let deepDropToggle = document.querySelector('.deep_drop_menu');

deepDropDown.addEventListener('click', function () {
  deepDropBtnSpan.classList.toggle('dropdownBtnSpan');

  deepDropDown.classList.toggle('dropIcon');
  deepDropToggle.classList.toggle('dropShow');
})


//Hero Area
//Typed js
var typed = new Typed(".auto-typed", {
  strings: ["Programmer", "Designer", "Freelancer", "Photographer"],
  typeSpeed: 90,
  backSpeed: 90,
  backDelay: 1700,
  loop: true,
  loopCount: Infinity
});

//Testimonial Area
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  freeMode: true,
  loop: true,
  speed: 600,
  autoplay: {
    "delay": 5000
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {
    "320": {
      "slidesPerView": 1,
      "spaceBetween": 40
    },
    "1200": {
      "slidesPerView": 3,
      "spaceBetween": 1
    }
  },
});