function hideAll () {
  $("#title-screen").hide();
  $("#info").hide();
  $("#enterance").hide();
  $("#info").hide();
  $("#basement").hide();
  $("#second-floor").hide();
  $("#library").hide();
  $("#library-info").hide();
  $("#phone-modal").hide();
  $("#yard").hide();
  $("#yard-info").hide();
  $("#room1").hide();
  $("#room1-info").hide();
  $("#room2").hide();
  $("#living-room").hide();
}

$(this).keypress(function (event) {
  console.log(event.keyCode);

  if (screen === 1) {
    if (event.keyCode === 120) {
      console.log("Pressed X");

      $("#title-screen").fadeOut(2000);
      $("#message-box").fadeOut(2000);

      setTimeout(function () {
        hideAll();

        $("#info").fadeIn(2000);
        $("#message-box").fadeIn(2000);

        document.getElementById("paper-sound").play();

        $("#enterance").hide();

        message_box_typewriter.typeString("").deleteAll();
        message_box_typewriter.typeString("Read the letter.<br/>Press X to return to the house.").start();
      }, 2000);

      screen = 2;
    }
  }

  else if (screen === 2) {
    if (event.keyCode === 120) {
      console.log("Pressed X");

      $("#info").fadeOut(2000);
      $("#message-box").fadeOut(2000);

      setTimeout(function () {
        hideAll();

        $("#title-screen").fadeIn(2000);
        $("#message-box").fadeIn(2000);

        message_box_typewriter.typeString("").deleteAll();
        message_box_typewriter.typeString("Click anywhere on the house to enter.<br/>Press X to read the letter.").start();
      }, 2000);
    }
  }

  else if (screen === 3) {
    if (event.keyCode === 119) {
      console.log("Pressed W");

      $("#enterance").fadeOut(2000);
      $("#message-box").fadeOut(2000);

      setTimeout(function () {
        hideAll();

        $("#title-screen").fadeIn(2000);
        $("#message-box").fadeIn(2000);
        
        message_box_typewriter.typeString("").deleteAll();
        message_box_typewriter.typeString("Click anywhere on the house to enter.<br/>Press X to read the letter.").start();
      }, 2000);

      screen = 1;
    }

    else if (event.keyCode === 97) {
      console.log("Pressed A");

      $("#enterance").fadeOut(2000);
      $("#message-box").fadeOut(2000);

      setTimeout(function () {
        hideAll();

        $("#living-room").fadeIn(2000);
        $("#message-box").fadeIn(2000);

        message_box_typewriter.typeString("").deleteAll();
        message_box_typewriter.typeString("Press X to go back to the enterance.").start();
      }, 2000);

      screen = 14;
    }

    else if (event.keyCode === 115) {
      console.log("Pressed S");
    }

    else if (event.keyCode === 100) {
      console.log("Pressed D");

      $("#enterance").fadeOut(2000);
      $("#message-box").fadeOut(2000);

      setTimeout(function () {
        hideAll();

        $("#second-floor").fadeIn(2000);
        $("#message-box").fadeIn(2000);

        message_box_typewriter.typeString("").deleteAll();
        message_box_typewriter.typeString("Press X and Y to access the two rooms.<br/>Press Z to go back downstairs.").start();
      }, 2000);

      screen = 5;
    }

    else if (event.keyCode === 120) {
      console.log("Pressed X");

      $("#enterance").fadeOut(2000);
      $("#message-box").fadeOut(2000);

      setTimeout(function () {
        hideAll();

        $("#basement").fadeIn(2000);
        $("#message-box").fadeIn(2000);

        message_box_typewriter.typeString("").deleteAll();
        message_box_typewriter.typeString("Use WASD keys to move around.").start();
      }, 2000);

      screen = 4;
    }
  }

  else if (screen === 4) {
    if (event.keyCode === 119) {
      console.log("Pressed W");

      $("#basement").fadeOut(2000);
      $("#message-box").fadeOut(2000);

      setTimeout(function () {
        hideAll();

        $("#library").fadeIn(2000);
        $("#message-box").fadeIn(2000);

        message_box_typewriter.typeString("").deleteAll();
        message_box_typewriter.typeString("Press X to read the letter.<br/>Press Y to go back to the basement.").start();
      }, 2000);

      screen = 6;
    }

    else if (event.keyCode === 97) {
      console.log("Pressed A");

      $("#basement").fadeOut(2000);
      $("#message-box").fadeOut(2000);

      setTimeout(function () {
        hideAll();

        $("#yard").fadeIn(2000);
        $("#message-box").fadeIn(2000);

        message_box_typewriter.typeString("").deleteAll();
        message_box_typewriter.typeString("Press X to read the letter.<br/>Press Y to go back to the basement.").start();
      }, 2000);

      screen = 8;
    }

    else if (event.keyCode === 100) {
      console.log("Pressed D");

      $("#basement").fadeOut(2000);
      $("#message-box").fadeOut(2000);

      setTimeout(function () {
        hideAll();

        $("#enterance").fadeIn(2000);
        $("#message-box").fadeIn(2000);

        message_box_typewriter.typeString("").deleteAll();
        message_box_typewriter.typeString("Use WASD keys to move around.<br/>Press X to visit the basement level.").start();
      }, 2000);

      screen = 3;
    }
  }

  else if (screen === 6) {
    if (event.keyCode === 120) {
      console.log("Pressed X");

      $("#library").fadeOut(2000);
      $("#message-box").fadeOut(2000);

      setTimeout(function () {
        hideAll();

        $("#library-info").fadeIn(2000);
        $("#message-box").fadeIn(2000);

        document.getElementById("paper-sound").play();

        message_box_typewriter.typeString("").deleteAll();
        message_box_typewriter.typeString("Read the letter.<br/>Press X to return to the library.").start();
      }, 2000);

      screen = 7
    }

    else if (event.keyCode === 121) {
      console.log("Pressed Y");

      $("#library").fadeOut(2000);
      $("#message-box").fadeOut(2000);

      setTimeout(function () {
        hideAll();

        $("#basement").fadeIn(2000);
        $("#message-box").fadeIn(2000);

        message_box_typewriter.typeString("").deleteAll();
        message_box_typewriter.typeString("Use WASD keys to move around.").start();
      }, 2000);

      screen = 4;
    }
  }

  else if (screen === 7) {
    if (event.keyCode === 120) {
      console.log("Pressed X");

      $("#library-info").fadeOut(2000);
      $("#message-box").fadeOut(2000);

      setTimeout(function () {
        hideAll();

        $("#library").fadeIn(2000);
        $("#message-box").fadeIn(2000);

        message_box_typewriter.typeString("").deleteAll();
        message_box_typewriter.typeString("Press X to read the letter.<br/>Press Y to go back to the basement.").start();
      }, 2000);

      screen = 6;
    }
  }

  else if (screen === 8) {
    if (event.keyCode === 120) {
      console.log("Pressed X");

      $("#yard").fadeOut(2000);
      $("#message-box").fadeOut(2000);

      setTimeout(function () {
        hideAll();

        $("#yard-info").fadeIn(2000);
        $("#message-box").fadeIn(2000);

        message_box_typewriter.typeString("").deleteAll();
        message_box_typewriter.typeString("Read the letter.<br/>Press X to go back to the yard.").start();
      }, 2000);

      screen = 9;
    }

    else if (event.keyCode === 121) {
      console.log("Pressed Y");

      $("#yard").fadeOut(2000);
      $("#message-box").fadeOut(2000);

      setTimeout(function () {
        hideAll();

        $("#basement").fadeIn(2000);
        $("#message-box").fadeIn(2000);

        message_box_typewriter.typeString("").deleteAll();
        message_box_typewriter.typeString("Use WASD keys to move around.").start();
      }, 2000);

      screen = 4;
    }
  }

  else if (screen === 9) {
    if (event.keyCode === 120) {
      console.log("Pressed X");

      $("#yard-info").fadeOut(2000);
      $("#message-box").fadeOut(2000);

      setTimeout(function () {
        hideAll();

        $("#yard").fadeIn(2000);
        $("#message-box").fadeIn(2000);

        message_box_typewriter.typeString("").deleteAll();
        message_box_typewriter.typeString("Press X to read the letter.<br/>Press Y to go back to the basement.").start();
      }, 2000);

      screen = 8;
    }
  }

  else if (screen === 5) {
    if (event.keyCode === 120) {
      console.log("Pressed X");

      $("#second-floor").fadeOut(2000);
      $("#message-box").fadeOut(2000);

      setTimeout(function () {
        hideAll();

        $("#room1").fadeIn(2000);
        $("#message-box").fadeIn(2000);

        message_box_typewriter.typeString("").deleteAll();
        message_box_typewriter.typeString("Press X to read the letter. Press Y to go back to the second floor.").start();
      }, 2000);

      screen = 10;
    }

    else if (event.keyCode === 121) {
      console.log("Pressed Y");

      $("#second-floor").fadeOut(2000);
      $("#message-box").fadeOut(2000);

      setTimeout(function () {
        hideAll();

        $("#room2").fadeIn(2000);
        $("#message-box").fadeIn(2000);

        message_box_typewriter.typeString("").deleteAll();
        message_box_typewriter.typeString("Press X to go to sleep. Press Y to go back to the second floor.").start();
      }, 2000);

      screen = 12;
    }

    else if (event.keyCode === 122) {
      console.log("Pressed Z");

      $("#second-floor").fadeOut(2000);
      $("#message-box").fadeOut(2000);

      setTimeout(function () {
        hideAll();

        $("#enterance").fadeIn(2000);
        $("#message-box").fadeIn(2000);

        message_box_typewriter.typeString("").deleteAll();
        message_box_typewriter.typeString("Use WASD keys to move around.<br/>Press X to visit the basement level.").start();
      }, 2000);

      screen = 3;
    }
  }

  else if (screen === 10) {
    if (event.keyCode === 120) {
      console.log("Pressed X");

      $("#room1").fadeOut(2000);
      $("#message-box").fadeOut(2000);

      setTimeout(function () {
        hideAll();

        $("#room1-info").fadeIn(2000);
        $("#message-box").fadeIn(2000);

        message_box_typewriter.typeString("").deleteAll();
        message_box_typewriter.typeString("Read the letter.<br/>Press X to go back to the bedroom.").start();
      }, 2000);

      screen = 11;
    }

    else if (event.keyCode === 121) {
      console.log("Pressed Y");

      $("#room1").fadeOut(2000);
      $("#message-box").fadeOut(2000);
    
      setTimeout(function () {
        hideAll();

        $("#second-floor").fadeIn(2000);
        $("#message-box").fadeIn(2000);

        message_box_typewriter.typeString("").deleteAll();
        message_box_typewriter.typeString("Press X and Y to access the two rooms.<br/>Press Z to go back downstairs.").start();
      }, 2000);

      screen = 5;
    }
  }

  else if (screen === 11) {
    if (event.keyCode === 120) {
      console.log("Pressed X");

      $("#room1-info").fadeOut(2000);
      $("#message-box").fadeOut(2000);

      setTimeout(function () {
        hideAll();

        $("#room1").fadeIn(2000);
        $("#message-box").fadeIn(2000);

        message_box_typewriter.typeString("").deleteAll();
        message_box_typewriter.typeString("Press X to read the letter. Press Y to go back to the second floor.").start();
      }, 2000);

      screen = 10;
    }
  }

  else if (screen === 12) {
    if (event.keyCode === 120) {
      console.log("Pressed X");

      $("#room2").fadeOut(2000);

      message_box_typewriter.typeString("").deleteAll();
      message_box_typewriter.typeString("Press X to wake up.").start();

      screen = 13;
    }

    else if (event.keyCode === 121) {
      console.log("Pressed Y");

      $("#room2").fadeOut(2000);
      $("#message-box").fadeOut(2000);

      setTimeout(function () {
        hideAll();

        $("#second-floor").fadeIn(2000);
        $("#message-box").fadeIn(2000);

        message_box_typewriter.typeString("").deleteAll();
        message_box_typewriter.typeString("Press X and Y to access the two rooms.<br/>Press Z to go back downstairs.").start();
      }, 2000);

      screen = 5;
    }
  }

  else if (screen === 13) {
    if (event.keyCode === 120) {
      console.log("Pressed X");

      message_box_typewriter.typeString("").deleteAll();
      message_box_typewriter.typeString("Press X to go to sleep. Press Y to go back to the second floor.").start();

      $("#room2").fadeIn(2000);

      screen = 12;
    }
  }

  else if (screen === 14) {
    if (event.keyCode === 120) {
      console.log("Pressed X");

      $("#living-room").fadeOut(2000);
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
    }
  }
});