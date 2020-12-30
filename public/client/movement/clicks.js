const message_box_typewriter = new Typewriter(message_box);

$(document).ready(function () {
  message_box_typewriter.typeString("Click anywhere on the house to enter.").start();
});

$("#what-is-this-place").click(function () {
  $("#title-screen").fadeOut(2000);
  $("#message-box").fadeOut(2000);

  setTimeout(function () {
    hideAll();

    $("#info").fadeIn(2000);
    $("#message-box").fadeIn(2000);

    $("#enterance").hide();

    message_box_typewriter.typeString("").deleteAll();
    message_box_typewriter.typeString("Read the letter.<br/>Press X to return to the house.").start();
  }, 2000);
});

$("#split-level-house").click(function () {
  $("#title-screen").fadeOut(2000);
  $("#message-box").fadeOut(2000);

  setTimeout(function () {
    hideAll();
    
    $("#enterance").fadeIn(2000);
    $("#message-box").fadeIn(2000);

    $("#info").hide();
    
    message_box_typewriter.typeString("").deleteAll();
    message_box_typewriter.typeString("Use WASD keys to move around.<br/>Press X to visit the basement level.").start();
  }, 2000);

  screen = 3;
});

$("#close-phone-modal").click(function () {
  $("#phone-modal").fadeOut(2000);
});

$("#open-servers").click(function () {
  window.open("/client");
});

$("#close-iphone-modal").click(function () {
  $("#iphone-modal").fadeOut(2000);
});