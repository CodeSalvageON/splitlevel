let is_other_app_on = false;

$(this).keypress(function (event) {
  if (event.keyCode === 113) {
    if (screen === 1) {
      return false;
    }
    
    else {
      $("#iphone-modal").fadeIn(2000);
    }

    if (is_other_app_on === true) {
      return false;
    }
  }
});

$("#sms-icon").click(function () {
  is_other_app_on = true;

  $("#iphone-modal").fadeOut(2000);

  setTimeout(function () {
    $("#sms-modal").fadeIn(2000);
  }, 2000);
});

$("#close-sms-modal").click(function () {
  is_other_app_on = false;

  $("#sms-modal").fadeOut(2000);
});