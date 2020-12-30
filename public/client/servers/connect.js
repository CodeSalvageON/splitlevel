let png_img;
let ent_img;
let bmt_img;
let snd_img;
let lbr_img;
let yrd_img;
let tgy_img;
let rst_img;
let lvg_img;

let custom_styles;
let custom_scripts;

let music_playlist;

$("#enter-ip").submit(function () {
  event.preventDefault();

  fetch ("/connect", {
    method : "POST",
    headers : {
      'Content-Type' : 'application/json'
    },
    body : JSON.stringify({
      thing : document.getElementById("server-ip").value
    })
  })
  .then(response => response.text())
  .then(data => {
    console.log(data);

    $("#pre-client").fadeOut(2000);

    const json = JSON.parse(data);

    png_img = json.screen1;
    ent_img = json.screen2;
    bmt_img = json.screen3;
    snd_img = json.screen4;
    lbr_img = json.screen5;
    yrd_img = json.screen6;
    tgy_img = json.screen7;
    rst_img = json.screen8;
    lvg_img = json.screen9;

    custom_styles = json.styles;
    custom_scripts = json.scripts;

    music_playlist = json.playlist;

    split_level_house.src = png_img;

    enterance.style.backgroundImage = "url('" + ent_img + "')";
    basement.style.backgroundImage = "url('" + bmt_img + "')";
    second_floor.style.backgroundImage = "url('" + snd_img + "')";
    library.style.backgroundImage = "url('" + lbr_img + "')";
    yard.style.backgroundImage = "url('" + yrd_img + "')";
    room_1.style.backgroundImage = "url('" + tgy_img + "')";
    room_2.style.backgroundImage = "url('" + rst_img + "')";
    living_room.style.backgroundImage = "url('" + lvg_img + "')";

    document.getElementById("music").src = "https://www.youtube.com/embed/videoseries?controls=0&amp;list=" + music_playlist.replace("https://www.youtube.com/playlist?list=", "");

    setTimeout(function () {
      $("#message-box").fadeIn(2000);
      $("#title-screen").fadeIn(2000);
    }, 2000);
  })
  .catch(error => {
    throw error;
  });
});