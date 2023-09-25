// console.log("TEST");

function initMobile() {
  console.log("is-mobile");
}

function initTablet() {
  console.log("is-tablet");
}

function initDesktop() {
  console.log("is-desktop");
}

ssm.addStates([
  {
    id: "mobile",
    query: "(max-width: 640px)",
    onEnter: function () {
      initMobile();
    },
  },
  {
    id: "tablet",
    query: "(min-width: 641px) and (max-width: 992px)",
    onEnter: function () {
      initTablet();
    },
  },
  {
    id: "desktop",
    query: "(min-width: 993px)",
    onEnter: function () {
      initDesktop();
    },
  },
]);

/* -================= subscribe form validation =========================*/
function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const submitButton = document.getElementById("submitButton");
  const formContainer = document.getElementById("formContainer");
  const successMessage = document.getElementById("successMessage");

  let isValid = true;

  if (name === "") {
    nameError.innerHTML = "This field is required";
    nameError.style.color = "red";
    isValid = false;
  } else {
    nameError.innerHTML = "";
  }

  const emailData = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailData.test(email)) {
    emailError.innerHTML = "Please enter a valid email address";
    emailError.style.color = "red";
    isValid = false;
  } else {
    emailError.innerHTML = "";
  }

  if (isValid) {
    formContainer.style.display = "none";
    successMessage.style.display = "block";
  }
}

/* -================= mobile menu =========================*/

const menuButton = $(".menu-button");
const darkOverlay = $(".dark-overlay");
const mobileMenu = $(".mobile-menu");

$(document).on("click", ".menu-button", handleMenu);
$(document).on("click", ".is-submenu", handleToggleMenu);

function handleMenu(e) {
  e.preventDefault();
  darkOverlay.toggleClass("visible");
  mobileMenu.toggleClass("visible");
}

function handleToggleMenu(e) {
  e.preventDefault();
  const $this = $(this);
  $this
    .parent(".has-submenu")
    .toggleClass("opened")
    .siblings("li")
    .removeClass("opened")
    .find("ul")
    .slideUp();

  $this.next("ul").slideToggle(500, function () {
    $(this).find(".has-submenu").removeClass("opened").children("ul").hide();
  });
}

function resetMobileMenu() {
  darkOverlay.removeClass("visible");
  mobileMenu.removeClass("visible");
  $(".mobile-navigation .has-submenu").removeClass("opened").find("ul").hide();
}

/* -================= login-form =========================*/

const loginButton = $(".login-button");
const loginMenu = $(".login");
const closeIcon = $(".icon-close_login");

$(document).on("click", ".login-button", handleLogin);
closeIcon.on("click", handleClose);

function handleLogin(e) {
  e.preventDefault();
  darkOverlay.addClass("visible");
  loginMenu.addClass("visible");
}

function handleClose(e) {
  e.preventDefault();
  darkOverlay.removeClass("visible");
  loginMenu.removeClass("visible");
}
/* -================= store form =========================*/

const storeButton = $(".store-btn");
const storePanel = $(".cart-side-panel");
const closeIconStore = $(".icon-close_store");

$(document).on("click", ".store-btn", handleStore);
closeIconStore.on("click", handleCloseStore);

function handleStore(e) {
  e.preventDefault();
  darkOverlay.addClass("visible");
  storePanel.addClass("visible");
}

function handleCloseStore(e) {
  e.preventDefault();
  darkOverlay.removeClass("visible");
  storePanel.removeClass("visible");
}

/* ========== counter offer counter ============ */
function formatNumber(number) {
  return number < 10 ? "0" + number : number;
}

function updateCounter() {
  const currentDate = new Date();
  const newYearDate = new Date(currentDate.getFullYear() + 1, 0, 1);

  const timeDifference = newYearDate - currentDate;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = formatNumber(days);
  document.getElementById("hours").textContent = formatNumber(hours);
  document.getElementById("minutes").textContent = formatNumber(minutes);
  document.getElementById("seconds").textContent = formatNumber(seconds);
}
setInterval(updateCounter, 1000);
updateCounter();

/*=========== map =========== */
var map = L.map("map").setView([-37.81801113858057, 144.9642670099616], 13);

var marker = L.marker([-37.81801113858057, 144.9642670099616]).addTo(map);
marker
  .bindPopup("<b>Hi, dear customer! </b><br>You can visit us here!")
  .openPopup();

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

/* =========== adding a cart ============ */
const cartBoxes = document.querySelectorAll(".cart-box");
const userBoxCount = document.querySelector(".user-box__count");
let count = 0;

cartBoxes.forEach((cartBox) => {
  cartBox.addEventListener("click", function () {
    count++;
    userBoxCount.textContent = count;
  });
});

/* ============ navigation ================ */
const computerNavItem = document.querySelector(".nav-desktop__item_computer");
const smartphoneNavItem = document.querySelector(
  ".nav-desktop__item_smartphone"
);
const watchNavItem = document.querySelector(".nav-desktop__item_watch");
const tvNavItem = document.querySelector(".nav-desktop__item_tv");
const tabletsNavItem = document.querySelector(".nav-desktop__item_tablets");
const gamingNavItem = document.querySelector(".nav-desktop__item_gaming");
/* ====== containers ======*/
const computerContainer = document.querySelector(".container_computer");
const smartphoneContainer = document.querySelector(".container_smartphone");
const watchContainer = document.querySelector(".container_watch");
const tvContainer = document.querySelector(".container_tv");
const tabletsContainer = document.querySelector(".container_tablets");
const gamingContainer = document.querySelector(".container_gaming");

computerNavItem.addEventListener("mouseover", () => {
  computerContainer.style.display = "block";
  smartphoneContainer.style.display = "none";
  watchContainer.style.display = "none";
  tvContainer.style.display = "none";
  tabletsContainer.style.display = "none";
  gamingContainer.style.display = "none";
});

smartphoneNavItem.addEventListener("mouseover", () => {
  computerContainer.style.display = "none";
  smartphoneContainer.style.display = "block";
  watchContainer.style.display = "none";
  tvContainer.style.display = "none";
  tabletsContainer.style.display = "none";
  gamingContainer.style.display = "none";
});

watchNavItem.addEventListener("mouseover", () => {
  computerContainer.style.display = "none";
  smartphoneContainer.style.display = "none";
  watchContainer.style.display = "block";
  tvContainer.style.display = "none";
  tabletsContainer.style.display = "none";
  gamingContainer.style.display = "none";
});

tvNavItem.addEventListener("mouseover", () => {
  computerContainer.style.display = "none";
  smartphoneContainer.style.display = "none";
  watchContainer.style.display = "none";
  tvContainer.style.display = "block";
  tabletsContainer.style.display = "none";
  gamingContainer.style.display = "none";
});

tabletsNavItem.addEventListener("mouseover", () => {
  computerContainer.style.display = "none";
  smartphoneContainer.style.display = "none";
  watchContainer.style.display = "none";
  tvContainer.style.display = "none";
  tabletsContainer.style.display = "block";
  gamingContainer.style.display = "none";
});

gamingNavItem.addEventListener("mouseover", () => {
  computerContainer.style.display = "none";
  smartphoneContainer.style.display = "none";
  watchContainer.style.display = "none";
  tvContainer.style.display = "none";
  tabletsContainer.style.display = "none";
  gamingContainer.style.display = "block";
});

document.querySelector(".main-nav").addEventListener("mouseleave", () => {
  computerContainer.style.display = "none";
  smartphoneContainer.style.display = "none";
  watchContainer.style.display = "none";
  tvContainer.style.display = "none";
  tabletsContainer.style.display = "none";
  gamingContainer.style.display = "none";
});
