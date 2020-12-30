const title_screen = document.querySelector("#title-screen");
const split_level_house = document.querySelector("#split-level-house");
const enterance = document.querySelector("#enterance");
const message_box = document.querySelector("#message-box");
const info = document.querySelector("#info");
const basement = document.querySelector("#basement");
const second_floor = document.querySelector("#second-floor");
const library = document.querySelector("#library");
const library_info = document.querySelector("#library-info");
const yard = document.querySelector("#yard");
const yard_info = document.querySelector("#yard-info");
const room_1 = document.querySelector("#room1");
const room_1_info = document.querySelector("#room1-info");
const room_2 = document.querySelector("#room2");
const living_room = document.querySelector("#living-room");

let onTitleScreen = true;

let isDayInterval = setInterval(displayDayAndNight, 1000);

const space = `
`;

let screen = 1;

$("#message-box").hide();
$("#title-screen").hide();

$("#enterance").hide();
$("#info").hide();
$("#basement").hide();
$("#second-floor").hide();
$("#library").hide();
$("#library-info").hide();
$("#yard").hide();
$("#yard-info").hide();
$("#room1").hide();
$("#room1-info").hide();
$("#room2").hide();
$("#living-room").hide();

$("#phone-modal").fadeIn(2000);

function isDay() {
  const hours = (new Date()).getHours();
  return (hours >= 6 && hours < 15);
}

function displayDayAndNight () {
  if (isDay() === true) {
    title_screen.style.backgroundImage = "url('https://media.discordapp.net/attachments/759173234565316618/786018551928193064/bkg-sky.png?width=1311&height=671')";

    split_level_house.style.filter = "brightness(100%)";
  }

  else {
    title_screen.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/759173234565316618/786021666114240512/image.png')";

    split_level_house.style.filter = "brightness(50%)";
  }
}

function carsPassingBy () {
  if (onTitleScreen === true) {
    split_level_house.style.filter = "brightness(100%)";
    
    document.getElementById("car-passing-by").play();

    if (isDay() === false) {
      split_level_house.style.filter = "brightness(50%)";
    }
  }

  else {
    return false;
  }
}

displayDayAndNight();

console.log(isDay());