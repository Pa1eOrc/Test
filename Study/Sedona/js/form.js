var div = document.querySelector(".chekc-hotels");
var popup = document.querySelector(".hidden");

div.addEventListener("click", function (evt) {
  console.log("click on button");
});

popup.classList.add("show");