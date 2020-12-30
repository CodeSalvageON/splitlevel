fetch ('/public-servers')
.then(response => response.text())
.then(data => {
  document.getElementById("servers-div").innerHTML = data;
})
.catch(error => {
  console.log(error);
});