var link = document.querySelector(".login-link");
var popur = document.querySelector(".modal-login");
var close = document.querySelector(".modal-close");
var form = popur.querySelector("form");
var login = popur.querySelector("[name=login]");
var password = popur.querySelector("[name=password]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popur.classList.add("modal-show");
  console.log("Open form");
  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
});

close.addEventListener("click", function (evt) {
  console.log("Close form");
  evt.preventDefault();
  popur.classList.remove("modal-show");
  popur.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  console.log("Click Submit button");
  evt.preventDefault();
  popur.classList.remove("modal-error");
  popur.offsetWidth = popur.offsetWidth;
  popur.classList.add("modal-error");
  login.value = "";
  password.value = "";
  if (isStorageSupport) {
    localStorage.setItem("login", login.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popur.classList.contains("modal-show")) {
      popur.classList.remove("modal-show");
      popur.classList.remove("modal-error");
    }
  }
});