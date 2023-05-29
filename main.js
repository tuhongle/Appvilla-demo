var swiper = new Swiper(".logoSwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

//? change header color when scrolling
const button = document.getElementById("first-button");

function changeHeaderColor() {
  let width = window.innerWidth;
  let scrollPixels = window.scrollY;
  const brandLogo = document.querySelector(".navbar-brand img");
  const navbar = document.getElementById("navbar-scrollspy");
  const aLink = document.querySelectorAll(
    ".navbar-nav a.nav-link:not(.active)"
  );
  const aLinkActive = document.querySelector(".navbar-nav a.nav-link.active");
  const togglerIcons = document.querySelectorAll(".toggler-icon");

  if (scrollPixels > 50) {
    brandLogo.src = "./assets/logo Tu dark.png";
    navbar.setAttribute(
      "style",
      "background-color: white !important; box-shadow: 0 5px 5px rgba(0,0,0,0.1) !important"
    );
    navbar.classList.replace("navbar-dark", "navbar-light");
    aLink.forEach((ele) => {
      ele.setAttribute("style", "color: #081828 !important");
      ele.onmouseover = function (evt) {
        evt.target.setAttribute("style", "color: #FF6B81 !important");
      };
      ele.onmouseout = function (evt) {
        evt.target.setAttribute("style", "color: #081828 !important");
      };
    });
    aLinkActive.setAttribute("style", "color: #FF6B81 !important");
    aLinkActive.onmouseover = null;
    aLinkActive.onmouseout = null;
    togglerIcons.forEach((ele) => {
      ele.setAttribute("style", "background-color: #081828 !important");
    });
    button.addEventListener("mouseover", (evt) => {
      evt.target.setAttribute(
        "style",
        "background-color: #081828 !important; color: #FFFFFF !important"
      );
    });
    button.addEventListener("mouseout", (evt) => {
      evt.target.setAttribute("style", "background-color: #FF6B81 !important");
    });
  } else {
    brandLogo.src = "./assets/logo Tu white.png";
    navbar.setAttribute("style", "background-color: #FF6B81 !important");
    navbar.classList.replace("navbar-light", "navbar-dark");
    if (width >= 992) {
      aLink.forEach((ele) => {
        ele.setAttribute("style", "color: #FFFFFF !important");
        ele.onmouseover = null;
        ele.onmouseout = null;
      });
      aLinkActive.setAttribute("style", "color: #FFFFFF !important");
      aLinkActive.onmouseover = null;
      aLinkActive.onmouseout = null;
    } else {
      aLink.forEach((ele) => {
        ele.setAttribute("style", "color: #081828 !important");
        ele.onmouseover = function (evt) {
          evt.target.setAttribute("style", "color: #FF6B81 !important");
        };
        ele.onmouseout = function (evt) {
          evt.target.setAttribute("style", "color: #081828 !important");
        };
      });
      aLinkActive.setAttribute("style", "color: #FF6B81 !important");
      aLinkActive.onmouseover = null;
      aLinkActive.onmouseout = null;
    }
    togglerIcons.forEach((ele) => {
      ele.setAttribute("style", "background-color: #FFFFFF !important");
    });
    button.addEventListener("mouseover", (evt) => {
      evt.target.setAttribute("style", "background-color: #FFFFFF !important");
    });
    button.addEventListener("mouseout", (evt) => {
      evt.target.setAttribute("style", "background-color: #FF6B81 !important");
    });
  }
}

window.addEventListener("scroll", changeHeaderColor);

//! Hover on BLOG - hơi rườm rà và rắc rối, qua CSS làm

/* const blog = document.getElementById("blogButton");

if (width >= 992) {
  blog.onmouseover = function (evt) {
    blog.children[1].classList.add("show");
  };
  blog.onmouseout = function (evt) {
    blog.children[1].classList.remove("show");
  };
} */

//? remove class SHOW to dropdown-menu blog when width < 992px

const blog = document.getElementById("blogButton");

function toggleClassShow() {
  let width = window.innerWidth;
  if (width < 992) {
    blog.children[1].classList.remove("show");
  } else {
    blog.children[1].classList.add("show");
  }
}

toggleClassShow();

window.addEventListener("resize", toggleClassShow);

//? Initialize Tooltips

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
