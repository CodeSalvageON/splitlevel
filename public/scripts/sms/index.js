$("#send").submit(function () {
  event.preventDefault();
  
  const data = {
    txt : document.getElementById("msg").value
  }

  document.getElementById("msg").value = "";

  fetch ('/sms', {
    method : "POST",
    headers : {
      'Content-Type' : 'application/json'
    },
    body : JSON.stringify(data)
  })
  .then(response => response.text())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });
});