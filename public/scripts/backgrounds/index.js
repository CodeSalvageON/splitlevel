const el_1 = document.querySelector("#title-screen");
const el_2 = document.querySelector("#enterance");
const el_3 = document.querySelector("#info");
const el_4 = document.querySelector("#basement");
const el_5 = document.querySelector("#second-floor");
const el_6 = document.querySelector("#library");
const el_7 = document.querySelector("#library-info");
const el_8 = document.querySelector("#yard");
const el_9 = document.querySelector("#yard-info");
const el_10 = document.querySelector("#room1");
const el_11 = document.querySelector("#room1-info");

el_1.addEventListener("mousemove", function (event) {
  el_1.style.backgroundPositionX = - event.offsetX * 1.8 + "px";
  el_1.style.backgroundPositionY = - event.offsetY + 80 + "px";
});

el_2.addEventListener("mousemove", function (event) {
  el_2.style.backgroundPositionX = - event.offsetX * 1.8 + "px";
  el_2.style.backgroundPositionY = - event.offsetY + 80 + "px";
});

el_4.addEventListener("mousemove", function (event) {
  el_4.style.backgroundPositionX = - event.offsetX * 1.8 + "px";
  el_4.style.backgroundPositionY = - event.offsetY + 80 + "px";
});

el_5.addEventListener("mousemove", function (event) {
  el_5.style.backgroundPositionX = - event.offsetX * 1.8 + "px";
  el_5.style.backgroundPositionY = - event.offsetY + 80 + "px";
});

el_6.addEventListener("mousemove", function (event) {
  el_6.style.backgroundPositionX = - event.offsetX * 1.8 + "px";
  el_6.style.backgroundPositionY = - event.offsetY + 80 + "px";
});

el_8.addEventListener("mousemove", function (event) {
  el_8.style.backgroundPositionX = - event.offsetX * 1.8 + "px";
  el_8.style.backgroundPositionY = - event.offsetY + 80 + "px";
});

el_10.addEventListener("mousemove", function (event) {
  el_10.style.backgroundPositionX = - event.offsetX * 1.8 + "px";
  el_10.style.backgroundPositionY = - event.offsetY + 80 + "px";
});

el_1.addEventListener("touchmove", function (event) {
  el_1.style.backgroundPositionX = - event.offsetX * 1.8 + "px";
  el_1.style.backgroundPositionY = - event.offsetY + 80 + "px";
}, false);