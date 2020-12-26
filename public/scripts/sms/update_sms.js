function updateSMS () {
  fetch('/get-sms')
  .then(response => response.text())
  .then(data => {
    document.getElementById("msgs").innerHTML = data;
  })
  .catch(error => {
    console.log(error);
  });
}

setInterval(updateSMS, 500);