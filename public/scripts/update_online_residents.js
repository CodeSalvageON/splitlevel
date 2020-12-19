function getUpdate () {
  fetch ('/online')
  .then(response => response.text())
  .then(data => {
    document.getElementById("residents-online").innerText = "Residents Online: " + data;
  })
  .catch(error => {
    console.log(error);
  });
}

setInterval(getUpdate, 500);